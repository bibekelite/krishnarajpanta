import {
  Building2,
  TrendingUp,
  Users,
  BookOpen,
  Briefcase,
  BarChart3,
  Scale,
  Handshake,
} from 'lucide-react';

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  icon: any;
}

export const expertiseData: ExpertiseItem[] = [
  {
    id: 'fiscal-federalism',
    title: 'Fiscal Federalism',
    description: 'Expert in designing and implementing fiscal systems that balance central and local governance with efficient resource distribution.',
    icon: Building2,
  },
  {
    id: 'local-government',
    title: 'Local Government Finance',
    description: 'Specialized knowledge in municipal finance, local revenue generation, and community-level budget management.',
    icon: BarChart3,
  },
  {
    id: 'participatory-planning',
    title: 'Participatory Planning',
    description: 'Facilitating community engagement in development planning and budget allocation processes.',
    icon: Users,
  },
  {
    id: 'poverty-development',
    title: 'Poverty & Human Development',
    description: 'Research and policy expertise in poverty reduction strategies and human development indicators.',
    icon: TrendingUp,
  },
  {
    id: 'public-policy',
    title: 'Public Policy Design',
    description: 'Designing evidence-based policies for governance, service delivery, and inclusive development.',
    icon: Briefcase,
  },
  {
    id: 'monitoring',
    title: 'Monitoring & Evaluation',
    description: 'Comprehensive M&E frameworks for tracking policy implementation and development outcomes.',
    icon: BookOpen,
  },
  {
    id: 'governance',
    title: 'Governance & Anti-Corruption',
    description: 'Institutional strengthening, transparency enhancement, and anti-corruption mechanisms.',
    icon: Scale,
  },
  {
    id: 'community',
    title: 'Community Development',
    description: 'Leading grassroots development initiatives and community-centered economic programs.',
    icon: Handshake,
  },
];
