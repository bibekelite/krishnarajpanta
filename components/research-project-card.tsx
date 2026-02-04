import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, MapPin, Building2, ExternalLink } from 'lucide-react';

interface ResearchProjectCardProps {
  title: string;
  period: string;
  institution?: string;
  location?: string;
  description: string;
  keywords?: string[];
  link?: string;
}

export default function ResearchProjectCard({
  title,
  period,
  institution,
  location,
  description,
  keywords,
  link,
}: ResearchProjectCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="text-primary font-semibold mt-2">{period}</CardDescription>
          </div>
          <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2 text-sm">
            {institution && (
              <div className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{institution}</span>
              </div>
            )}
            {location && (
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{location}</span>
              </div>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
          {keywords && keywords.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {keywords.map((keyword) => (
                <Badge key={keyword} variant="secondary" className="text-xs">
                  {keyword}
                </Badge>
              ))}
            </div>
          )}
          {link && (
            <Button variant="default" size="sm" asChild className="mt-4">
              <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Read More
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
