// newsData.ts
// Simplified news data structure
export type NewsType =
  | 'event'
  | 'announcement'
  | 'achievement'
  | 'sports'
  | 'cultural'
  | 'notice';

export interface NewsItem {
  type: NewsType;
  title: string;
  date: string;
  description: string;
}

export const newsData: NewsItem[] = [
  {
    type: 'event',
    title: 'Annual Tech Symposium 2025',
    date: 'April 15, 2025',
    description: 'Join us for our annual technology symposium featuring industry experts and innovative projects.',
  },
  {
    type: 'announcement',
    title: 'New Research Center Opening',
    date: 'April 20, 2025',
    description: 'SIET announces the opening of a new research center focused on sustainable technologies.',
  },
  {
    type: 'notice',
    title: 'Annual Fee Payment',
    date: 'April 25, 2025',
    description: 'All students are reminded to pay their annual fees by May 15, 2025. Online payment is available.', 
  },
  {
    type: 'achievement',
    title: 'Student Wins National Coding Challenge',
    date: 'March 30, 2025',
    description: 'Our student secured first place in the National Coding Challenge 2025.',
  },
  {
    type: 'sports',
    title: 'Inter-College Football Tournament',
    date: 'May 10, 2025',
    description: 'SIET football team reaches finals in the inter-college tournament.',
  },
  {
    type: 'cultural',
    title: 'Annual Cultural Fest',
    date: 'June 5, 2025',
    description: 'Experience music, dance, and drama at our annual cultural fest.',
  },
];
