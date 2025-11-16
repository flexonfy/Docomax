import React, { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { healthBuddyQA } from '../data/faqData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Bot, Search, Shield, Heart, BookOpen, Brain, HelpCircle, MessageSquare, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FAQ() {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>(healthBuddyQA[0].id);

  const filteredQA = useMemo(() => {
    if (!searchTerm) {
      return healthBuddyQA.filter(category => category.id === activeCategory);
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return healthBuddyQA.map(category => {
      const filteredQuestions = category.questions.filter(qa => 
        qa.question[language].toLowerCase().includes(lowerCaseSearchTerm) ||
        qa.answer[language].toLowerCase().includes(lowerCaseSearchTerm)
      );
      return { ...category, questions: filteredQuestions };
    }).filter(category => category.questions.length > 0);
  }, [searchTerm, language, activeCategory]);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'sexual_health': return <Heart className="h-5 w-5" />;
      case 'menstrual_health': return <BookOpen className="h-5 w-5" />;
      case 'body_puberty': return <UserCheck className="h-5 w-5" />;
      case 'mental_health': return <Brain className="h-5 w-5" />;
      case 'general_health': return <Shield className="h-5 w-5" />;
      default: return <HelpCircle className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-fuchsia-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <div className="inline-block p-4 bg-gradient-to-r from-rose-500 to-fuchsia-600 rounded-2xl text-white shadow-lg mb-4">
            <MessageSquare className="h-10 w-10" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-rose-600 to-fuchsia-600 bg-clip-text text-transparent">
            {t('pages.faq.title')}
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            {t('pages.faq.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>{t('common.categories')}</CardTitle>
                <CardDescription>{t('pages.faq.selectTopic')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {healthBuddyQA.map((category) => (
                    <Button
                      key={category.id}
                      variant={activeCategory === category.id && !searchTerm ? 'default' : 'outline'}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setSearchTerm('');
                      }}
                      className="w-full justify-start text-left h-auto p-3 transition-all duration-200 hover:shadow-md"
                    >
                      <div className="flex items-center space-x-3">
                        {getCategoryIcon(category.id)}
                        <span>{category.title[language]}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Q&A Section */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder={t('pages.faq.searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 text-base rounded-full shadow-md"
                />
              </div>
            </div>

            {filteredQA.length > 0 ? (
              <div className="space-y-6">
                {filteredQA.map((category) => (
                  <div key={category.id}>
                    {(searchTerm || activeCategory === category.id) && (
                      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center space-x-2">
                        {getCategoryIcon(category.id)}
                        <span>{category.title[language]}</span>
                      </h2>
                    )}
                    <Accordion type="single" collapsible className="w-full space-y-2">
                      {category.questions.map((qa, idx) => (
                        <AccordionItem key={idx} value={`${category.id}-${idx}`} className="bg-white/80 backdrop-blur-sm border rounded-lg shadow-sm hover:shadow-md transition-all">
                          <AccordionTrigger className="text-left px-4 py-3 font-medium text-gray-800 hover:no-underline">
                            {qa.question[language]}
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4 prose prose-sm max-w-none text-gray-700">
                            <p>{qa.answer[language]}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">{t('pages.faq.noQuestionsFound')}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 shadow-lg">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-600 rounded-full text-white">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2 text-lg">
                {t('pages.faq.privacy')}
              </h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                {t('pages.faq.privacyText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
