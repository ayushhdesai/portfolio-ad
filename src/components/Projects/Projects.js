import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ml from "../../Assets/Projects/LSTM.png";
import img1 from "../../Assets/Projects/image.png";
import img2 from "../../Assets/Projects/img2.png";
import img3 from "../../Assets/Projects/img3.png";
import img4 from "../../Assets/Projects/img4.png";
import img5 from "../../Assets/Projects/img5.jpg";
import img6 from "../../Assets/Projects/img6.png";
import photobooth from "../../Assets/Projects/PhotoBooth.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        {/* Machine Learning Section */}
        <h2 className="project-subheading">
          Machine Learning <strong className="purple">Projects</strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ml}
              isBlog={false}
              title="Bilingual Text Translation"
              description="Developed LSTM and Transformer architectures from scratch to translate between English, German, and French. Achieved 91% accuracy in both language models. Focused on efficient data processing and robust machine learning techniques."
              ghLink="https://github.com/ayushhdesai/cs5100_project/"
              demoLink="https://github.com/ayushhdesai/cs5100_project/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img1}
              isBlog={false}
              title="HawkEye: Candlestick Pattern Recognition"
              description="Created a Python-based application to predict stock trends using candlestick patterns. Integrated real-time data from the Yahoo Finance API and built a machine learning model for stock price prediction based on historical data."
              ghLink="https://github.com/momo-senpai/be_project/"
              demoLink="https://github.com/momo-senpai/be_project/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img2}
              isBlog={false}
              title="Mental Health Prediction in IT Workers"
              description="Built a machine learning model to predict mental health conditions in IT workers using survey responses. Leveraged Kaggle datasets and employed models like Random Forest, SVM, and Logistic Regression, achieving an accuracy of 85%."
              ghLink="https://github.com/ayushhdesai/"
              demoLink="https://colab.research.google.com/drive/1QQBHn1JEWNUCOaCFo8nwRIH0pK6Z0bgN?usp=sharing"
            />
          </Col>
        </Row>

        {/* Software Related Section */}
        <h2 className="project-subheading">
          Software <strong className="purple">Projects</strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photobooth}
              isBlog={false}
              title="ImageWizard"
              description="Built a Java-based Image Processing Application using the MVC design pattern with Swing for the GUI. Implemented interactive text UI, batch processing, and various image manipulations like color adjustments, flipping, blur, and compression. Followed SOLID principles and applied jUnit testing."
              ghLink="https://github.com/ayushhdesai/ImageProcessor/"
              demoLink="https://github.com/ayushhdesai/ImageProcessor/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img3}
              isBlog={false}
              title="SpaceInvader"
              description="Developed a Python-based Space Invader game using the Pygame library. Implemented player movement, enemy interactions, and bullet collision detection using object-oriented programming concepts."
              ghLink="https://github.com/ayushhdesai/SpaceInvader/"
              demoLink="https://github.com/ayushhdesai/SpaceInvader/"
            />
          </Col>
        </Row>

        {/* Full Stack Projects Section */}
        <h2 className="project-subheading">
          Full Stack <strong className="purple">Projects</strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img4}
              isBlog={false}
              title="Twitter Clone"
              description="Developed a Twitter-like application using React, Node.js, Express, and MongoDB. Added features like user authentication, tweet posting, likes, comments, and user profile management. Used JWT tokens and RESTful APIs for secure communication."
              ghLink="https://github.com/ayushhdesai/tuiter-react-web-app/"
              demoLink="https://github.com/ayushhdesai/tuiter-react-web-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img5}
              isBlog={false}
              title="Job Portal"
              description="Developed a full-featured job portal using HTML, CSS, Flask, and SQL. Implemented functionalities like user authentication, job posting, searching, and application management. Used JWT tokens and REST APIs for secure user interaction."
              ghLink="https://github.com/ayushhdesai/dbms_project/"
              demoLink="https://github.com/ayushhdesai/dbms_project/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img6}
              isBlog={false}
              title="Book Discussion Forum"
              description="Built a book discussion platform using React, Node.js, Express, and MongoDB. Integrated features for user authentication, book posts, search, and discussion threads. Implemented secure communication using RESTful APIs and JWT tokens."
              ghLink="https://github.com/ayushhdesai/webdev-project-react/"
              demoLink="https://github.com/ayushhdesai/webdev-project-react/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;