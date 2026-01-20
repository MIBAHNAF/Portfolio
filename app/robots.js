export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/user-image.png', '/user-image-*.png'],
        disallow: ['/private/'],
      }
    ],
    sitemap: 'https://mirahnaf-ali.com/sitemap.xml',
  }
}
