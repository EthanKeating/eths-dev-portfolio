import React from "react";
import { Badge } from "react-bootstrap";

interface TechnologyBadgeProps {
  name: string;
}

const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({ name }) => {
  return (
    <Badge
      className={`badge-${name}`}
      style={{
        padding: "6px",
        margin: "3px",
        fontSize: "15px",
      }}
    >
      {name}
    </Badge>
  );
};

export default TechnologyBadge;
