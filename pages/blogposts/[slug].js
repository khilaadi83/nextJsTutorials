import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const BlogPost = ({ blog }) => {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={`Read about ${router.query.slug}`} />
      </Head>
      <article className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{router.query.slug}</h1>
        <div className="mb-4 text-gray-600">
         
        </div>
        <div className="prose prose-lg">
          <p>
            {JSON.stringify(blog)}
          </p>
          <h4>{blog.author?.name}</h4> {/* Added optional chaining for safety */}
        </div>
      </article>
    </>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const res = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);
  const blog = await res.json();

  return {
    props: {
      blog,
    },
  }
}

export default BlogPost 