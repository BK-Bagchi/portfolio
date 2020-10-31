import React from 'react'
import './Blog.css'
import Zoom from 'react-reveal/Zoom'
import Img from '../../../Images/5-Reasons-to-learn-JS.png'

const Blog = () => {
    return (
        <Zoom right>
            <main className="my-blog">
                <div className="card-group d-flex flex-wrap justify-content-center align-items-center mt-5">
                    <div className="card">
                        <img src={Img} className="card-img-top" alt="..." />
                        <div className="card-body my-4 pt-0">
                            <h5 className="card-title text-white">5 Reasons to learn JavaScript seriously</h5>
                        </div>
                        <div className="card-footer">
                            <a className="link-github" target="_blank" rel="noopener noreferrer" href="">See Blog</a>
                        </div>
                    </div>
                </div>
            </main>
        </Zoom>
    );
};

export default Blog;