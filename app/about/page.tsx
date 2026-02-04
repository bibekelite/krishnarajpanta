import PageHeader from '@/components/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Timeline from '@/components/timeline';
import { educationData } from '@/data/education';
import Image from 'next/image';

export default function AboutPage() {
  const values = [
    {
      title: 'Development',
      description: 'Committed to evidence-based development strategies that lift communities out of poverty and create sustainable economic opportunities.',
    },
    {
      title: 'Governance',
      description: 'Strong advocate for transparent, accountable, and participatory governance at all levels of government.',
    },
    {
      title: 'Equity',
      description: 'Dedicated to inclusive policies that ensure equitable access to resources, opportunities, and public services.',
    },
    {
      title: 'Public Service',
      description: 'Driven by the mission to contribute to Nepal\'s development and serve the public interest through research and policy.',
    },
  ];

  return (
    <div>
      <PageHeader
        title="About Dr. Krishna Raj Panta"
        subtitle="Development Economist & Policy Expert"
        description="Dedicated professional with expertise in fiscal federalism, public finance, and development economics"
      />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Professional Biography */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Professional Biography</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dr. Krishna Raj Panta is a distinguished development economist with over 20 years of experience in public policy, institutional development, and development economics. He holds a Ph.D. in Development Economics from Jawaharlal Nehru University, New Delhi, with specialization in fiscal federalism and public finance.
                </p>
                <p>
                  Currently serving as Senior Economist at the Ministry of Finance, Government of Nepal, Dr. Panta is responsible for fiscal policy development, budget analysis, and implementation of Nepal\'s federal fiscal system. His work encompasses designing and evaluating fiscal decentralization frameworks that enhance local government capacity and improve service delivery.
                </p>
                <p>
                  Throughout his career, Dr. Panta has contributed extensively to policy research, institutional development, and community-led development initiatives. He has collaborated with major international development organizations including the World Bank, Asian Development Bank, and various United Nations agencies on critical development challenges in Nepal and South Asia.
                </p>
                <p>
                  His research interests include fiscal federalism, local government finance, poverty reduction, human development, governance reform, and community development. He is a published author with numerous peer-reviewed articles in leading journals of development economics and policy analysis.
                </p>
              </div>
            </div>

            {/* Profile Image */}
            <div>
              <Card className="overflow-hidden sticky top-24">
                <div className="relative w-full h-64 bg-muted">
                  <Image
                    src="/assets/panta.png"
                    alt="Dr. Krishna Raj Panta"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <p className="font-semibold text-lg">Dr. Krishna Raj Panta</p>
                  <p className="text-primary font-semibold text-sm">Ph.D. Development Economics</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Senior Economist, Ministry of Finance
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <Timeline
              items={educationData.map((item) => ({
                year: item.year,
                title: `${item.degree} in ${item.field}`,
                organization: item.institution,
                description: item.description,
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
