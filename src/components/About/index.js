import React from 'react'; 
// import images from assets
import myImage from '../../assets/images/ProfilePicture.jpg';
import { Col } from 'react-bootstrap';


function About() {
    return(
    <section className="title">
      
      <div className="row justify-content-center" id="about-container">       
      <Col lg={6} md={12}>
      <center><img src={myImage} className="my-image" alt="" height='600px' width='500px'/></center>
      <p class="name">Patricia Derieux</p>
      <p class="job">full stack web developer</p>
      <h2 class="education">about me</h2>
        <p>
        A self-motivated full stack Web Developer with IT experience ready to make an impact in the field. Brining 7 years of work experience in IT as an Application Analyst where I have learned to be communicative, self-motivated, team-oriented, and problem-solver. Recently earned a certificate in Full Stack Development from the University of Rice with newly developed skills in HTML, CSS, Javascript, and responsive web design. Passionate in creating new applications that engage users' experience. Worked in a collaborative team to create a MERN application that tracks inventory for the organization. It is my technical expertise, passion, and leadership that make me an advantageous candidate for any team
        <br></br>
        <br></br>
         </p>
      </Col>

      </div>
    </section> 
)}
  
export default About;