export interface Training {
  id: string;
  title: string;
  date: string;
  institution: string;
  location: string;
  description: string;
  focus?: string[];
  link?: string;
}

export const trainingsData: Training[] = [
  {
    id: 'training-1',
    title: 'Global Saemaul Leadership Forum 2015',
    date: 'November 24-27, 2015',
    institution: 'Korea Saemaul Undong Center',
    location: 'Daegu City, Korea',
    description: 'International leadership forum focusing on rural development and community transformation through the Saemaul Movement model. This training provided advanced insights into community-based development strategies and leadership for development.',
    focus: ['Rural Development', 'Community Leadership', 'Saemaul Movement', 'Development Strategy'],
    link: 'https://www.saemaul.or.kr/global-forum-2015',
  },
  {
    id: 'training-2',
    title: 'Saemaul Training for Multinational Leaders 2015',
    date: 'November 18-23, 2015',
    institution: 'Korea Saemaul Undong Center',
    location: 'Gyeonggi-do, Korea',
    description: 'Specialized training program for international development professionals on Saemaul Movement principles and implementation. Participants learned best practices in community mobilization, self-help development, and local empowerment.',
    focus: ['Saemaul Implementation', 'Community Development', 'Self-Help Principles', 'Local Governance'],
    link: 'https://www.saemaul.or.kr/multinational-leaders-training-2015',
  },
  {
    id: 'training-3',
    title: 'Training on Organizational Management',
    date: 'May 11-17, 2006',
    institution: 'Nepal Administrative Staff College',
    location: 'Kathmandu, Nepal',
    description: 'Professional development training on organizational management and institutional development. This course covered organizational structure, management principles, and institutional capacity building for effective governance.',
    focus: ['Organizational Development', 'Management Skills', 'Institutional Capacity', 'Leadership'],
    link: 'https://nasc.gov.np/training-archives/organizational-management-2006',
  },
];
