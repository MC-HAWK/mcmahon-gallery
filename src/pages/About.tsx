import React from 'react';

const About = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center max-w-3xl mx-auto px-4 py-8">
      <div className="text-center">
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Artist Statement</h2>
          <p className="text-lg">
            For over fifty years my studio work has primarily focused on exploring
            the construction of abstract narratives. For me, the narrative aspect
            consists of creating a dialogue, interaction and improvisation using
            non-representational elements. Many of these ideas are derived from
            representational objects and observations that help in forming the
            structure for these works.
            <br />
            <br />
            The majority of my works also incorporate the use of purposely shallow
            and yet ambiguous space. The spatial ideas range from the more “open”
            works with definite figure/ground relationships to paintings where the
            space is more dense and patterned, with little differentiation between
            figure and ground.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;