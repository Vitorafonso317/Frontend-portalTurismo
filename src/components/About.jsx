import React from 'react';

const AboutHero = (props) => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden"
      style={{ backgroundImage: `url(${props.Img})` }}
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>

          <div className="bg-gradient-to-b from-[#354225] via-[#28331c] to-[#1b2313] text-white text-center w-full h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4">Minha experiência</h1>
      <p className="text-xl max-w-xl">
        Adorei aprender a fazer esse site e espero conseguir fazer muito mais, mas espero que eu nao tenha a mesma dificuldade que eu tive para fazer esse site 
      </p>
    </div>
    </div>
  );
};

export default AboutHero;
