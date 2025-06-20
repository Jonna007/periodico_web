export interface Project {
  id: number;
  name: string;
  authors: string[];
  description: string;
  effects?: string;
  failureReasons?: string;
  costs: string;
  date: string;
  category: 'national-success' | 'international-success' | 'national-failure' | 'international-failure';
  image: string;
  status: 'success' | 'failure';
  scope: 'national' | 'international';
}