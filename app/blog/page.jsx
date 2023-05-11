import { getBlogSlugs } from '@utils/getBlogSlugs';
import Link from 'next/link';

export const getStaticProps = async () => {
  const slugs = await getBlogSlugs();

  return {
    props: {
      slugs,
    },
  };
};

const BlogPage = ({ slugs }) => {
  return (
    <>
      <h1>BlogPage</h1>
      <div>
        <ul>
          {slugs &&
            slugs.map((s) => (
              <li key={s.slug}>
                <Link href={`/blog/${s.slug}`}>{s.slug}</Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default BlogPage;
