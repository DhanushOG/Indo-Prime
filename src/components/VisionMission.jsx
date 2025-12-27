import MotionWrapper from "./MotionWrapper";

export default function VisionMission() {
  return (
    <MotionWrapper>
      <section className="bg-blue-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-800 mb-12">Vision & Mission</h2>

          <div className="grid md:grid-cols-2 gap-10">
            
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-bold text-2xl text-blue-700">Our Vision</h3>
              <p className="mt-4 text-gray-700 text-lg">
                To lead the waterproofing industry with cutting-edge technology,
                innovation, and continuous improvement in quality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-bold text-2xl text-blue-700">Our Mission</h3>
              <p className="mt-4 text-gray-700 text-lg">
                To provide customers with reliable, high-quality waterproofing 
                and construction chemical solutions at the best value.
              </p>
            </div>

          </div>
        </div>
      </section>
    </MotionWrapper>
  );
}
