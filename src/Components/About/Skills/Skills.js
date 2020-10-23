import React from 'react'
import './Skills.css'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import RadialSeparators from "./RadialSeparators"

const Skills = () => {
    return (
        <div className="d-flex">
            <div style={{ width: '120px' }}>
                <CircularProgressbarWithChildren
                    value={90}
                    text={`${90}%`}
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
                <h6 className="m-0 text-center">HTML</h6>
            </div>
        </div>
    );
};

export default Skills;