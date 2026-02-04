import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExperienceCardProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  type?: string;
}

export default function ExperienceCard({
  title,
  organization,
  period,
  description,
  type,
}: ExperienceCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="text-primary font-semibold">{organization}</CardDescription>
          </div>
          {type && <Badge variant="outline">{type}</Badge>}
        </div>
        <p className="text-xs text-muted-foreground mt-2">{period}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
