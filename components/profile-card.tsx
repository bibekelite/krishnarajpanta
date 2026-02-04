import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  title: string;
  description?: string;
  imageSrc?: string;
}

export default function ProfileCard({ name, title, description, imageSrc }: ProfileCardProps) {
  return (
    <Card className="overflow-hidden">
      {imageSrc && (
        <div className="relative w-full h-48 bg-muted">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="text-primary font-semibold">{title}</CardDescription>
      </CardHeader>
      {description && (
        <CardContent>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      )}
    </Card>
  );
}
