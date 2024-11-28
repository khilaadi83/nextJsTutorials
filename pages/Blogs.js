import React, { useEffect, useState } from 'react'
import Link from 'next/link'
const Blogs = (props) => {
  const [blogs, setBlogs] = useState(props.blogs || []); // Ensure blogs is an array
  /*   useEffect(()=>{
      
     
    }, []); // Add dependency array */
  console.log(blogs)
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Latest Blog Posts</h1>
      <div className="container-fluid px-4">
        <div className="row g-5">
          {blogs.map((blogitem) => {
            return (
              <div className="col-12 col-md-4" key={blogitem.title}>
                <div className="card h-100 shadow-sm">
                  <img className="card-img-top" src="https://picsum.photos/800/400" alt="Blog post thumbnail" />
                  <div className="card-body">
                    <h5 className="card-title mb-3">{blogitem.title}</h5>
                    <p className="text-muted mb-2">{blogitem.date}</p>
                    <p className="card-text">{blogitem.content}</p>
                    <Link href={`/blogposts/${blogitem.slug}`} className="btn btn-primary">Read More</Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    let result = await fetch('http://localhost:3000/api/blogs');
    let responseData = await result.json();
    console.log(responseData);
    
    return {
      props: { blogs: responseData }
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { blogs: [] }
    };
  }
}

export default Blogs