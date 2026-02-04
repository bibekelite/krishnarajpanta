export interface Experience {
  id: string;
  category: 'government' | 'consultancy' | 'advisory' | 'research' | 'community';
  title: string;
  organization: string;
  period: string;
  description: string;
}

export const experienceData: Experience[] = [
  // Government Roles
  {
    id: 'gov-1',
    category: 'government',
    title: 'Senior Economist',
    organization: 'Ministry of Finance, Government of Nepal',
    period: '2018 - Present',
    description: 'Leading fiscal policy development and budget analysis. Overseeing federalism implementation and intergovernmental fiscal transfers.',
  },
  {
    id: 'gov-2',
    category: 'government',
    title: 'Economic Advisor',
    organization: 'National Planning Commission',
    period: '2015 - 2018',
    description: 'Provided economic analysis and policy recommendations for national development plans and strategic initiatives.',
  },

  // Consultancy Projects
  {
    id: 'cons-1',
    category: 'consultancy',
    title: 'Lead Consultant - Fiscal Decentralization',
    organization: 'World Bank Nepal Office',
    period: '2017 - 2019',
    description: 'Designed and evaluated fiscal decentralization frameworks for improved local government capacity and revenue mobilization.',
  },
  {
    id: 'cons-2',
    category: 'consultancy',
    title: 'Policy Consultant',
    organization: 'Asian Development Bank',
    period: '2014 - 2016',
    description: 'Conducted research on poverty reduction strategies and designed inclusive development programs.',
  },

  // Policy Advisory Work
  {
    id: 'adv-1',
    category: 'advisory',
    title: 'Policy Advisory Board Member',
    organization: 'Institute for Policy Research and Development',
    period: '2016 - Present',
    description: 'Contributing expertise to policy research and providing strategic guidance on development and governance issues.',
  },

  // Research Leadership
  {
    id: 'res-1',
    category: 'research',
    title: 'Research Fellow',
    organization: 'Center for Development Studies',
    period: '2013 - Present',
    description: 'Conducting and overseeing research on development economics, public finance, and governance in Nepal and South Asia.',
  },

  // Community Leadership
  {
    id: 'com-1',
    category: 'community',
    title: 'Director - Community Development Programs',
    organization: 'Nepal Community Development Initiative',
    period: '2012 - 2015',
    description: 'Led implementation of grassroots development programs focusing on participatory planning and community economic empowerment.',
  },
];
