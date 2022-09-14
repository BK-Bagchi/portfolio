import React, {useState, useEffect} from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Experience = () => {
    const [experience, getExperience] = useState([])
    useEffect(() => {
        fetch('https://bk-bagchi-portfolio.herokuapp.com/api/experience/')
        .then(res=> res.json())
        .then(data=>{
            getExperience(data)
        })
    },[])
    return (
        <VerticalTimeline>
            {
                experience.map(exp =>{
                    const {id, companyName, companyLocation, durationFrom, durationTo, position}= exp
                    return(
                            <VerticalTimelineElement
                                key={id}
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'white', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  white' }}
                                iconStyle={{ background: 'white', color: '#fff' }}
                            >
                                <p className="text-muted m-0">{durationFrom}- {durationTo}</p>
                                <h5 style={{ color: 'orangered' }}>{position}</h5>
                                <h4 className="text-dark">{companyName}</h4>
                                <p className="m-0 text-muted">{companyLocation}</p>
                            </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
    );
};

export default Experience;