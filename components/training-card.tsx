import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, MapPin, Building2, Calendar, ExternalLink } from 'lucide-react';

interface TrainingCardProps {
  title: string;
  date: string;
  institution: string;
  location: string;
  description: string;
  focus?: string[];
  link?: string;
}

export default function TrainingCard({
  title,
  date,
  institution,
  location,
  description,
  focus,
  link,
}: TrainingCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground font-semibold">{date}</span>
            </div>
            <div className="flex items-start gap-2">
              <Building2 className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{institution}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{location}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
          {focus && focus.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {focus.map((item) => (
                <Badge key={item} variant="secondary" className="text-xs">
                  {item}
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
