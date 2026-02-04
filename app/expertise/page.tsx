import PageHeader from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { expertiseData } from '@/data/expertise';

export default function ExpertisePage() {
  return (
    <div>
      <PageHeader
        title="Areas of Expertise"
        subtitle="Comprehensive professional expertise"
        description="Specialized knowledge and experience across development economics, public policy, and institutional governance"
      />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertiseData.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.id}
                  className="hover:shadow-lg transition-all hover:border-primary/50 hover:-translate-y-1 group"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Context */}
          <div className="mt-16 bg-primary/10 rounded-xl p-8 border border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Integrated Approach</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              These areas of expertise are deeply interconnected. By combining fiscal federalism with participatory planning, monitoring mechanisms with policy design, and governance frameworks with community development, I ensure that development initiatives are comprehensive, sustainable, and inclusive. Each area reinforces the others to create systemic improvements in institutional capacity and development outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
