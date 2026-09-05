import fm from 'front-matter';
import type { Project } from '../types/project';

function resolveAssetUrl(url: string | undefined): string {
  if (!url) {
    return '';
  }

  if (/^https?:\/\//.test(url) || url.startsWith('//')) {
    return url;
  }

  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = url.startsWith('/') ? url.slice(1) : url;

  return `${normalizedBase}${normalizedPath}`;
}

export async function getProjects(): Promise<Project[]> {
  const modules = import.meta.glob('/src/content/projects/*.md', {
    query: '?raw', 
    import: 'default',
    eager: true,
  });

  return Object.entries(modules).map(([path, raw]) => {
    const { attributes, body: content } = fm<Partial<Project>>(raw as string);
    return {
      slug: path.split('/').pop()?.replace('.md', ''),
      ...attributes,
      image_url: resolveAssetUrl(attributes.image_url),
      content,
    } as Project;
  });
}