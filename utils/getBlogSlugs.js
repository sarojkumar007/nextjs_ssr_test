import fs from 'fs';

export async function getBlogSlugs() {
  const files = fs.readdirSync(`contents/blog`);
  const blogPosts = files.filter((file) => file.endsWith('.md'));
  const slugs = blogPosts.map((p) => ({ slug: p.replace('.md', '') }));

  return slugs;
}
