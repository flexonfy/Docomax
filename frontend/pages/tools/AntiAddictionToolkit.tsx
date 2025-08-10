import React, { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAddictionTracking, AddictionType } from '../../contexts/AddictionTrackingContext';
import { addictionTips } from '../../data/addictionTips';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { HeartHandshake, Cigarette, GlassWater, Pill, Monitor, Calendar, Plus, TrendingUp, Lightbulb, CheckCircle, Trash2, Star } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const addictionInfo = {
  smoking: { icon: Cigarette, color: 'text-orange-500' },
  alcohol: { icon: GlassWater, color: 'text-blue-500' },
  drugs: { icon: Pill, color: 'text-red-500' },
  pornography: { icon: Monitor, color: 'text-purple-500' }
};

const milestones = [1, 7, 14, 30, 60, 90, 180, 365];

const Dashboard = () => {
  const { t, language } = useLanguage();
  const { addiction, checkIns, addCheckIn, getDaysSober, resetAddiction } = useAddictionTracking();
  const { toast } = useToast();
  const [checkIn, setCheckIn] = useState({ cravingLevel: 3 as 1|2|3|4|5, mood: 3 as 1|2|3|4|5, notes: '', abstained: true });
  const [showMilestone, setShowMilestone] = useState(false);

  const daysSober = getDaysSober();
  const currentMilestone = milestones.find(m => m === daysSober);

  useEffect(() => {
    if (currentMilestone) {
      setShowMilestone(true);
      setTimeout(() => setShowMilestone(false), 5000); // Show animation for 5 seconds
    }
  }, [daysSober, currentMilestone]);

  const todaysTip = useMemo(() => {
    if (!addiction) return '';
    const tips = addictionTips[addiction.type][language];
    const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    return tips[dayOfYear % tips.length];
  }, [addiction, language]);

  const handleCheckIn = () => {
    addCheckIn(checkIn);
    toast({ title: "Check-in saved!", description: "Your progress has been recorded." });
    setCheckIn({ cravingLevel: 3, mood: 3, notes: '', abstained: true });
  };

  const chartData = checkIns.slice(0, 30).reverse().map(ci => ({
    date: new Date(ci.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    craving: ci.cravingLevel,
    mood: ci.mood
  }));

  if (!addiction) return null;

  return (
    <div className="space-y-8 relative">
      {showMilestone && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="text-center text-white animate-bounce">
            <Star className="h-24 w-24 mx-auto text-yellow-400" />
            <h2 className="text-4xl font-bold mt-4">Congratulations!</h2>
            <p className="text-2xl">{daysSober} days sober!</p>
          </div>
        </div>
      )}
      <Card className="text-center bg-gradient-to-br from-green-50 to-blue-50">
        <CardHeader>
          <CardTitle className="text-2xl">You are on your journey to overcome</CardTitle>
          <CardDescription className="text-lg font-semibold capitalize flex items-center justify-center space-x-2">
            {React.createElement(addictionInfo[addiction.type].icon, { className: `h-6 w-6 ${addictionInfo[addiction.type].color}` })}
            <span>{addiction.type} addiction</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-7xl font-bold text-green-600">{daysSober}</div>
          <div className="text-xl text-gray-600">Days Sober</div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center"><Lightbulb className="h-5 w-5 mr-2 text-yellow-500" /> Daily Tip</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg italic">"{todaysTip}"</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-blue-500" /> Daily Check-in</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Craving Level (1-5)</Label>
              <div className="flex justify-between mt-1">
                {[1,2,3,4,5].map(l => <Button key={l} size="sm" variant={checkIn.cravingLevel === l ? 'default' : 'outline'} onClick={() => setCheckIn(p => ({...p, cravingLevel: l as any}))}>{l}</Button>)}
              </div>
            </div>
            <div>
              <Label>Mood (1-5, 5 is best)</Label>
              <div className="flex justify-between mt-1">
                {[1,2,3,4,5].map(l => <Button key={l} size="sm" variant={checkIn.mood === l ? 'default' : 'outline'} onClick={() => setCheckIn(p => ({...p, mood: l as any}))}>{l}</Button>)}
              </div>
            </div>
            <Textarea placeholder="Notes or triggers..." value={checkIn.notes} onChange={e => setCheckIn(p => ({...p, notes: e.target.value}))} />
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="abstained" checked={checkIn.abstained} onChange={e => setCheckIn(p => ({...p, abstained: e.target.checked}))} />
              <Label htmlFor="abstained">I abstained today</Label>
            </div>
            <Button onClick={handleCheckIn} className="w-full">Submit Check-in</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center"><TrendingUp className="h-5 w-5 mr-2" /> Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[1, 5]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="craving" stroke="#ef4444" name="Craving" />
              <Line type="monotone" dataKey="mood" stroke="#22c55e" name="Mood" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button variant="destructive" onClick={resetAddiction}>Reset My Journey</Button>
      </div>
    </div>
  );
};

const Setup = () => {
  const { t } = useLanguage();
  const { setAddiction } = useAddictionTracking();
  const [addictionType, setAddictionType] = useState<AddictionType | null>(null);
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);

  const handleStart = () => {
    if (addictionType) {
      setAddiction({ type: addictionType, startDate: new Date(startDate) });
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Start Your Recovery Journey</CardTitle>
        <CardDescription>Select the addiction you want to overcome. We're here to help.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p>1. What are you working on?</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(addictionInfo).map(([key, { icon: Icon, color }]) => (
            <Button key={key} variant={addictionType === key ? 'default' : 'outline'} className={`h-24 flex-col space-y-2 ${addictionType === key ? '' : color}`} onClick={() => setAddictionType(key as AddictionType)}>
              <Icon className="h-8 w-8" />
              <span className="capitalize">{key}</span>
            </Button>
          ))}
        </div>
        {addictionType && (
          <div className="space-y-4">
            <p>2. When did you start your journey? (Quit Date)</p>
            <div>
              <Label htmlFor="startDate">Start Date</Label>
              <Input id="startDate" type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
            </div>
            <Button onClick={handleStart} className="w-full">Start Tracking</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default function AntiAddictionToolkit() {
  const { t } = useLanguage();
  const { addiction } = useAddictionTracking();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <HeartHandshake className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            {t('tools.antiAddiction.title')}
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          {t('tools.antiAddiction.description')}
        </p>
      </div>
      {addiction ? <Dashboard /> : <Setup />}
    </div>
  );
}
