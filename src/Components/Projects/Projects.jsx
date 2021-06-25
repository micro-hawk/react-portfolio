import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
export default function Projects(props) {
  return (
    <div>
      <section class="projects" id="projects">
        <div class="max-width">
          <div class="animate-icon">
            <lord-icon
              src="https://cdn.lordicon.com//anihkfxp.json"
              trigger="loop"
              colors="primary:#ffffff,secondary:#dc143c"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
          </div>

          <h2 class="title">Projects</h2>
          <div class="carousel owl-carousel">
            <ProjectCard cardTitle="TOURISM" cardContext="ABXNSDNN" />
          </div>
        </div>
      </section>
    </div>
  );
}
