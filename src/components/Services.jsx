import MotionWrapper from "./MotionWrapper";
import { Wrench, Droplet, ShieldCheck } from "lucide-react";

export default function Services() {
  const services = [
    { name: "Waterproofing Solutions", icon: Droplet },
    { name: "Construction Chemicals Trading", icon: Wrench },
    { name: "Sealants & Adhesives", icon: ShieldCheck },
    { name: "Thermal Insulation Coatings", icon: ShieldCheck },
    { name: "Epoxy Floor Coatings", icon: Wrench },
    { name: "Anti-Corrosive Coatings", icon: ShieldCheck }
  ];

  return (
    <MotionWrapper>
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-800 mb-12 text-center">
          What We Offer
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map(({ name, icon: Icon }, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2
              transition transform cursor-pointer border border-gray-100"
            >
              <Icon className="w-10 h-10 text-blue-600 mb-4" />
              <p className="text-gray-900 text-xl font-semibold">{name}</p>
            </div>
          ))}
        </div>
      </section>
    </MotionWrapper>
  );
}
