import React from 'react'
import Me from '../../Images/MyPSize_Photo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAt, faBuilding, faHome, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Left = () => {
    return (
        <>
            <img className="me" src={Me} alt="Me" />
            <div className="info">
                <h3 className="text-dark"><strong>Balay Kumar Bagchi</strong></h3>
                <h5 className="my-3"><FontAwesomeIcon icon={faHome} /> 98/1, Sagorpara, Rajshahi</h5>
                <h6 className="my-3"><FontAwesomeIcon icon={faBuilding} /> Pipesort Technologies LLP</h6>
                <h6 className="my-3"><FontAwesomeIcon icon={faAt} /> bkbagchi.dipto@gmail.com</h6>
                <h6 className="my-3"><FontAwesomeIcon icon={faPhoneAlt} /> +8801716101098</h6>
                <ul className="brandIcons m-0 p-0">
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/bk-bagchi"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://facebook.com/bkbagchi.dipto"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="bk"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/bkbagchi-dipto/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                </ul>
            </div>
        </>
    );
};

export default Left;