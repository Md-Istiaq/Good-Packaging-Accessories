import React, { useState, useEffect } from 'react';

// --- DATA ---
const products = [
  {
    name: "Plotter Paper Rolls",
    desc: "Specially designed to ensure smooth run in your plotter printer.",
    specs: ["Sizes: 40\" to 90\"", "GSM: 45, 60, 70"],
    img: "/images/Plotter Paper Rolls.webp",
  },
  {
    name: "Perforated Paper Rolls",
    desc: "Used for vacuumisation in autocutters. Ensures smooth flow in auto cutters.",
    specs: ["Sizes: 45\" to 90\"", "GSM: 80, 100, 120"],
    img: "/images/Perforated Paper Rolls.webp",
  },
  {
    name: "Pattern Paper Rolls",
    desc: "Used in CAD/CAM Pattern Cutting Machines to draw and cut various patterns.",
    specs: ["Sizes: 48\", 62\", 64\"", "GSM: 140 to 250"],
    img: "/images/Pattern Paper Rolls.webp",
  },
  {
    name: "HDPE / LDPE Film",
    desc: "Morgan Film / Vaccum Poly Film Roll used to overwrap fabric on auto-cutter.",
    specs: ["Sizes: 40\" to 120\"", "Thickness: 20-30 microns"],
    img: "/images/HDPE or LDPE Film.webp",
  },
  {
    name: "Plain Kraft Paper Rolls",
    desc: "Used for layering purposes on the cutting table. Smooth surface ensures efficient cutting.",
    specs: ["Sizes: 45\" to 80\"", "GSM: 60, 80, 100"],
    img: "/images/Plain Kraft Paper Rolls.webp",
  },
  {
    name: "Duplex Boards & Rolls",
    desc: "Used for making patterns in plotters and as support for packing garments.",
    specs: ["Sizes: 48\" to 72\"", "GSM: 230 to 450"],
    img: "/images/Duplex Boards & Rolls.webp",
  },
  {
    name: "Interleaving Tissues",
    desc: "Used in cutting rooms for separating fabrics. Ensures quick spreading and airflow.",
    specs: ["Sizes: 60\" to 72\"", "GSM: 17"],
    img: "/images/Interleaving Tissues.webp",
  },
  {
    name: "News Print Marker Paper",
    desc: "News print cad printing plotter paper roll width customized length",
    specs: ["Sizes: 48\" to 90\"", "GSM: 0.45mm~4mm"],
    img: "/images/News Print Marker Paper.webp",
  },
  {
    name: "Papertech A4 Size Offset Paper",
    desc: " Multi-purpose office paper suited for laser/inkjet printers and copiers.",
    specs: ["Standard ream contains 500 sheets."],
    img: "/images/papertech.jpg",
  },
  {
    "name": "UV Stamp Ink",
    "desc": "Used for creating security markings and re-entry hand stamps that remain hidden under normal light and glow under ultraviolet (UV) light.",
    "specs": ["Security markings", "Re-entry hand stamps", "Invisible under normal light", "Glows under UV light"],
    "img": "/images/UV Stamp Ink.jpg"
  },
  {
    "name": "DALO Textile Marker",
    "desc": "USA Dalo Textile Marker applicable to denim, knitting, woven, silk, cotton, nylon, polyester, and other fabrics. Also used for industrial purposes on glass, plastic, ceramics, metal, and rubber products.",
    "specs": ["Textile & fabric marking", "Works on denim, cotton, silk, nylon", "Industrial use: glass, plastic, metal"],
    "img": "/images/DALO Textile Marker.png"
  },
  {
    "name": "JIYA Hook & Loop Tape",
    "desc": "JIYA specializes in supplying various types of Hook and Loop Tape, with sizes ranging from 10mm to 200mm.",
    "specs": ["Standard Hook and Loop Tape", "Plastic Injection Hook Tape", "Same-material Hook and Loop Tape", "Custom colors & sizes available"],
    "img": "/images/JIYA Hook and Loop Tape.jxl"
  },
  {
    "name": "Rabbit Chalk",
    "desc": "High-quality tailor's chalk used for precise marking on fabrics and textiles during the cutting and stitching process.",
    "specs": ["Easy to apply", "Clean removal from fabric", "Essential for tailoring"],
    "img": "/images/Rabbit Chalk.jfif"
  },
  {
    "name": "Graphics Pen",
    "desc": "Multi-purpose marker pen designed for precise drawing and marking on various surfaces including paper, fabric, and plastics.",
    "specs": ["Fine point tip", "Quick-drying ink", "Multi-surface use"],
    "img": "/images/Graphics Pen.jpg"
  },
  {
    "name": "Both Side (Nikto) Tape",
    "desc": "Strong double-sided adhesive tape used for mounting, crafting, and various industrial applications.",
    "specs": ["High adhesion strength", "Double-sided", "Easy to apply"],
    "img": "/images/Both Side Nikto Tape.jfif"
  },
  {
    "name": "Masking Tape",
    "desc": "Easy-to-tear tape used for masking during painting, bundling materials, and general temporary holding.",
    "specs": ["Clean removal without residue", "Easy to tear by hand", "Strong paper backing"],
    "img": "/images/Masking Tape.jfif"
  },
  {
    "name": "H Tape",
    "desc": "Specialized tape used in the garment industry for hemming, binding, and reinforcing fabric edges.",
    "specs": ["Strong hold on fabrics", "Multi-purpose binding", "Available in various widths"],
    "img": "/images/H tape.jpg"
  },
  {
    "name": "Sprint Water Erasable Pen / Pencil",
    "desc": "High-quality temporary marking tools by Sprint, perfect for precise pattern tracing on fabrics and textiles. Marks are easily removed with water.",
    "specs": ["Brand: Sprint", "Water erasable", "Ideal for temporary fabric marking", "Available in Pen & Pencil formats"],
    "img": "/images/Sprint Water Erasable Pen.webp"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-gray-50 overflow-x-hidden">

      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src="/images/logo.jpeg" alt="Good Packaging Logo" className="h-10 md:h-12 w-auto object-contain" />
            <span className="hidden sm:block text-xl md:text-2xl font-bold text-indigo-950">Good Packaging</span>
          </a>

          <div className="hidden md:flex items-center space-x-8 font-medium text-indigo-950">
            <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
            <a href="#products" className="hover:text-indigo-600 transition-colors">Products</a>
            <a href="#why-us" className="hover:text-indigo-600 transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
            <a href="#contact" className="btn btn-primary bg-indigo-900 hover:bg-indigo-800 border-none text-white shadow-lg shadow-indigo-900/30">
              Get a Quote
            </a>
          </div>

          <button className="md:hidden text-indigo-950 text-3xl font-bold" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col space-y-4 font-medium text-indigo-950 animate-fade-in-down">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a>
            <a href="#why-us" onClick={() => setIsMenuOpen(false)}>Why Us</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="btn btn-primary bg-indigo-900 text-white">Request Quote</a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION (Updated Text) --- */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center md:bg-fixed bg-indigo-950"
          style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
        >
          <div className="absolute inset-0 bg-indigo-950/80 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white mt-16 animate-fade-in-up">
          <span className="inline-block py-1 px-4 rounded-full bg-indigo-500/30 backdrop-blur-sm border border-indigo-300/30 text-indigo-100 text-sm font-semibold tracking-wider mb-6">
            PREMIUM QUALITY ASSURED
          </span>

          {/* Updated Hero Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
            Good Packaging <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">
              & Accessories
            </span>
          </h1>

          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto mb-10 drop-shadow-md">
            Delivering top-tier trims, branding solutions, and high-quality packaging materials to the apparel and fashion sector.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#products" className="w-full sm:w-auto btn btn-lg bg-white text-indigo-900 hover:bg-gray-100 border-none px-8 shadow-xl rounded-full">
              Explore Products <span className="ml-2">→</span>
            </a>
            <a href="#contact" className="w-full sm:w-auto btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-indigo-900 px-8 rounded-full">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* --- WELCOME SECTION --- */}
      <section className="hero bg-white py-20 md:py-24">
        <div className="hero-content flex-col lg:flex-row gap-10 lg:gap-16 max-w-6xl mx-auto px-4">
          <img
            src="/images/welcome-img.webp"
            alt="Good Packaging Warehouse"
            className="max-w-sm rounded-3xl shadow-2xl object-cover h-[300px] md:h-[400px] w-full"
            loading="lazy"
          />
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-indigo-950 leading-tight">
              Welcome To <br />
              <span className="bg-indigo-900 text-white px-3 py-2 md:px-5 md:py-3 rounded-xl inline-block mt-4 shadow-lg text-2xl md:text-4xl lg:text-5xl leading-snug">
                Good Packaging & Accessories
              </span>
            </h1>
            <p className="py-6 text-gray-600 text-base md:text-lg leading-relaxed mt-2">
              Good Packaging & Accessories is a trusted name in the garment accessory industry, delivering top-tier trims and branding solutions to the apparel and fashion sector. Office in Uttara, Dhaka. We are committed to innovation, craftsmanship, and reliability—ensuring our partners meet global production and fashion standards with confidence.
            </p>

          </div>
        </div>
      </section>

      {/* --- 4 FEATURE BLOCKS --- */}
      <section className="py-12 bg-indigo-950">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Premium Quality" },
              { title: "Affordable Pricing" },
              { title: "On-Time Delivery" },
              { title: "Responsive Support" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:-translate-y-2 transition-transform duration-300 border-b-4 border-indigo-600">
                <h3 className="font-bold text-indigo-950 text-lg md:text-xl">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section id="why-us" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Trusted Quality", desc: "Consistent, well-inspected accessories every time." },
              { title: "On-Time Delivery", desc: "Reliable lead times to keep your production moving." },
              { title: "Tailored Branding", desc: "Creative designs that match your brand." },
              { title: "Sustainable Choices", desc: "Eco-smart materials and packaging available." },
              { title: "All-in-One Solutions", desc: "Labels, tags, transfers & more under one roof." },
              { title: "Responsive Service", desc: "Clear, quick communication throughout." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all">
                <div className="w-2 h-2 mt-2 bg-indigo-600 rounded-full shrink-0"></div>
                <div>
                  <h4 className="font-bold text-indigo-950 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DETAILED PRODUCTS SECTION --- */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">Our Product Range</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col hover:-translate-y-1"
              >
                <div className="p-3">
                  <div className="relative h-56 rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={product.img}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="px-5 pb-6 pt-2 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {product.desc}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                      Specifications
                    </h4>
                    <ul className="space-y-2">
                      {product.specs.map((spec, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2.5 mt-1.5 shrink-0"></span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-20 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">Get In Touch</h2>
                <div className="w-20 h-1 bg-indigo-600 rounded-full mb-6"></div>
                <p className="text-gray-600 text-lg">
                  Have a question or need a custom quote? Reach out to our team. We are here to help you with all your packaging and accessory needs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center shrink-0 text-xl">👤</div>
                  <div>
                    <h4 className="font-bold text-indigo-950 text-lg">Eng. Muhammed Ali Hyder</h4>
                    <p className="text-gray-600">Director</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center shrink-0 text-xl">📞</div>
                  <div>
                    <h4 className="font-bold text-indigo-950 text-lg">Phone</h4>
                    <p className="text-gray-600">01826 12 53 42<br />01833 05 26 96</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center shrink-0 text-xl">✉️</div>
                  <div>
                    <h4 className="font-bold text-indigo-950 text-lg">Email</h4>
                    <p className="text-gray-600">alihydergoodpa@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center shrink-0 text-xl">🏭</div>
                  <div>
                    <h4 className="font-bold text-indigo-950 text-lg">Factory</h4>
                    <p className="text-gray-600">43/1 Commissioner Road, Shahibagh, Savar, Dhaka.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center shrink-0 text-xl">🏢</div>
                  <div>
                    <h4 className="font-bold text-indigo-950 text-lg">Corporate</h4>
                    <p className="text-gray-600">Uttra, Sector-5, Road-3, House-15.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center shrink-0 text-xl">🏙️</div>
                  <div>
                    <h4 className="font-bold text-indigo-950 text-lg">Ctg Office</h4>
                    <p className="text-gray-600">O.R. Nizam Road, GEC Circle Central Plaza, (6 Floor)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control w-full">
                    <label className="label"><span className="label-text font-semibold text-gray-700">Name</span></label>
                    <input type="text" placeholder="Your Name" className="input input-bordered w-full bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                  </div>
                  <div className="form-control w-full">
                    <label className="label"><span className="label-text font-semibold text-gray-700">Phone</span></label>
                    <input type="tel" placeholder="Your Phone" className="input input-bordered w-full bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                  </div>
                </div>

                <div className="form-control w-full">
                  <label className="label"><span className="label-text font-semibold text-gray-700">Email</span></label>
                  <input type="email" placeholder="Your Email" className="input input-bordered w-full bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                </div>

                <div className="form-control w-full">
                  <label className="label"><span className="label-text font-semibold text-gray-700">Message</span></label>
                  <textarea className="textarea textarea-bordered h-32 w-full bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full bg-indigo-900 hover:bg-indigo-800 border-none text-white text-lg h-14 rounded-xl">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-indigo-950 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-white p-1 rounded-lg">
                  <img src="/images/logo.jpeg" alt="Good Packaging Logo" className="h-10 w-auto object-contain" />
                </div>
                <span className="text-2xl font-bold">Good Packaging</span>
              </div>
              <p className="text-indigo-200 text-sm leading-relaxed">
                A trusted name in the garment accessory industry, delivering top-tier trims and branding solutions to the apparel and fashion sector.
              </p>

              <div className="pt-2">
                <a
                  href="https://www.facebook.com/share/1CMU6AVQS1/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-indigo-900 rounded-full hover:bg-indigo-800 transition-colors text-white"
                  aria-label="Facebook Page"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-indigo-200 text-sm">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#why-us" className="hover:text-white transition-colors">Why Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contact Info</h4>
              <ul className="space-y-4 text-indigo-200 text-sm">
                <li className="flex items-start gap-3">
                  <span className="shrink-0">📍</span>
                  <span>Uttra, Sector-5, Road-3, House-15 (Corporate)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="shrink-0">📞</span>
                  <span>01826 12 53 42</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="shrink-0">✉️</span>
                  <span>alihydergoodpa@gmail.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Newsletter</h4>
              <p className="text-indigo-200 text-sm mb-4">Subscribe to receive updates and exclusive deals.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Enter your email" className="input input-bordered w-full bg-indigo-900 border-indigo-800 text-white placeholder-indigo-400 focus:outline-none focus:border-indigo-500" />
                <button className="btn bg-white text-indigo-950 hover:bg-gray-200 border-none px-4">Subscribe</button>
              </div>
            </div>

          </div>

          <div className="border-t border-indigo-900 pt-8 text-center text-indigo-300 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Good Packaging & Accessories. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed for your business.</p>
          </div>
        </div>
      </footer>

      {/* --- FLOATING WHATSAPP BUTTON --- */}
      <a
        href="https://wa.me/8801826125342"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-transform duration-300"
        aria-label="Contact on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in-down { animation: fadeInDown 0.3s ease-out forwards; }
      `}} />
    </div>
  );
}