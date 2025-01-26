import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation"; // Import TypeAnimation for typing effect
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard"; // Import the ProjectCard component

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0, triggerOnce: true });

  const projects = [
    {
      title: "Xime Suite (Private)",
      description:
        "All-in-One Minecraft Server Management Suite. Everything from gameplay to moderation. Commissioned for the 'MCGamer Network'",
      imageUrl: "/xime/xime-1.png",
      technologies: [{ name: "Java" }, { name: "MySQL" }, { name: "Redis" }],
      githubUrl: "https://mcgamer.club/",
    },
    {
      title: "Eths.dev (Portfolio)",
      description:
        "Personal project to show off my projects, My web design skills & to further my knowledge of React & TypeScript",
      imageUrl: "/ethsdev/ethsdev.png",
      technologies: [
        { name: "TypeScript" },
        { name: "React" },
        { name: "NodeJS" },
        { name: "HTML" },
        { name: "CSS" },
      ],
      githubUrl: "https://github.com/EthanKeating/eths-dev-portfolio",
    },
  ];

  return (
    <section className="py-5 bg-dark fade-in">
      <Container ref={ref}>
        <div id="projects">
          {/* Typing animation header with background color */}
          <div>
            <div
              style={{
                backgroundColor: "#00b894",
                padding: "10px 0",
                marginTop: "0px",
                marginBottom: "40px",
                textAlign: "center",
              }}
            >
              {inView && (
                <h2 className="text-light">
                  <TypeAnimation
                    sequence={[
                      "my projects.",
                      1000,
                      "exploring new technologies.",
                      1000,
                      "crafting beautiful designs.",
                      1000,
                      "my projects.",
                      1000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={0}
                    style={{ fontSize: "3rem", fontWeight: "bold" }}
                  />
                </h2>
              )}
            </div>

            <Row className="d-flex justify-content-center">
              {projects.map((project, index) => (
                <Col
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  className="mb-4 d-flex justify-content-center"
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    technologies={project.technologies}
                    githubUrl={project.githubUrl}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
