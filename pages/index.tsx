import type { NextPage } from 'next'
import Image from 'next/image'
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export async function getStaticProps() {
  const files = fs.readdirSync('./pages/posts')
  
  const posts = files.map((fileName) => {
    const params = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`./pages/posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    
    return {
      params,
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
}

type THome = any;
type TPost = {
  params: string,
  frontmatter: { [key: string]: any }
}

const Home: NextPage = ({ posts }: THome) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
      {posts.map(({ params, frontmatter }: TPost) => (
        <div
          key={params}
          className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
        >
          <Link href={`/quiz/${params}`}>
            <a>
              <Image
                width={650}
                height={340}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              />
              <h1 className='p-4'>{frontmatter.title}</h1>
            </a>
          </Link>
        </div>
      ))}
    </div>
)}

export default Home
