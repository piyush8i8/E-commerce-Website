import React from 'react';
import image1 from "../Images/tilak.jpg";
import image2 from "../Images/avinash.jpg";
import image3 from "../Images/nikhil.jpg";
import image4 from "../Images/piyush.jpg";
import Chooseus from '../components/Chooseus';
import Helpsection from '../components/Helpsection';
import Myproduct from '../components/Myproduct';
import Testimonial from '../components/Testimonial';

const About = () => {
  return <div>
    <Chooseus></Chooseus>
    <Helpsection></Helpsection>
    <Myproduct></Myproduct>
    <Testimonial></Testimonial>
  </div>
};

export default About;
