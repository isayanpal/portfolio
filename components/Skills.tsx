import React from "react";
import ShimButton from "./ui/ShimButton";

const Skills = () => {
  return (
    <section
      id="skills"
      className="mt-10 relative mb-5 py-12 bg-black-200 rounded-3xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
          I build <span className="text-purple">with</span>,
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <ShimButton title="HTML" />
          <ShimButton title="CSS" />
          <ShimButton title="Javascript" />
          <ShimButton title="React" />
          <ShimButton title="Next.js" />
          <ShimButton title="Node" />
          <ShimButton title="Express" />
          <ShimButton title="Mongoose" />
          <ShimButton title="MongoDB" />
          <ShimButton title="Git" />
          <ShimButton title="Postman" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
