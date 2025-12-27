import MotionWrapper from "../components/MotionWrapper";
import { Building2, Users, Target, CheckCircle2, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24">

      {/* HEADER */}
      <section className="bg-blue-900 text-white py-24 px-6 text-center">
        <MotionWrapper>
          <h1 className="text-5xl font-extrabold mb-4">About Indo-Prime Industries</h1>
          <p className="text-lg max-w-3xl mx-auto text-blue-100">
            Delivering top-notch construction chemical solutions & waterproofing services since 2009.
          </p>
        </MotionWrapper>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <MotionWrapper>
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Who We Are</h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Indo-Prime Industries is a technology-driven company specializing in construction chemicals,
            waterproofing treatment, epoxies, adhesives, sealants, grouts, floorings, and restoration works.
            We are committed to delivering high-quality solutions across Karnataka.
          </p>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Since 2009, Indo-Prime Industries has been trusted by homeowners, industries, commercial
            buildings, infrastructure developers, architects, and contractors for premium waterproofing
            and chemical solutions.
          </p>
        </MotionWrapper>
      </section>

      {/* OWNER SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <MotionWrapper>
          <div className="bg-white shadow-xl rounded-2xl p-10 border border-gray-100">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Founder & Expertise</h2>

            <p className="text-gray-700 text-lg">
              <strong className="text-blue-900">Shivanand R. Kotian</strong>, Proprietor of Indo-Prime Industries,
              holds a <strong>Diploma in Chemical Engineering (Since 1991)</strong> and carries over 30 years of
              experience working with major construction chemical companies in Mumbai.
            </p>

            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              His expertise spans waterproofing, epoxies, adhesives, sealants, grouts, and industrial flooring
              solutions. Under his leadership, Indo-Prime Industries has delivered thousands of successful
              projects across Karnataka.
            </p>
          </div>
        </MotionWrapper>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <MotionWrapper>
            <div className="bg-white p-10 rounded-2xl shadow border border-gray-100">
              <Target className="w-12 h-12 text-blue-700 mb-4" />
              <h3 className="text-2xl font-bold text-blue-700 mb-3">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To constantly upgrade technology, improve quality standards, and become the leading
                waterproofing solution provider in India.
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper>
            <div className="bg-white p-10 rounded-2xl shadow border border-gray-100">
              <CheckCircle2 className="w-12 h-12 text-blue-700 mb-4" />
              <h3 className="text-2xl font-bold text-blue-700 mb-3">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To serve clients with high-quality construction chemicals and waterproofing solutions
                through knowledge, innovation, and technical excellence.
              </p>
            </div>
          </MotionWrapper>

        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <MotionWrapper>
          <h2 className="text-4xl font-bold text-blue-800 mb-8">Areas We Serve</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Mangalore",
              "Udupi",
              "Bangalore",
              "Chikmagalur",
              "Sringeri",
              "Koppa"
            ].map((loc, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border"
              >
                <MapPin className="w-8 h-8 text-blue-700 mb-3" />
                <p className="text-gray-700 text-lg">{loc}</p>
              </div>
            ))}
          </div>
        </MotionWrapper>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 py-20 px-6">
        <MotionWrapper>
          <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">Why Choose Indo-Prime?</h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

            <div className="bg-white p-8 rounded-xl shadow border hover:shadow-xl transition">
              <Building2 className="w-10 h-10 text-blue-600 mb-4" />
              <p className="text-lg font-semibold text-gray-800">30+ Years Expertise</p>
              <p className="text-gray-600 mt-2">
                Decades of experience in waterproofing & construction chemicals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow border hover:shadow-xl transition">
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <p className="text-lg font-semibold text-gray-800">Skilled Technical Team</p>
              <p className="text-gray-600 mt-2">
                Site inspections, demos & tailored waterproofing solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow border hover:shadow-xl transition">
              <CheckCircle2 className="w-10 h-10 text-blue-600 mb-4" />
              <p className="text-lg font-semibold text-gray-800">Guaranteed Quality</p>
              <p className="text-gray-600 mt-2">
                Only premium-grade chemicals ensuring long-term protection.
              </p>
            </div>

          </div>
        </MotionWrapper>
      </section>

    </div>
  );
}
