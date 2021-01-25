import React from "react";

export default function Percipitation(props) {
  let roundedPercipitation = Math.round(props.value);
  return <div className="percipitation">{roundedPercipitation}%</div>;
}
