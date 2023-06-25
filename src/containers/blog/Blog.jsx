import React from 'react';
import './blog.css';
import Article from '../../components/article/Article';


const Blog = () => {
  return (
    <div className='initial gpt3__blog'>
      <div className='gpt3__blog-container'>
        <h1>A LOT IS HAPPENING</h1>
      </div>
      <div>
        <Article>hola</Article>

      </div>
    </div>
  )
}

export default Blog