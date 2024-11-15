const ScrollSection = () => {
  return (
    <section className="scroll-section h-screen bg-green-500 flex items-center justify-center">
      <div className="scroll-section-box bg-white text-green-500 shadow-lg p-8 rounded-lg text-center">
        <h2 className="text-3xl font-semibold mb-2">Scroll Section</h2>
        <p>This content fades and scales as you scroll.</p>
      </div>
    </section>
  );
};

export default ScrollSection;
