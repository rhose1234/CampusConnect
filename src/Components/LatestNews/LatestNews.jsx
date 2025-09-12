import React, { useEffect, useState } from "react";
import "./LatestNews.css";

const LatestNews = () => {

  const [blogs, setBlogs] = useState([])
 
    useEffect(() => {
        fetch("/Data/Blog.json")
        .then((res) => res.json())
        .then((data) => setBlogs(data))
        .catch((err) => console.error(err));
    }, []);

  return (
    <section className="latest-news py-5">
     <div className="container">
    <div className="section-header">
    
          <div className="left-header">
            <h2 className="fw-bold text-black">
              Latest News <span className="underline"></span>
            </h2>
          </div>
          </div>
        <div className="blog-container">
  {blogs.map((item) => (
    <div key={item.id} className="blog-card shadow-lg">
    <img src={item.image} className="" />

    <div className="p-3">
      <h5 className="fw-bold text-black mt-4">{item.title}</h5>
      <p className="">{item.description}</p>
      <span className="">{item.time}</span>
      </div>
    </div>
  ))}
</div>

       
      </div>
    </section>
  );
};


export default LatestNews;
