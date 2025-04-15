import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import { api_base_url } from '../helper'

const Blogs = () => {
  const [data, setData] = useState(null);
  const getBlogs = () => {
    fetch(api_base_url + "/getBlogs", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: localStorage.getItem("token")
      })
    }).then((res) => res.json()).then((data) => {
      if (data.success) {
        setData(data.blogs)
      }
      else {
        alert(data.msg)
      }
    })
  };

  useEffect(() => {
    getBlogs();
  }, [])

  return (
    <>
      <div className="blogs px-4 md:px-8 lg:px-12 mt-4 mb-5">
        <h3 className='text-2xl'>Latest Blogs</h3>

        <div className="blogsCon grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {
            data ? data.map((item, index) => {
              return (
                <>
                  <Blog key={index} data={item} />
                </>
              )
            }) : "No Blogs Found !"
          }
        </div>
      </div>
    </>
  )
}

export default Blogs
