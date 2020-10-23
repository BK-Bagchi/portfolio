import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Experience = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                iconStyle={{ background: 'white', color: '#fff' }}
            >
                <p className="text-muted m-0">Oct 2020- Present</p>
                <h5 style={{ color: 'orangered' }}>Software Developer (Intern)</h5>
                <h4 className="text-dark">Pipesort Technologies LLP</h4>
                <p className="m-0 text-muted">Chennai, India</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
};

export default Experience;