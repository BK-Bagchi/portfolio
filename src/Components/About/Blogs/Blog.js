import React from 'react'
import './Blog.css'
import Img from '../../../Images/5-Reasons-to-learn-JS.png'

const Blog = () => {
    return (
        <main className="my-blog">
            <div class="card-group d-flex flex-wrap justify-content-center align-items-center mt-5">
                <div class="card">
                    <img src={Img} class="card-img-top" alt="..." />
                    <div class="card-body my-4 pt-0">
                        <h5 class="card-title text-white">5 Reasons to learn JavaScript seriously</h5>
                    </div>
                    <div class="card-footer">
                        <a className="link-github" target="_blank" rel="noopener noreferrer" href="">See Blog</a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Blog;