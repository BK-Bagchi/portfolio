import React, { useEffect, useState } from 'react'
import './Work.css'
import WorkDetail from './WorkDetail'

const Work = ({ work }) => {
    const [works, setWorks] = useState([])
    useEffect(() => {
        work ?
            setWorks(WorkDetail.filter(Work => Work.category === work)) :
            setWorks(WorkDetail)
    }, [work])

    return (
        <main className="work d-flex flex-wrap justify-content-center row w-100 m-0 mt-5">
            {
                works.map(detail => {
                    const { id, name, description, image, github, liveSite } = detail

                    return (
                        <div key={id} className="col-4 p-0 each-work">
                            <div className="card">
                                <img src={require(`../../../Images/${image}`)} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title text-center text-white">{name}</h4>
                                    <ul className="card-text p-0">
                                        {description.map(item => <><li className="d-block m-0">{item}</li><br /></>)}
                                    </ul>
                                </div>
                                <div className="card-footer d-flex justify-content-around">
                                    <a className="link-github" target="_blank" rel="noopener noreferrer" href={`${github}`}>GitHub</a>
                                    <a className="link-site" target="_blank" rel="noopener noreferrer" href={`${liveSite}`}>Live Site</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </main>
    );
};

export default Work;