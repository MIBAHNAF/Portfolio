export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/'],
      }
    ],
    sitemap: 'https://www.mirahnaf-ali.com/sitemap.xml',
  }
}
