import React from "react";
import { Card } from "./ui/Card";
import { projects } from "@/data";

const Projects = () => {
  return (
    <section id="projects" className="mt-10 relative mb-5 py-12  rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
          Some of my <span className="text-purple">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              img={project.thumbnail}
              site={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
