export interface Project {
  slug: string;
  title: string;
  description: string;
  image_url: string;
  content: string;
  date: string;
  [key: string]: any;
}