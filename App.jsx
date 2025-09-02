import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 relative">
      {/* Hero */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          ACADEMIC PRO WRITERS
        </motion.h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Professional academic writing services and smart AI-powered tools to help
          you achieve better grades.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#tools"
            className="bg-white text-blue-600 px-6 py-3 rounded-2xl shadow font-semibold"
          >
            Try Tools
          </a>
          <a
            href="#order"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-2xl shadow font-semibold"
          >
            Order Now
          </a>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Smart Writing Tools
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "AI Essay Builder", desc: "Generate well-structured drafts instantly." },
            { title: "Paraphrase & Humanize", desc: "Turn AI text into natural human-like writing." },
            { title: "Chat with PDF", desc: "Upload research papers & get instant insights." },
            { title: "Human Editing", desc: "Our experts refine drafts for academic quality." },
          ].map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow"
            >
              <h3 className="font-semibold text-xl mb-2">{tool.title}</h3>
              <p className="text-gray-600 text-sm">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { tier: "Basic", price: "$10/page", features: ["Essays", "Reports", "Assignments"] },
            { tier: "Standard", price: "$15/page", features: ["Research Papers", "Case Studies"] },
            { tier: "Premium", price: "$20/page", features: ["Dissertations", "Editing", "Full Support"] },
          ].map((plan, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow p-6 text-center flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.tier}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="text-gray-600 flex-1 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="mb-2">• {f}</li>
                ))}
              </ul>
              <a
                href="#order"
                className="bg-blue-600 text-white px-4 py-2 rounded-2xl shadow"
              >
                Order Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Order Form */}
      <section id="order" className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Place an Order</h2>
        <form id="orderForm" className="bg-white p-8 rounded-2xl shadow space-y-4" onSubmit={(e)=>{e.preventDefault(); submitToWhatsApp();}}>
          <input id="clientName" type="text" placeholder="Your Name" className="w-full p-3 border rounded-xl" />
          <input id="clientEmail" type="email" placeholder="Your Email" className="w-full p-3 border rounded-xl" />
          <textarea id="projectDetails" placeholder="Project Details" className="w-full p-3 border rounded-xl" rows="5"></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow w-full"
          >
            Submit Order
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-8 text-center">
        <p className="mb-2">© {new Date().getFullYear()} ACADEMIC PRO WRITERS</p>
        <p className="mb-2">
          Email: <a href="mailto:muindev5@gmail.com" className="underline">muindev5@gmail.com</a> | {" "}
          WhatsApp: <a href="https://wa.me/254741789023" target="_blank" rel="noopener noreferrer" className="underline">+254741789023</a>
        </p>
        <p className="text-sm">For academic support and reference use only.</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254741789023"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      <script>{`function submitToWhatsApp(){const name=document.getElementById('clientName').value.trim();const email=document.getElementById('clientEmail').value.trim();const details=document.getElementById('projectDetails').value.trim();if(!name||!email||!details){alert('Please fill name, email, and project details.');return;}const msg='New order from %0AName: '+encodeURIComponent(name)+'%0AEmail: '+encodeURIComponent(email)+'%0ADetails: '+encodeURIComponent(details);const waUrl='https://wa.me/254741789023?text='+msg;window.open(waUrl,'_blank');}`}</script>
    </div>
  );
}
