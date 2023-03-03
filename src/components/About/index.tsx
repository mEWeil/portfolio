// import {
//   faCss3,
//   faGitAlt,
//   faHtml5,
//   faJsSquare,
//   faPython,
//   faReact,
// } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import MattPic from '../../assets/images/matt_weil.jpg';

export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            repellendus accusantium eum ullam fugiat alias culpa, voluptate
            quaerat impedit possimus, dolorem ex aspernatur asperiores. Ipsa
            deleniti magni voluptates consequuntur neque!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            debitis quos sapiente libero nisi, officia quas dolores soluta
            mollitia hic sequi voluptates error animi vero architecto molestias
            eveniet ex optio?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            consequuntur libero soluta error amet eos culpa excepturi impedit
            fugit ipsam tempore odio mollitia, autem nulla reiciendis inventore
            harum et vitae?
          </p>
          <a href="https://drive.google.com/file/d/1ecq5yTVNMJhXPbS2CZ8zdsHQYvRQtHp8/view?usp=share_link">
            <button type="button">View Resume</button>
          </a>
        </div>

        {/* <div className="stage-cube-cont">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faPython} color="#306998" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div> */}
        <img className="MattPic" src={MattPic} alt="Its me!" />
      </div>
      <Loader type="line-scale" active />
    </>
  );
}
