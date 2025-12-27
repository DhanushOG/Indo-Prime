import MotionWrapper from "./MotionWrapper";

export default function About() {
  return (
    <MotionWrapper>
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-800 mb-8">Who We Are</h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          Indo-Prime Industries is a trusted provider of waterproofing and construction
          chemical solutions since 2009. With over 30+ years of industrial expertise,
          we offer advanced, reliable and long-lasting waterproofing treatments for all structures.
        </p>

        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          Our team ensures on-site inspections, tailored solutions and high-quality workmanship
          for residential, commercial, and industrial projects.
        </p>
      </section>
    </MotionWrapper>
  );
}
