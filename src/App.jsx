import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// --- DATA ---
const products = [
  {
    name: "Plotter Paper Rolls",
    desc: "Specially designed to ensure smooth run in your plotter printer.",
    specs: ["Sizes: 40\" to 90\"", "GSM: 45, 60, 70"],
    img: "https://cdn.modulor.de/products/sp22l/1_1920_1920_r_plotterpapier_weiss_glatt_90_g_rolle.jpg",
  },
  {
    name: "Perforated Paper Rolls",
    desc: "Used for vacuumisation in autocutters. Ensures smooth flow in auto cutters.",
    specs: ["Sizes: 45\" to 90\"", "GSM: 80, 100, 120"],
    img: "https://pandapaperroll.com/wp-content/uploads/2025/07/Perforated-Kraft-Paper-in-rolls.webp",
  },
  {
    name: "Pattern Paper Rolls",
    desc: "Used in CAD/CAM Pattern Cutting Machines to draw and cut various patterns.",
    specs: ["Sizes: 48\", 62\", 64\"", "GSM: 140 to 250"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIFHL8UAL9-wzOTZhuOR6teFewJAf_022_KU_sUMhNebgJU-JHfe7lWjWC&s=10",
  },
  {
    name: "HDPE / LDPE Film",
    desc: "Morgan Film / Vaccum Poly Film Roll used to overwrap fabric on auto-cutter.",
    specs: ["Sizes: 40\" to 120\"", "Thickness: 20-30 microns"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3klk-8uZSarktygdPsUd6VldpXCpKayTQA1iLcEdSVwa9gmvECxP4jZg&s=10",
  },
  {
    name: "Plain Kraft Paper Rolls",
    desc: "Used for layering purposes on the cutting table. Smooth surface ensures efficient cutting.",
    specs: ["Sizes: 45\" to 80\"", "GSM: 60, 80, 100"],
    img: "https://5.imimg.com/data5/KK/UW/MY-1965691/kraft-paper-roll.jpg",
  },
  {
    name: "Duplex Boards & Rolls",
    desc: "Used for making patterns in plotters and as support for packing garments.",
    specs: ["Sizes: 48\" to 72\"", "GSM: 230 to 450"],
    img: "https://image.made-in-china.com/202f0j00vmjiSLBqlazb/Chromo-Coated-Duplex-Board-Paper-250GSM-300GSM-350-GSM-400GSM.webp",
  },
  {
    name: "Interleaving Tissues",
    desc: "Used in cutting rooms for separating fabrics. Ensures quick spreading and airflow.",
    specs: ["Sizes: 60\" to 72\"", "GSM: 17"],
    img: "https://www.stoefflerpaper.com/media/fb/fb/6e/1789399134/SP_350150-S_20260914_00_titelbild.webp?ts=1792675345",
  },
];

export default function App() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
      });
  };

  return (
    <div className="font-sans text-slate-700 bg-white">
      {/* NAVBAR */}
      <div className="navbar bg-white shadow-sm sticky top-0 z-50 px-4 md:px-8 border-b border-slate-100">
        <div className="navbar-start">
          <a href="#" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="GPA Logo" className="h-10 w-auto" />
            <span className="font-bold text-emerald-700 text-lg md:text-xl hidden sm:block">
              Good Packaging & Accessories
            </span>
          </a>
        </div>
        <div className="navbar-end hidden md:flex gap-4">
          <a href="#about" className="btn btn-ghost text-slate-700 hover:text-emerald-700">About</a>
          <a href="#products" className="btn btn-ghost text-slate-700 hover:text-emerald-700">Products</a>
          <a href="#contact" className="btn bg-emerald-700 hover:bg-emerald-800 text-white border-none">Contact Us</a>
        </div>

        {/* Mobile Menu */}
        <div className="navbar-end md:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-slate-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-box w-52 border border-slate-100">
              <li><a href="#about" className="text-slate-700 font-medium">About</a></li>
              <li><a href="#products" className="text-slate-700 font-medium">Products</a></li>
              <li><a href="#contact" className="text-slate-700 font-medium">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Image with Dark Overlay */}
        <img src="https://thumbs.dreamstime.com/b/perspective-background-photo-warehouse-storing-goods-related-to-export-import-logistics-storage-night-356876704.jpg" alt="Factory background" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-slate-900/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            A Total Garments <br className="hidden md:block" /> Accessories Solution
          </h1>
          <p className="py-4 text-lg md:text-xl text-slate-200">
            100% Export oriented Fashion Accessories Manufacturer & Supplier.
            Bonded & Oekotex Factory with 6 years of experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a href="#contact" className="btn bg-emerald-600 hover:bg-emerald-700 text-white border-none btn-lg px-8">Call to Order</a>
            <a href="#products" className="btn btn-outline btn-lg px-8 text-white border-slate-300 hover:bg-white hover:text-slate-900 hover:border-white">View Products</a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-emerald-700 mb-6"
          >
            We Ensure Quality with Best Price
          </motion.h2>
          <p className="text-lg leading-relaxed text-slate-600 mb-4">
            Good Packaging & Accessories offers all the garment accessories and trims—especially Tape, Jacquard, Elastic, Poly, Lace, and Packaging items with a competitive price and high-quality standard. We are an Oeko-Tex certified company & Bonded Factory.
          </p>
          <p className="text-lg leading-relaxed text-slate-600">
            We are inventing new products day by day to bring the latest designs to your door step.
          </p>

          <div className="stats stats-vertical sm:stats-horizontal shadow-lg bg-white mt-10 w-full border border-slate-200 rounded-xl">
            <div className="stat">
              <div className="stat-title text-slate-500">Established</div>
              <div className="stat-value text-emerald-700">2020</div>
            </div>
            <div className="stat border-t sm:border-t-0 sm:border-l border-slate-200">
              <div className="stat-title text-slate-500">Experience</div>
              <div className="stat-value text-emerald-700">6 Years</div>
            </div>
            <div className="stat border-t sm:border-t-0 sm:border-l border-slate-200">
              <div className="stat-title text-slate-500">Production (MO)</div>
              <div className="stat-value text-emerald-700">50,000 PCS</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-700 mb-12">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group rounded-xl overflow-hidden"
              >
                <figure className="h-56 overflow-hidden bg-slate-100">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = 'https://placehold.co/600x400/e2e8f0/64748b?text=Product+Image'; }}
                  />
                </figure>
                <div className="card-body p-6">
                  <h3 className="card-title text-slate-800 text-xl mb-2">{p.name}</h3>
                  <p className="text-sm text-slate-600 mb-4">{p.desc}</p>

                  {/* Specs Badges */}
                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                    {p.specs.map((spec, idx) => (
                      <span key={idx} className="badge badge-outline border-emerald-600 text-emerald-700 text-xs py-3 px-2">
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="card-actions justify-end mt-2">
                    <a href="#contact" className="btn btn-sm bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-none">
                      Inquire Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-700 mb-12">
            Welcome to Inquire
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 border-l-4 border-l-emerald-600">
                <h3 className="text-xl font-bold mb-4 text-slate-800">Contact Person</h3>
                <p className="font-semibold text-lg text-slate-800">Eng. Muhammed Ali Hyder</p>
                <p className="text-sm text-slate-500 mb-6">Director</p>

                <div className="space-y-4">
                  <p className="flex items-center gap-3">
                    <span className="font-bold text-emerald-700 w-12">Mob:</span>
                    <a href="tel:+8801865008931" className="hover:text-emerald-700 text-slate-700 transition-colors">01865 00 89 31</a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="font-bold text-emerald-700 w-12">Mob:</span>
                    <a href="tel:+8801833052696" className="hover:text-emerald-700 text-slate-700 transition-colors">01833 05 26 96</a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="font-bold text-emerald-700 w-12">Email:</span>
                    <a href="mailto:alihydergoodpa@gmail.com" className="hover:text-emerald-700 text-slate-700 break-all transition-colors">alihydergoodpa@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 border-l-4 border-l-slate-800">
                <h3 className="text-xl font-bold mb-4 text-slate-800">Locations</h3>
                <div className="mb-6">
                  <p className="font-semibold text-slate-800 mb-1">Factory:</p>
                  <p className="text-sm text-slate-600 leading-relaxed">Buripara, Norshinghapur, Earpur, Ashulia, Savar, Dhaka.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">Office:</p>
                  <p className="text-sm text-slate-600 leading-relaxed">House # 581(3), Floor Main Road, Mirpur DOHS, Dhaka-1216.</p>
                </div>
              </div>
            </motion.div>

            {/* Email Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-200"
            >
              <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                <div className="form-control">
                  <label className="label"><span className="label-text font-semibold text-slate-700">Your Name</span></label>
                  <input type="text" name="user_name" required className="input input-bordered w-full focus:outline-emerald-600" placeholder="John Doe" />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text font-semibold text-slate-700">Your Email</span></label>
                  <input type="email" name="user_email" required className="input input-bordered w-full focus:outline-emerald-600" placeholder="john@example.com" />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text font-semibold text-slate-700">Message</span></label>
                  <textarea name="message" required rows="4" className="textarea textarea-bordered w-full focus:outline-emerald-600" placeholder="I want to order..."></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn w-full bg-emerald-700 hover:bg-emerald-800 text-white border-none mt-2"
                >
                  {status === "sending" ? <span className="loading loading-spinner"></span> : "Send Message"}
                </button>

                {status === "success" && (
                  <div className="alert alert-success mt-4 text-sm bg-emerald-50 text-emerald-800 border-emerald-200">Message sent successfully! We will contact you soon.</div>
                )}
                {status === "error" && (
                  <div className="alert alert-error mt-4 text-sm bg-red-50 text-red-800 border-red-200">Failed to send message. Please call us directly.</div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

          {/* Logo & Company Info */}
          <div className="mb-8 flex flex-col items-center">
            <img src="/images/logo.png" alt="GPA Logo" className="h-16 w-auto mb-4 bg-white p-2 rounded-lg" />
            <p className="font-bold text-xl text-white mb-2">Good Packaging & Accessories</p>
            <p className="text-sm text-slate-400 max-w-md">
              100% Export Oriented Fashion Accessories Manufacturer & Supplier
            </p>
          </div>

          {/* Navigation Links - Stacked on mobile, row on desktop */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8 w-full justify-center items-center">
            <a href="#about" className="text-slate-300 hover:text-white transition-colors font-medium">About</a>
            <a href="#products" className="text-slate-300 hover:text-white transition-colors font-medium">Products</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors font-medium">Contact</a>
          </div>

          {/* Copyright */}
          <div className="w-full border-t border-slate-700 pt-6 mt-2">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Good Packaging & Accessories. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}