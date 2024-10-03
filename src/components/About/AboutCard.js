import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            As a current <span className="purple">Master of Science in Computer Science</span> student at <span className="purple">Northeastern University's Khoury College of Computer Science</span>, 
            I am driven by a passion for creating impactful solutions in <span className="purple">Machine Learning</span> and <span className="purple">Artificial Intelligence</span>.
            My journey through diverse projects has given me the ability to adapt quickly to new technologies, optimize processes, and solve complex challenges 
            with a focus on delivering high-performance results.
            
            I specialize in designing and deploying <span className="purple">scalable</span> machine learning models, building end-to-end data pipelines, and leveraging cloud technologies for 
            <span className="purple">MLOps</span>. From predicting trends and automating workflows to driving efficiencies across teams, my work is focused on innovation and creating real-world impact. 
            My proactive approach ensures continuous learning, and I thrive in collaborative environments where I can contribute to a team's success while exploring new solutions.
            
            Whether I am tackling cutting-edge AI projects or optimizing business operations through data-driven insights, I always maintain a forward-thinking mindset, 
            ensuring that I bring <span className="purple">reliability</span> and <span className="purple">leadership</span> to everything I do. If you are looking for someone who is not just technically skilled, 
            but also passionate about leveraging technology to solve real-world problems, I am excited to explore how my background can bring value to your team.
          </p>
          <footer className="blockquote-footer">Ayush Desai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
