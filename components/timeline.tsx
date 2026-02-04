import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={index} className="relative">
          {/* Timeline dot and line */}
          <div className="absolute left-0 top-0 flex flex-col items-center">
            <div className="w-4 h-4 bg-primary rounded-full border-4 border-background ring-2 ring-primary" />
            {index !== items.length - 1 && (
              <div className="w-1 bg-border h-32 mt-4" />
            )}
          </div>

          {/* Content */}
          <Card className="ml-12">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.organization}</CardDescription>
                </div>
                <span className="text-sm font-semibold text-primary whitespace-nowrap">{item.year}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
