import React from 'react';

const About = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center max-w-3xl mx-auto px-4 py-8">
      <div className="text-center">
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Artist Statement</h2>
          <p className="text-lg">
          For the past fifty years my studio work has primarily focused on exploring the construction of abstract narratives. To me, the narrative aspect consists of creating a dialogue, interaction and improvisation using non-representational elements, in a variety of spatial constructs. For me it is the tension and movement between figure and ground are that emotionally engaging. Much of the formal vocabulary in the paintings is developed from observation and abstraction of objects and their environments.
            <br />
            <br />
            Many of my paintings also incorporate the use of purposely shallow and yet ambiguous space. The spatial ideas range from the more “open” works with definite figure/ground relationships to paintings where the space is more dense and patterned, with little differentiation between figure and ground.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;