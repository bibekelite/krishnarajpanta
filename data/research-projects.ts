export interface ResearchProject {
  id: string;
  title: string;
  period: string;
  institution?: string;
  location?: string;
  description: string;
  keywords?: string[];
  link?: string;
}

export const researchProjectsData: ResearchProject[] = [
  {
    id: 'research-1',
    title: 'Fiscal Decentralization, Public Service Delivery and Poverty: A Case Study of Nepal',
    period: '5/2010 - 1/2015',
    institution: 'Jawaharlal Nehru University (CESP)',
    location: 'New Delhi, India',
    description: 'Comprehensive thesis research examining the linkages among fiscal decentralization, public service delivery, and poverty reduction in Nepal\'s local bodies. This longitudinal study analyzed how fiscal arrangements at the local level impact service delivery quality and poverty outcomes.',
    keywords: ['Fiscal Decentralization', 'Public Service Delivery', 'Poverty Reduction', 'Local Government'],
    link: 'https://jnu.ac.in/research/fiscal-decentralization-nepal-2015',
  },
  {
    id: 'research-2',
    title: 'An Analysis of Local Body Finance, Fiscal Decentralization and Poverty Reduction in Nepal',
    period: '7/2008 - 5/2010',
    institution: 'Jawaharlal Nehru University (CESP)',
    location: 'New Delhi, India',
    description: 'Dissertation research analyzing the status of fiscal arrangements of local bodies, practice of fiscal decentralization, and poverty reduction strategies in Nepal. This work provided foundational analysis for understanding Nepal\'s decentralized governance structure.',
    keywords: ['Local Finance', 'Fiscal Federalism', 'Poverty', 'Governance'],
    link: 'https://jnu.ac.in/research/local-body-finance-nepal-2010',
  },
  {
    id: 'research-3',
    title: 'Pattern of Revenue and Expenditure of Local Bodies in Terai: Case Study of Pakali and Laukahi VDC',
    period: '1/2014 - 3/2014',
    location: 'Sunasari District, Nepal',
    description: 'Field research examining revenue mobilization and expenditure patterns of local government bodies in Nepal\'s Terai region. This study provided insights into local fiscal capacity and spending priorities in lowland areas.',
    keywords: ['Local Finance', 'Terai Region', 'Revenue', 'Expenditure'],
    link: 'https://research.nepal.gov.np/terai-local-bodies-case-study-2014',
  },
  {
    id: 'research-4',
    title: 'Pattern of Revenue and Expenditure of Local Bodies in Mountainous District: Case Study of Chilime VDC',
    period: '9/2013 - 11/2013',
    location: 'Rasuwa District, Nepal',
    description: 'Research on local government financial patterns in Nepal\'s mountainous region. This comparative regional study examined how geographic and economic constraints affect local fiscal arrangements.',
    keywords: ['Mountain Region', 'Local Government', 'Revenue Mobilization', 'Fiscal Capacity'],
    link: 'https://research.nepal.gov.np/mountainous-local-bodies-case-study-2013',
  },
  {
    id: 'research-5',
    title: 'Pattern of Revenue and Expenditure of Local Bodies in Conflict Affected Area: Case Study of Thabang and Mijhing VDC',
    period: '12/2012 - 2/2013',
    location: 'Rolpa District, Nepal',
    description: 'Study analyzing local government finance in conflict-affected areas of Nepal. This research examined how political instability and conflict impact local fiscal arrangements and service delivery capacity.',
    keywords: ['Conflict Areas', 'Post-Conflict Governance', 'Local Finance', 'Institutional Recovery'],
    link: 'https://research.nepal.gov.np/conflict-affected-local-bodies-2013',
  },
];
