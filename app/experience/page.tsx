'use client';

import { useState } from 'react';
import PageHeader from '@/components/page-header';
import ExperienceCard from '@/components/experience-card';
import { experienceData } from '@/data/experience';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ExperiencePage() {
  const categories = [
    { value: 'all', label: 'All Experience' },
    { value: 'government', label: 'Government Roles' },
    { value: 'consultancy', label: 'Consultancy' },
    { value: 'advisory', label: 'Advisory' },
    { value: 'research', label: 'Research' },
    { value: 'community', label: 'Community' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredExperience =
    activeCategory === 'all' ? experienceData : experienceData.filter((exp) => exp.category === activeCategory);

  return (
    <div>
      <PageHeader
        title="Professional Experience"
        subtitle="20+ years in development economics and policy"
        description="Comprehensive experience across government, consultancy, research, and community development sectors"
      />

      <div className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="all" onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 w-full gap-0 h-auto">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat.value} 
                  value={cat.value} 
                  className="text-xs sm:text-sm px-1 sm:px-2 md:px-3 py-2 sm:py-3 whitespace-normal break-words"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory} className="mt-6 sm:mt-8">
              <div className="space-y-4 sm:space-y-6">
                {filteredExperience.map((exp) => (
                  <ExperienceCard
                    key={exp.id}
                    title={exp.title}
                    organization={exp.organization}
                    period={exp.period}
                    description={exp.description}
                    type={exp.category
                      .split('-')
                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' ')}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Experience Summary */}
          <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            <div className="bg-primary/10 rounded-xl p-4 sm:p-5 md:p-6 border border-primary/20">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">20+</div>
              <p className="text-muted-foreground font-semibold text-sm sm:text-base">Years of Experience</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                Dedicated work in development economics and public policy
              </p>
            </div>
            <div className="bg-primary/10 rounded-xl p-4 sm:p-5 md:p-6 border border-primary/20">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">6</div>
              <p className="text-muted-foreground font-semibold text-sm sm:text-base">Major Positions</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                Government, consultancy, research, and community roles
              </p>
            </div>
            <div className="bg-primary/10 rounded-xl p-4 sm:p-5 md:p-6 border border-primary/20">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">50+</div>
              <p className="text-muted-foreground font-semibold text-sm sm:text-base">Publications</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                Peer-reviewed journals, policy papers, and conference presentations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
