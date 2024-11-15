const HeroSection = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-700 text-white p-6 text-center">
      <h1 className="animate-heading text-5xl font-bold mb-4">
        Welcome to the GSAP Showcase
      </h1>
      <p className="animate-subtext text-lg mb-8 max-w-md">
        Explore smooth animations and engaging visual effects with GSAP.
      </p>
      <a href="https://gsap.com/" target="_blank">
        <button className="animate-button bg-white text-blue-700 px-6 py-3 rounded-md font-semibold">
            Get Started
        </button>
      </a>
    </main>
  );
};

export default HeroSection;
