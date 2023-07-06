import { type MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://anniversario.jaleelbennett.com',
      lastModified: new Date(),
    },
    {
      url: 'https://anniversario.jaleelbennett.com/configure',
      lastModified: new Date(),
    },
    {
      url: 'https://anniversario.jaleelbennett.com/countdown',
      lastModified: new Date(),
    },
  ];
}
