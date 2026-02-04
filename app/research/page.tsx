'use client';

import { useState } from 'react';
import PageHeader from '@/components/page-header';
import PublicationCard from '@/components/publication-card';
import ResearchProjectCard from '@/components/research-project-card';
import TrainingCard from '@/components/training-card';
import { publicationsData } from '@/data/publications';
import { researchProjectsData } from '@/data/research-projects';
import { trainingsData } from '@/data/trainings';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ResearchPage() {
  const categories = [
    { value: 'all', label: 'All Publications' },
    { value: 'journal', label: 'Journal Articles' },
    { value: 'policy', label: 'Policy Papers' },
    { value: 'conference', label: 'Conference' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('publications');

  const filteredPublications =
    activeCategory === 'all'
      ? publicationsData
      : publicationsData.filter((pub) => pub.type === activeCategory);

  const sortedPublications = [...filteredPublications].sort((a, b) => b.year - a.year);
  const sortedResearchProjects = [...researchProjectsData].sort((a, b) => {
    const aYear = parseInt(b.period.split('-')[1]);
    const bYear = parseInt(a.period.split('-')[1]);
    return aYear - bYear;
  });
  const sortedTrainings = [...trainingsData].sort((a, b) => {
    const aYear = parseInt(b.date.split('-')[0]);
    const bYear = parseInt(a.date.split('-')[0]);
    return aYear - bYear;
  });

  return (
    <div>
      <PageHeader
        title="Research & Publications"
        subtitle="Comprehensive research portfolio and professional development"
        description="Research projects, peer-reviewed publications, and professional training programs"
      />

      <div className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="publications" onValueChange={setActiveTab} className="mb-8 sm:mb-12">
            <TabsList className="grid w-full grid-cols-3 h-auto gap-0">
              <TabsTrigger value="publications" className="text-xs sm:text-sm px-1 sm:px-3 py-2 sm:py-3 whitespace-normal">
                <span className="hidden sm:inline">Publications</span>
                <span className="sm:hidden">Pub</span>
              </TabsTrigger>
              <TabsTrigger value="research" className="text-xs sm:text-sm px-1 sm:px-3 py-2 sm:py-3 whitespace-normal">
                <span className="hidden sm:inline">Research Projects</span>
                <span className="sm:hidden">Research</span>
              </TabsTrigger>
              <TabsTrigger value="trainings" className="text-xs sm:text-sm px-1 sm:px-3 py-2 sm:py-3 whitespace-normal">
                <span className="hidden sm:inline">Trainings</span>
                <span className="sm:hidden">Train</span>
              </TabsTrigger>
            </TabsList>

            {/* Publications Tab */}
            <TabsContent value="publications" className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Papers and Publications</h3>
                <Tabs defaultValue="all" onValueChange={setActiveCategory} className="mb-6 sm:mb-8">
                  <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full h-auto gap-0">
                    {categories.map((cat) => (
                      <TabsTrigger key={cat.value} value={cat.value} className="text-xs sm:text-sm px-1 sm:px-3 py-2 whitespace-normal">
                        {cat.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  <TabsContent value={activeCategory} className="mt-8">
                    <div className="space-y-4">
                      {sortedPublications.map((pub) => (
                        <PublicationCard
                          key={pub.id}
                          title={pub.title}
                          authors={pub.authors}
                          journal={pub.journal}
                          year={pub.year}
                          category={pub.type.charAt(0).toUpperCase() + pub.type.slice(1)}
                          description={pub.description}
                          link={pub.link}
                        />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </TabsContent>

            {/* Research Projects Tab */}
            <TabsContent value="research" className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Research Projects</h3>
                <div className="space-y-4">
                  {sortedResearchProjects.map((project) => (
                    <ResearchProjectCard
                      key={project.id}
                      title={project.title}
                      period={project.period}
                      institution={project.institution}
                      location={project.location}
                      description={project.description}
                      keywords={project.keywords}
                      link={project.link}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Trainings Tab */}
            <TabsContent value="trainings" className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Professional Training Programs</h3>
                <div className="space-y-4">
                  {sortedTrainings.map((training) => (
                    <TrainingCard
                      key={training.id}
                      title={training.title}
                      date={training.date}
                      institution={training.institution}
                      location={training.location}
                      description={training.description}
                      focus={training.focus}
                      link={training.link}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Research Focus Areas */}
          <div className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12 border-t">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Research Focus Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="border-l-4 border-l-primary pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Fiscal Federalism & Public Finance</h3>
                <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-xs sm:text-sm">
                  <li>• Fiscal decentralization in federal systems</li>
                  <li>• Intergovernmental fiscal transfers</li>
                  <li>• Local government revenue mobilization</li>
                  <li>• Fiscal sustainability and debt management</li>
                </ul>
              </div>
              <div className="border-l-4 border-l-primary pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Development Economics</h3>
                <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-xs sm:text-sm">
                  <li>• Poverty reduction strategies</li>
                  <li>• Human capital and development</li>
                  <li>• Economic inequality and equity</li>
                  <li>• Development policy analysis</li>
                </ul>
              </div>
              <div className="border-l-4 border-l-primary pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Governance & Institutions</h3>
                <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-xs sm:text-sm">
                  <li>• Institutional reform and development</li>
                  <li>• Anti-corruption and transparency</li>
                  <li>• Democratic governance</li>
                  <li>• Administrative capacity building</li>
                </ul>
              </div>
              <div className="border-l-4 border-l-primary pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Community Development</h3>
                <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-xs sm:text-sm">
                  <li>• Participatory development planning</li>
                  <li>• Community-driven development</li>
                  <li>• Social capital and collective action</li>
                  <li>• Local economic development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
