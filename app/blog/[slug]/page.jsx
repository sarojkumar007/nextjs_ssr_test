import { getBlogSlugs } from '@utils/getBlogSlugs';

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs;
}

const BlogPostPage = ({ params }) => {
  return <div>BlogPostPage: {params?.slug}</div>;
};

export default BlogPostPage;
