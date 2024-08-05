import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative mb-5 py-12 bg-black-200 rounded-3xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-purple mb-8 text-center">
          Experience
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-500">
            Software Developer Intern
          </h3>
          <p className="text-purple">Pephub</p>
          <p className="text-white-200">Aug 2023 - Nov 2023</p>
          <ul className="list-disc list-inside ml-4 mt-2 text-white">
            <li>
              Engineered a robust system to aggregate and store feedback from
              diverse user sources, enhancing data-driven decision-making
              processes.
            </li>
            <li>
              Integrated Razorpay Payment Gateway seamlessly, streamlining
              secure and efficient transaction processes for enhanced user
              experience and revenue generation.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-500">
            Web Developer Intern
          </h3>
          <p className="text-purple">V-Books</p>
          <p className="text-white-200">Jul 2023 - Sep 2023</p>
          <ul className="list-disc list-inside ml-4 mt-2 text-white">
            <li>
              Spearheaded a comprehensive redesign and reconstruction of the
              website to enhance user experience and optimize functionality.
            </li>
            <li>
              Implemented an optimized routing system for website pages,
              resulting in a 40% decrease in page load time and enhancing
              overall user experience.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
