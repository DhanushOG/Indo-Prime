export default function Contact() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h2>

      <div className="space-y-3 text-gray-700">
        <p><strong>Company:</strong> Indo-Prime Industries</p>
        <p><strong>Address:</strong> Shivabagh Complex, Kadri, Mangalore</p>
        <p><strong>Phone:</strong> +91-9739552053</p>
        <p><strong>Email:</strong> indoprimeindustries@gmail.com</p>
      </div>

      <form className="mt-10 space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          placeholder="Message"
          className="w-full border p-3 rounded-lg h-32"
        ></textarea>

        <button className="px-6 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
