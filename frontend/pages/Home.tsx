import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useMode } from '../contexts/ModeContext';
import { usePatientRecords } from '../contexts/PatientRecordsContext';
import { useMoodTracking } from '../contexts/MoodTrackingContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import AddAppointmentDialog from './records/components/dialogs/AddAppointmentDialog';
import EmptyState from '../components/EmptyState';
import { 
  Stethoscope, 
  FileText, 
  Book, 
  Wrench, 
  AlertTriangle,
  Calculator,
  Heart,
  MapPin,
  Shield,
  Zap,
  Globe,
  Users,
  ArrowRight,
  Star,
  CheckCircle,
  Activity,
  Brain,
  Sparkles,
  User,
  Lightbulb,
  Plus,
  Calendar
} from 'lucide-react';

const PersonalHome = () => {
  const { t } = useLanguage();
  const { patients, appointments, addAppointment } = usePatientRecords();
  const { entries } = useMoodTracking();
  const { toast } = useToast();
  const myProfile = patients[0];
  const myAppointments = myProfile ? appointments.filter(a => a.patientId === myProfile.id && !a.completed && new Date(a.date) > new Date()).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()) : [];
  const latestMood = entries[0];

  const [showAddAppointment, setShowAddAppointment] = useState(false);

  const tips = [
    t('pages.home.tip1'),
    t('pages.home.tip2'),
    t('pages.home.tip3'),
    t('pages.home.tip4'),
    t('pages.home.tip5')
  ];
  const todaysTip = useMemo(() => tips[new Date().getDate() % tips.length], [tips]);

  const quickAccessItems = [
    {
      title: t('pages.home.myHealthRecord'),
      description: t('pages.home.viewHealthInfo'),
      icon: FileText,
      path: '/records',
      color: 'bg-gradient-to-br from-blue-600 to-blue-700'
    },
    {
      title: t('common.triage'),
      description: t('pages.home.checkSymptoms'),
      icon: Stethoscope,
      path: '/triage',
      color: 'bg-gradient-to-br from-red-600 to-red-700'
    },
    {
      title: t('tools.mentalHealth.title'),
      description: t('pages.home.trackWellbeing'),
      icon: Brain,
      path: '/tools/mental-health',
      color: 'bg-gradient-to-br from-green-600 to-green-700'
    },
    {
      title: t('tools.facilities.title'),
      description: t('pages.home.findFacilities'),
      icon: MapPin,
      path: '/tools/facilities',
      color: 'bg-gradient-to-br from-amber-600 to-orange-700'
    }
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-2xl">
              <User className="h-12 w-12 sm:h-16 sm:w-16 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            {t('pages.home.welcome')}{myProfile ? `, ${myProfile.name.split(' ')[0]}` : '!'}
          </h1>
          <p className="text-lg text-gray-600">{t('pages.home.personalDashboard')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickAccessItems.map((item, index) => (
            <Link key={index} to={item.path}>
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full group hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl text-white mb-4 transition-all group-hover:scale-110 ${item.color}`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg group-hover:text-green-600">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{t('pages.home.upcomingAppointments')}</CardTitle>
                {myProfile && (
                  <Button size="sm" onClick={() => setShowAddAppointment(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    {t('common.addAppointment')}
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {myAppointments.length > 0 ? (
                <div className="space-y-3">
                  {myAppointments.slice(0, 3).map(app => (
                    <div key={app.id} className="p-3 rounded-lg border flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{app.title}</p>
                        <p className="text-sm text-gray-600">{new Date(app.date).toLocaleString()}</p>
                      </div>
                      <Badge>{t('common.upcoming')}</Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon="appointments"
                  title={t('pages.home.noAppointments')}
                  description="Schedule your next health appointment"
                  action={{
                    label: t('common.addAppointment'),
                    onClick: () => setShowAddAppointment(true)
                  }}
                  secondaryAction={{
                    label: 'View Calendar',
                    onClick: () => {}
                  }}
                />
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('pages.home.latestMood')}</CardTitle>
            </CardHeader>
            <CardContent>
              {latestMood ? (
                <div className="flex items-center space-x-4">
                  <div className="text-5xl">{latestMood.mood === 1 ? '😢' : latestMood.mood === 2 ? '😔' : latestMood.mood === 3 ? '😐' : latestMood.mood === 4 ? '😊' : '😄'}</div>
                  <div>
                    <p className="font-semibold">{t('tools.mentalHealth.mood')}: {latestMood.mood}/5, {t('tools.mentalHealth.stressLevel')}: {latestMood.stressLevel}/5</p>
                    <p className="text-sm text-gray-600">{new Date(latestMood.date).toLocaleDateString()}</p>
                    {latestMood.notes && <p className="text-sm text-gray-500 mt-1">"{latestMood.notes}"</p>}
                  </div>
                </div>
              ) : (
                <p className="text-center text-gray-500 py-4">{t('pages.home.noMood')}</p>
              )}
            </CardContent>
          </Card>
          
          {myProfile && (
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>{t('pages.records.healthSummary')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div><strong>{t('common.bloodType')}:</strong> <Badge variant="outline">{myProfile.bloodType || 'N/A'}</Badge></div>
                  <div><strong>{t('common.allergies')}:</strong> {myProfile.allergies?.length ? myProfile.allergies.map(a => <Badge key={a} variant="destructive" className="mr-1">{a}</Badge>) : 'None'}</div>
                  <div className="md:col-span-2"><strong>{t('pages.records.chronicConditions')}:</strong> {myProfile.chronicConditions?.length ? myProfile.chronicConditions.map(c => <Badge key={c} variant="secondary" className="mr-1">{c}</Badge>) : 'None'}</div>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="lg:col-span-1 bg-gradient-to-r from-green-50 to-green-100 border border-green-200/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="h-5 w-5 text-green-600" />
                <span>{t('pages.home.healthTip')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg">{todaysTip}</p>
            </CardContent>
          </Card>
        </div>
      </div>
      {myProfile && (
        <AddAppointmentDialog
          isOpen={showAddAppointment}
          onClose={() => setShowAddAppointment(false)}
          patientId={myProfile.id}
          addAppointment={addAppointment}
        />
      )}
    </>
  );
};

const SpecialistHome = () => {
  const { t } = useLanguage();
  const { patients, appointments } = usePatientRecords();

  const upcomingAppointments = appointments
    .filter(a => !a.completed && new Date(a.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);

  const quickAccessItems = [
    {
      title: t('pages.home.emergencyTriage'),
      description: t('pages.home.quickSymptomAssessment'),
      icon: AlertTriangle,
      path: '/triage',
      color: 'bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800',
      badge: t('common.emergency'),
      priority: 'high'
    },
    {
      title: t('pages.home.medicalTools'),
      description: t('pages.home.whoCompliantTools'),
      icon: Calculator,
      path: '/tools',
      color: 'bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
      badge: t('common.tools'),
      priority: 'medium'
    },
    {
      title: t('pages.home.patientRecords'),
      description: t('pages.home.secureRecords'),
      icon: FileText,
      path: '/records',
      color: 'bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800',
      badge: t('common.records'),
      priority: 'medium'
    },
    {
      title: t('common.encyclopedia'),
      description: t('pages.home.trustedSources'),
      icon: Book,
      path: '/encyclopedia',
      color: 'bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800',
      badge: t('common.information'),
      priority: 'low'
    }
  ];

  const stats = [
    { icon: Users, value: patients.length, label: t('pages.records.totalPatients'), color: 'text-blue-600' },
    { icon: Calendar, value: upcomingAppointments.length, label: t('pages.home.upcomingAppointments'), color: 'text-green-600' },
    { icon: Stethoscope, value: '500+', label: t('pages.home.diseasesCovered'), color: 'text-red-600' },
    { icon: Zap, value: '100%', label: t('pages.home.offlineReady'), color: 'text-amber-600' }
  ];

  const features = [
    {
      icon: Shield,
      title: t('pages.home.whoCompliant'),
      description: t('pages.home.whoDescription')
    },
    {
      icon: Zap,
      title: t('pages.home.offlineFirst'),
      description: t('pages.home.offlineDescription')
    },
    {
      icon: Globe,
      title: t('pages.home.multiLanguage'),
      description: t('pages.home.multiLanguageDescription')
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-2xl animate-pulse">
                <Heart className="h-12 w-12 sm:h-16 sm:w-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 animate-bounce">
                <Star className="h-4 w-4 text-red-900" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-4 leading-tight">
            {t('pages.home.title')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-2 font-medium">
            {t('pages.home.subtitle')}
          </p>
          <p className="text-base sm:text-lg text-gray-500 max-w-3xl mx-auto mb-8 leading-relaxed">
            {t('pages.home.description')}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <stat.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* CTA Button */}
          <Link to="/records">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              {t('common.records')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Quick Access */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {t('pages.home.quickAccess')}
              </h2>
              <p className="text-gray-600 mt-1">{t('pages.home.frequentFeatures')}</p>
            </div>
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 animate-pulse">
              {t('pages.home.popular')}
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickAccessItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Card className="hover:shadow-2xl transition-all duration-300 cursor-pointer h-full group hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-4 sm:p-6 text-center relative">
                    <div className="absolute top-3 right-3">
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${
                          item.priority === 'high' ? 'bg-red-100 text-red-800' :
                          item.priority === 'medium' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {item.badge}
                      </Badge>
                    </div>
                    <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl text-white mb-4 transition-all group-hover:scale-110 group-hover:rotate-3 ${item.color}`}>
                      <item.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg group-hover:text-green-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Dashboard Overview */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            {t('pages.home.dashboardOverview')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-purple-500" />
                  <span>{t('pages.home.upcomingAppointments')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {upcomingAppointments.length > 0 ? (
                  <div className="space-y-3">
                    {upcomingAppointments.map(app => (
                      <Link to="/records" key={app.id} className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                        <p className="font-semibold">{app.title}</p>
                        <p className="text-sm text-gray-600">{app.patientName}</p>
                        <p className="text-xs text-gray-500">{new Date(app.date).toLocaleString()}</p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500 py-4">{t('pages.home.noAppointments')}</p>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-blue-500" />
                  <span>{t('pages.home.recentPatientActivity')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* This would be implemented with real data */}
                <p className="text-center text-gray-500 py-4">No recent activity.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-to-br from-white to-slate-50/50 border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-6 sm:p-8 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 via-blue-700/20 to-blue-800/20 animate-pulse"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="p-2 bg-white/15 rounded-xl">
                <Heart className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">
                {t('pages.home.trustedCompanion')}
              </h3>
            </div>
            <p className="text-blue-100 text-base sm:text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
              {t('pages.home.companionDescription')}
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/12 rounded-full px-4 py-2 hover:bg-white/20 transition-colors">
                <CheckCircle className="h-4 w-4" />
                <span>{t('pages.home.whoCompliant')}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/12 rounded-full px-4 py-2 hover:bg-white/20 transition-colors">
                <CheckCircle className="h-4 w-4" />
                <span>{t('pages.home.offlineReady')}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/12 rounded-full px-4 py-2 hover:bg-white/20 transition-colors">
                <CheckCircle className="h-4 w-4" />
                <span>{t('pages.home.multiLanguage')}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/12 rounded-full px-4 py-2 hover:bg-white/20 transition-colors">
                <CheckCircle className="h-4 w-4" />
                <span>{t('pages.home.privacyFirst')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const { mode } = useMode();

  return mode === 'personal' ? <PersonalHome /> : <SpecialistHome />;
}
