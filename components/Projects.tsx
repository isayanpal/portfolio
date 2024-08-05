import React from "react";
import { CardDemo } from "./ui/Card";

const Projects = () => {
  return (
    <section id="projects" className="mt-10 relative mb-5 py-12  rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
          Some of my <span className="text-purple">Projects</span>,
        </h2>

        <CardDemo />
      </div>
    </section>
  );
};

export default Projects;
