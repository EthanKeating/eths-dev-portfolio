import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import TechnologyBadge from "./TechnologyBadge";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: { name: string }[];
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  githubUrl,
}) => {
  return (
    <div className="falling div-hover-effect">
      <Card
        style={{
          width: "100%",
          minHeight: "450px",
          color: "#f1f1f1",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Card.Img
          variant="top"
          src={imageUrl}
          style={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            height: "200px",
            objectFit: "cover",
          }}
        />
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "250px",
          }}
        >
          <div>
            <Card.Title className="text-light" style={{ fontSize: "1.4rem" }}>
              {title}
            </Card.Title>
            <Card.Text
              className="text-light"
              style={{
                fontSize: "1rem",
                lineHeight: "1.5",
                minHeight: "90px",
                maxHeight: "90px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "normal",
              }}
            >
              {description}
            </Card.Text>
          </div>

          <div style={{ marginBottom: "10px" }}>
            {technologies.map((tech, index) => (
              <TechnologyBadge key={index} name={tech.name} />
            ))}
          </div>

          <Button
            variant="none"
            style={{
              width: "100%",
              borderRadius: "5px",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #00b894, rgb(49, 214, 181))",
              color: "white",
              padding: "10px",
              textTransform: "uppercase",
              fontSize: "16px",
              border: "none",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="custom-button"
            onClick={() => window.open(githubUrl, "_blank")}
          >
            <FaGithub style={{ marginRight: "8px" }} /> View Project
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectCard;
