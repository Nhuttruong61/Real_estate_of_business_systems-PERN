import React from "react";

interface propsSeletion {
  Text: string;
  option: Array<string>;
}
function Selection(props: propsSeletion) {
  return (
    <div>
      <p>{props.Text}</p>
    </div>
  );
}

export default Selection;
