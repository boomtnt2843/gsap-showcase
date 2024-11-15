const CreditSection = () => {
  return (
    <section className="credit-section relative flex items-center justify-center h-screen bg-gray-800 text-white">
      <div className="absolute inset-0">
        <div className="shape triangle w-24 h-24 bg-yellow-400 opacity-50 absolute top-16 left-16"></div>
        <div className="shape hexagon w-32 h-32 bg-teal-400 opacity-50 absolute bottom-16 right-16"></div>
        <div className="shape square w-16 h-16 bg-purple-400 opacity-50 absolute top-1/2 left-1/3"></div>
        <div className="shape pentagon w-20 h-20 bg-pink-400 opacity-50 absolute bottom-10 left-1/4"></div>
        <div className="shape star w-20 h-20 bg-blue-400 opacity-50 absolute top-10 right-1/4"></div>
      </div>
      <div className="credit-section-content text-center p-8">
        <h2 className="text-4xl font-bold mb-4">Credits</h2>
        <p className="text-lg">
          This showcase was created using{" "}
          <span className="text-blue-400 font-semibold">GSAP</span> and{" "}
          <span className="text-teal-400 font-semibold">Next.js</span>.
        </p>
        <p className="text-md mt-4">
          Special thanks to the developers of these amazing tools for making
          animations and web development so much fun!
        </p>
      </div>
    </section>
  );
};

export default CreditSection;
