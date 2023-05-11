'use client';

import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <h1 className="text-6xl text-orange-300">HomePage</h1>
      <Link href={'/blog'}>Blog Page</Link>
      <span className="material-symbols-rounded">detection_and_zone</span>
    </>
  );
};

export default HomePage;
