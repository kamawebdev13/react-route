// src/componentes/EBM/Pages/AboutUs/AboutUs.tsx
const AboutUs = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-s-md">
      <div className="bg-white p-s-lg rounded-r-md shadow-btn max-w-[50rem] flex flex-col md:flex-row gap-s-md items-center">
        <div className="w-48 h-48 bg-c-active-four rounded-full flex-shrink-0 overflow-hidden">
           <img src="./assests/images/user-icon.webp" alt="Team" className="w-full h-full object-cover" />
        </div>
        
        <div className="text-center md:text-left">
          <h1 className="text-h-md text-c-text mb-2">About Our Mission</h1>
          <p className="text-c-text-two text-body leading-loose">
            English Grammar Battles was born from the idea that learning shouldn't be boring. 
            We combine game mechanics with pedagogical strategies to help you master 
            English while having a blast.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;

