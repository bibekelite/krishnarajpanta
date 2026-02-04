export interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  field: string;
  description: string;
  logo?: string;
}

export const educationData: EducationItem[] = [
  {
    year: '2012',
    degree: 'Ph.D.',
    institution: 'Jawaharlal Nehru University',
    field: 'Development Economics',
    description: 'Dissertation on Fiscal Federalism and Public Finance in South Asian Federal Systems. Specialized in development economics with focus on poverty reduction and public policy.',
    logo: '/jnu-logo.png',
  },
  {
    year: '2010',
    degree: 'MPhil',
    institution: 'Jawaharlal Nehru University',
    field: 'Economics',
    description: 'Research on Intergovernmental Finance and Decentralization. Advanced coursework in development economics and quantitative methods.',
    logo: '/jnu-logo.png',
  },
  {
    year: '2008',
    degree: 'Masters',
    institution: 'Tribhuvan University',
    field: 'Economics',
    description: 'First division with specialization in development economics, public economics, and economic policy analysis.',
    logo: '/tu-logo.png',
  },
  {
    year: '2006',
    degree: 'Bachelor of Laws',
    institution: 'Tribhuvan University',
    field: 'Law',
    description: 'Strong foundation in constitutional law, administrative law, and legal aspects of governance and public administration.',
    logo: '/tu-logo.png',
  },
];
