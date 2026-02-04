import PageHeader from '@/components/page-header';
import Timeline from '@/components/timeline';
import { educationData } from '@/data/education';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function EducationPage() {
  const certificates = [
    {
      title: 'Advanced Research Methods',
      issuer: 'United Nations Development Programme',
      year: 2015,
    },
    {
      title: 'Fiscal Policy and Development',
      issuer: 'International Monetary Fund Institute',
      year: 2014,
    },
    {
      title: 'Public Administration and Governance',
      issuer: 'Asian Development Bank',
      year: 2013,
    },
    {
      title: 'Impact Evaluation and M&E',
      issuer: 'World Bank Training Institute',
      year: 2012,
    },
  ];

  return (
    <div>
      <PageHeader
        title="Education & Qualifications"
        subtitle="Academic background and professional development"
        description="Comprehensive education in law, economics, and development studies"
      />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Formal Education Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Formal Education</h2>
            <Timeline
              items={educationData.map((item) => ({
                year: item.year,
                title: `${item.degree} in ${item.field}`,
                organization: item.institution,
                description: item.description,
              }))}
            />
          </div>

          {/* Professional Certificates */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Professional Certificates & Training</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-primary font-semibold mb-2">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Academic Strengths */}
          <div className="bg-primary/10 rounded-xl p-8 border border-primary/20">
            <h2 className="text-2xl font-bold mb-6">Academic Strengths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-primary mb-4">Economics & Development</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Development Economics Theory</li>
                  <li>• Microeconomics & Macroeconomics</li>
                  <li>• Public Finance & Fiscal Policy</li>
                  <li>• Econometrics & Research Methods</li>
                  <li>• Policy Analysis & Evaluation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-4">Law & Governance</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Constitutional Law</li>
                  <li>• Administrative Law</li>
                  <li>• Economic Law & Policy</li>
                  <li>• Governance & Institutions</li>
                  <li>• Public Administration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
