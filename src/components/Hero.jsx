import MotionWrapper from "./MotionWrapper";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
          alt="Construction"
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <MotionWrapper>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl">
            Premium Waterproofing &  
            <br />Manufactureres
          </h1>

          <p className="mt-5 text-lg text-gray-200 max-w-2xl mx-auto">
            Trusted by major builders across Karnataka. Delivering long-lasting waterproofing,
            epoxy floors, coatings, sealants, adhesives and industrial solutions.
          </p>

          <button className="mt-8 px-10 py-3 bg-blue-600 text-white text-lg rounded-xl shadow-xl hover:bg-blue-700 transition">
            Get Free Inspection
          </button>
        </MotionWrapper>
      </div>
    </section>
  );
}
