import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ml from "../../Assets/Projects/LSTM.png"
import photobooth from "../../Assets/Projects/PhotoBooth.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photobooth}
              isBlog={false}
              title="ImageWizard"
              description="Implemented a Java-based Image Processing Application using MVC design with Swing for GUI, offering interactive text UI, batch processing, and various image manipulations like color adjustments, flipping, blur, and compression. Utilized Command Callback and Command Design Patterns, adhering to SOLID principles, and employed jUnit for testing."
              ghLink="https://github.com/ayushhdesai/ImageProcessor/"
              demoLink="https://github.com/ayushhdesai/ImageProcessor/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ml}
              isBlog={false}
              title="BiLingual Text Translation"
              description=" Deployed and created LSTM and Transformer architecture from scratch to translate from English to German and French to English
respectively, achieving an accuracy of 91% for both algorithms."
              ghLink="https://github.com/ayushhdesai/cs5100_project/"
              demoLink="https://github.com/ayushhdesai/cs5100_project/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
