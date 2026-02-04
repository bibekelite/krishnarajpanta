interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageHeader({ title, subtitle, description }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-balance">{title}</h1>
        {subtitle && <p className="text-lg sm:text-xl opacity-90 mb-4">{subtitle}</p>}
        {description && <p className="text-base opacity-80 max-w-2xl">{description}</p>}
      </div>
    </div>
  );
}
