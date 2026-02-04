'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PublicationCardProps {
  title: string;
  authors?: string;
  journal?: string;
  year: number;
  category: string;
  description?: string;
  link?: string;
}

export default function PublicationCard({
  title,
  authors,
  journal,
  year,
  category,
  description,
  link,
}: PublicationCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-lg">{title}</CardTitle>
            {authors && <CardDescription>{authors}</CardDescription>}
            {journal && <CardDescription className="text-primary font-semibold">{journal}</CardDescription>}
          </div>
          <FileText className="w-5 h-5 text-primary flex-shrink-0" />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Badge variant="secondary">{category}</Badge>
          <span className="text-xs text-muted-foreground">{year}</span>
        </div>
      </CardHeader>
      {description && (
        <CardContent>
          <p className="text-sm text-muted-foreground">{description}</p>
          {link && (
            <Button variant="default" size="sm" asChild className="mt-4">
              <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Read More
              </a>
            </Button>
          )}
        </CardContent>
      )}
    </Card>
  );
}
