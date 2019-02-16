import React from "react";
import { Badge } from "reactstrap";

const Labels = ({ labels }) => {
  return (
    <span style={{ paddingLeft: 20 }}>
      {labels &&
        labels.map(label => (
          <Badge color="primary" style={{ marginLeft: 5 }} key={label.id}>
            {label.name}
          </Badge>
        ))}
    </span>
  );
};

export default Labels;
