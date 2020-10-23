import React from 'react'
import './Skills.css'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import RadialSeparators from "./RadialSeparators"
import skillDetail, { additionalSkills } from "./SkillDetail"

const Skills = () => {
    return (
        <>
            <div className="d-flex flex-wrap justify-content-center">
                {
                    skillDetail.map(Skill => {
                        const { id, skill, parentage } = Skill
                        return (
                            <div key={id} style={{ width: '120px', minWidth: '120px' }} className="mx-5 my-2">
                                <CircularProgressbarWithChildren
                                    value={parentage}
                                    text={`${parentage}%`}
                                    strokeWidth={10}
                                    styles={buildStyles({
                                        strokeLinecap: "butt"
                                    })}
                                >
                                    <RadialSeparators
                                        count={12}
                                        style={{
                                            background: "#fff",
                                            width: "2px",
                                            height: `${10}%`
                                        }}
                                    />
                                </CircularProgressbarWithChildren>
                                <h6 className="m-0 text-center this-skill">{skill}</h6>
                            </div>
                        )
                    })
                }
            </div>
            <div className="addition-skill d-flex flex-column align-items-center mt-4">
                <ul className="d-flex flex-wrap justify-content-center">
                    {
                        additionalSkills.map(Skill => {
                            const { id, skill } = Skill
                            return (
                                <li key={id}>{skill}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    );
};

export default Skills;