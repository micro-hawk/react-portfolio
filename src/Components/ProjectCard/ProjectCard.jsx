import React from "react";
export default function ProjectCard(props) {
  return (
    <div class="card">
      <div class="box">
        <img src={props.cardImage} alt="" />
        <div class="text">
          <i class="fab fa-github-alt"></i> <br />
          {props.cardTitle}
        </div>
        <p>{props.cardContext}</p>
      </div>
    </div>
  );
}
