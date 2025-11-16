import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import { Heart, Wifi, WifiOff, Menu, User, Briefcase, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link, useLocation } from 'react-router-dom';
import { useMode } from '../contexts/ModeContext';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const getPageTitle = (pathname: string, t: (key: string, replacements?: Record<string, string | number>) => string): string => {
  const routeToTitleKey: { [key: string]: string } = {
    '/': 'common.home',
    '/triage': 'common.triage',
    '/records': 'common.records',
    '/encyclopedia': 'common.encyclopedia',
    '/tools': 'common.tools',
    '/guides': 'common.guides',
    '/faq': 'common.faq',
    '/tools/dosage': 'tools.dosage.title',
    '/tools/bmi': 'tools.bmi.title',
    '/tools/pregnancy': 'tools.pregnancy.title',
    '/tools/ors': 'tools.ors.title',
    '/tools/first-aid': 'tools.firstAid.title',
    '/tools/vaccination': 'tools.vaccination.title',
    '/tools/facilities': 'tools.facilities.title',
    '/tools/mental-health': 'tools.mentalHealth.title',
    '/tools/sanitation': 'tools.sanitation.title',
    '/tools/drug-interactions': 'tools.drugInteraction.title',
    '/tools/medical-converter': 'tools.medicalConverter.title',
    '/tools/iv-calculator': 'tools.ivCalculator.title',
    '/tools/glasgow-coma-scale': 'tools.gcs.title',
    '/tools/apgar-score': 'tools.apgar.title',
    '/tools/pain-scale': 'tools.painScale.title',
    '/tools/anti-addiction': 'tools.antiAddiction.title',
  };

  const titleKey = routeToTitleKey[pathname];
  if (titleKey) {
    return t(titleKey);
  }

  return 'Docomax';
};

export default function Header() {
  const { t } = useLanguage();
  const { mode, toggleMode } = useMode();
  const location = useLocation();
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);

  React.useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  React.useEffect(() => {
    const pageTitle = getPageTitle(location.pathname, t);
    document.title = `Docomax - ${pageTitle}`;
  }, [location.pathname, t]);

  const navigationItems = [
    { path: '/', label: t('common.home') },
    { path: '/triage', label: t('common.triage') },
    { path: '/records', label: t('common.records') },
    { path: '/encyclopedia', label: t('common.encyclopedia') },
    { path: '/tools', label: t('common.tools') },
    { path: '/faq', label: t('common.faq') }
  ];

  return (
    <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-2xl border-b border-blue-500/10 sticky top-0 z-40" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity" aria-label="Docomax - Healthcare Advisor Home">
              <div className="p-2 bg-white/12 rounded-lg backdrop-blur-sm border border-white/15" aria-hidden="true">
                <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl font-bold tracking-tight">{t('pages.home.title')}</h1>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-blue-100" aria-live="polite">
                  {isOnline ? (
                    <>
                      <Wifi className="h-3 w-3" aria-hidden="true" />
                      <span>Online</span>
                    </>
                  ) : (
                    <>
                      <WifiOff className="h-3 w-3" aria-hidden="true" />
                      <span>Offline Mode</span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 ${
                  location.pathname === item.path
                    ? 'bg-white/20 text-white shadow-md'
                    : 'text-blue-50 hover:text-white hover:bg-white/15'
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2">
              <Label htmlFor="mode-switch" className="text-xs text-blue-100 cursor-pointer flex items-center space-x-1">
                {mode === 'personal' ? <User className="h-3 w-3" /> : <Briefcase className="h-3 w-3" />}
                <span>{mode === 'personal' ? 'Personal' : 'Specialist'}</span>
              </Label>
              <Switch
                id="mode-switch"
                checked={mode === 'specialist'}
                onCheckedChange={toggleMode}
                aria-label="Toggle between personal and specialist mode"
              />
            </div>
            <LanguageSelector />

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <nav className="flex flex-col space-y-4 mt-8" aria-label="Mobile navigation">
                  <div className="flex items-center space-x-3 pb-4 border-b" aria-hidden="true">
                    <Heart className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold text-gray-900">{t('pages.home.title')}</span>
                  </div>
                  {navigationItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        location.pathname === item.path
                          ? 'bg-blue-100 text-blue-900'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      aria-current={location.pathname === item.path ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-t pt-4 sm:hidden">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="mobile-mode-switch" className="text-sm font-medium text-gray-700">
                        Mode
                      </Label>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-600">{mode === 'personal' ? 'Personal' : 'Specialist'}</span>
                        <Switch
                          id="mobile-mode-switch"
                          checked={mode === 'specialist'}
                          onCheckedChange={toggleMode}
                        />
                      </div>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
