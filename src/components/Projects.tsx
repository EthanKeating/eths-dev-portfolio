import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation"; // Import TypeAnimation for typing effect
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard"; // Import the ProjectCard component

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0, triggerOnce: true });

  const projects = [
    {
      title: "SGHQ Network",
      description: "Developed and maintain a Minecraft server & website with 60,000+ lines of code. Integrated player data to a React-based web panel for player statistics, moderation, & server management.",
      imageUrl: "/sghq/sghq.png",
      technologies: [
        { name: "Java" },
        { name: "MySQL" },
        { name: "Redis" },
        { name: "React" },
      ],
      githubUrl: "https://sghq.network/",
    },
    {
      title: "Music Discovery App",
      description: "Built for a Mobile Application Development course to help users explore and discover music & artists using the MusicBrainz API.",
      imageUrl: "/musicapp/music.png",
      technologies: [
        { name: "Dart" },
        { name: "Flutter" },
      ],
      githubUrl: "https://github.com/ivannimets/MusicApp",
    },
    {
      title: "E-Waste Heroes",
      description: "Developed in 36 hours to promote responsible electronics recycling. Utilized Open AI's API to estimate e-waste value & Google's Map API to locate nearby recycling centers.",
      imageUrl: "/ewaste/ewaste.png",
      technologies: [
        { name: "Dart" },
        { name: "Flutter" },
        { name: "Supabase" },
      ],
      githubUrl: "https://github.com/EthanKeating/e-waste-hero",
    },
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
    {
      title: "Dark Shells (Video Game)",
      description:
        "Dark Shells is a side-scrolling game developed by Martin Van Raay, Jon McDowell, Greg Grondin, and Ethan Keating in C# MonoGame.",
      imageUrl: "/darkshells/darkshells.png",
      technologies: [{ name: "C#" }, { name: "MonoGame" }],
      githubUrl: "https://github.com/EthanKeating/Group3FinalProject",
    },
    {
      title: "legacy-tab (Minecraft API)",
      description:
        "LegacyTab is a powerful 1.8 Tablist API designed to manipulate the client by sending fake player packets to display information",
      imageUrl: "/legacytab/legacytab.gif",
      technologies: [{ name: "Java" }],
      githubUrl: "https://github.com/EthanKeating/legacy-tab",
    },
    {
      title: "legacy-bossbar (Minecraft API)",
      description:
        "LegacyBossbar is a API for Legacy Minecraft servers to properly implement boss bars by sending fake entity packets. (1.8 & 1.7)",
      imageUrl: "/legacybossbar/legacybossbar.gif",
      technologies: [{ name: "Java" }],
      githubUrl: "https://github.com/EthanKeating/legacy-bossbar",
    },
    {
      title: "Lots more to come",
      description:
        "I have tons more projects I would like to showcase here in the near future. For now you can check out my github repositories!",
      imageUrl: "/more.png",
      technologies: [{ name: "Java" }],
      githubUrl: "https://github.com/EthanKeating/",
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
