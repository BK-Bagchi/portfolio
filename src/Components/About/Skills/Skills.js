import React,{ useState, useEffect} from 'react'
import './Skills.css'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import RadialSeparators from "./RadialSeparators"
// import skillDetail, {additionalSkills} from "./SkillDetail" //This line is replaced via django backend

const Skills = () => {
    const [additionalSkills, setAddSkills]= useState([]);
    const [skillDetail, setSkillDetail]= useState([]);

    useEffect(() =>{
        fetch('https://bk-bagchi-portfolio.herokuapp.com/api/additionalskills/')
        .then(res=>res.json())
        .then(data=> {
            setAddSkills(data)
        })
    },[])
    useEffect(() => {
        fetch('https://bk-bagchi-portfolio.herokuapp.com/api/skilldetail/')
            .then(res => res.json())
            .then(data => {
                setSkillDetail(data)
            })
    }, [])
    return (
        <>
            <div className="d-flex flex-wrap justify-content-center">
                {
                    skillDetail.map(Skill => {
                        const { id, skill, percentage } = Skill
                        return (
                            <div key={id} style={{ width: '120px', minWidth: '120px' }} className="mx-5 my-2">
                                <CircularProgressbarWithChildren
                                    value={percentage}
                                    text={`${percentage}%`}
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