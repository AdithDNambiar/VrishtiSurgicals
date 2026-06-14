import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  HeartPulse,
  Building2,
  Hospital,
  FlaskConical,
  Home,
  Stethoscope,
  Syringe,
  Thermometer,
  PackageCheck,
  ClipboardCheck,
  Star,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import "./App.css";

const PHONE = "+91 9400070548";
const DISPLAY_PHONE = "+91 9400070548";
const EMAIL = "vgtpvtltd@gmail.com";
const ADDRESS =
  "Crown Plaza Building, Opp. Pariyaram Medical College, Pariyaram, Kannur, Kerala, India - 670503";

const categories = [
  { title: "Mobility & Patient Care", desc: "Wheelchairs, commode chairs, walkers, air beds and patient support items", icon: Hospital },
  { title: "Respiratory Care", desc: "Nebulizers, oxygen concentrators, masks, tubes and respiratory accessories", icon: HeartPulse },
  { title: "Wound Care & Dressings", desc: "Cotton, crepe bandages, adhesive bandages, gauze, dressings and tapes", icon: ClipboardCheck },
  { title: "Ostomy Care", desc: "Colostomy bags, urostomy bags, barrier creams, base plates and ostomy belts", icon: PackageCheck },
  { title: "Disinfectants & Hygiene", desc: "Hand rubs, body wash, tinctures, cleaning solutions and hygiene products", icon: ShieldCheck },
  { title: "First Aid & Emergency Kits", desc: "First aid kits, travel kits, biker kits, industrial kits and medical bags", icon: BadgeCheck },
  { title: "Diagnostic Devices", desc: "BP monitors, thermometers, weighing scales, pulse oximeters and stethoscopes", icon: Thermometer },
  { title: "Syringes, Needles & IV Supplies", desc: "Disposable syringes, insulin syringes, cannulas, scalp vein sets and IV items", icon: Syringe },
  { title: "Pillows & Support Cushions", desc: "Neck pillows, travel pillows, car neck rests and support cushions", icon: Home },
  { title: "Medical Accessories", desc: "Pill cutters, hot and cold packs, sitz bath, underpads and general supplies", icon: Stethoscope },
];

const products = [
  { title: "Wheelchair", icon: Hospital },
  { title: "Nebulizer Machine", icon: HeartPulse },
  { title: "Oxygen Concentrator", icon: HeartPulse },
  { title: "BP Monitor", icon: Stethoscope },
  { title: "Digital Thermometer", icon: Thermometer },
  { title: "Pulse Oximeter", icon: HeartPulse },
  { title: "Crepe Bandage", icon: ClipboardCheck },
  { title: "Surgical Cotton", icon: PackageCheck },
  { title: "Disposable Syringe", icon: Syringe },
  { title: "First Aid Kit", icon: BadgeCheck },
  { title: "Ostomy Bag", icon: PackageCheck },
  { title: "Air Mattress", icon: Home },
];

const choose = [
  { title: "Quality Products", desc: "Carefully sourced from trusted manufacturers", icon: ShieldCheck },
  { title: "Trusted Brands", desc: "We deal with reliable healthcare brands", icon: BadgeCheck },
  { title: "Affordable Pricing", desc: "Best quality products at competitive prices", icon: Star },
  { title: "Bulk Supply Support", desc: "We cater to wholesale and bulk needs", icon: PackageCheck },
  { title: "Fast & Reliable Service", desc: "Timely delivery and quick support", icon: Truck },
  { title: "Customer Satisfaction", desc: "Your trust and satisfaction is our priority", icon: HeartPulse },
];

const serve = [
  { title: "Hospitals", icon: Hospital },
  { title: "Clinics", icon: Building2 },
  { title: "Pharmacies", icon: PackageCheck },
  { title: "Home Care", icon: Home },
  { title: "Laboratories", icon: FlaskConical },
  { title: "Rehab Centers", icon: HeartPulse },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleWhatsAppSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;
  const phone = form.phone.value;
  const requirement = form.requirement.value;
  const message = form.message.value;

  const text = `Hi Vrishti Surgicals Pvt.Ltd.,

Name: ${name}
Phone: ${phone}
Requirement: ${requirement}
Message: ${message}`;

  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`, "_blank");
};
  return (
    <main>
      <header className="navbar">
        <a href="#home" className="logo">
  <img src="/logo.png" alt="Vrishti Surgicals" className="logoMark" />

  <div className="logoText">
    <h2>Vrishti</h2>
    <span>SURGICALS PVT.LTD.</span>
  </div>
</a>

        <nav className={menuOpen ? "navLinks active" : "navLinks"}>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About Us</a>
          <a href="#serve">Who We Serve</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <div className="navActions">
          <a href={`tel:${PHONE}`} className="callBox">
            <Phone size={18} />
            <div>
              <span>Call Us Now</span>
              <strong>{DISPLAY_PHONE}</strong>
            </div>
          </a>

          <a href={`https://wa.me/${PHONE}`} className="whatsappBtn" target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            WhatsApp Us
          </a>

          <button className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero noVisual" id="home">
        <div className="heroText">
          <div className="tag">
            <ShieldCheck size={18} />
            Trusted Healthcare Partner
          </div>

          <h1>
            Trusted Surgical & <span>Medical Supplies</span>
          </h1>

          <p>
            Quality healthcare essentials including wheelchairs, nebulizers,
            oxygen concentrators, wound care products, ostomy supplies,
            diagnostic devices, first aid kits and more.
          </p>

          <div className="heroButtons">
            <a href="#products" className="primaryBtn">
              Explore Products <ArrowRight size={18} />
            </a>
            <a href="#contact" className="outlineBtn">Contact Us</a>
            <a href={`https://wa.me/${PHONE}`} className="greenBtn" target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              WhatsApp Now
            </a>
          </div>

          <div className="trustRow">
            <span><ShieldCheck size={16} /> Quality Assured</span>
            <span><Star size={16} /> Affordable Pricing</span>
            <span><Truck size={16} /> Fast & Reliable</span>
          </div>
        </div>
      </section>

      <section className="section" id="products">
        <p className="sectionLabel">Our Categories</p>
        <h2>Wide Range of Surgical & Medical Products</h2>

        <div className="categoryGrid">
          {categories.map((item) => {
            const Icon = item.icon;
            return (
              <div className="categoryCard" key={item.title}>
                <div className="productIcon"><Icon size={48} /></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section soft">
        <p className="sectionLabel">Why Choose Vrishti Surgicals Pvt.Ltd.
        </p>
        <h2>Our Commitment to Quality & Care</h2>

        <div className="chooseGrid">
          {choose.map((item) => {
            const Icon = item.icon;
            return (
              <div className="chooseCard" key={item.title}>
                <Icon size={36} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="about" id="about">
        <div className="aboutText">
          <p className="sectionLabel">About Us</p>
          <h2>Your Trusted Partner in Healthcare Supplies</h2>
          <p>
            Vrishti Surgicals Pvt.Ltd. is a reliable supplier of high-quality surgical
            and medical products. We are committed to providing safe, effective
            and affordable healthcare essentials to hospitals, clinics,
            pharmacies, laboratories and home care patients.
          </p>

          <ul>
            <li>Wide range of quality surgical products</li>
            <li>Competitive prices and transparent deals</li>
            <li>Customer-focused approach</li>
            <li>Timely delivery across the region</li>
          </ul>

          <a href="#contact" className="primaryBtn">
            Know More About Us <ArrowRight size={18} />
          </a>
        </div>

        <div className="aboutImage">
        

          <div className="statsBox">
            <div><strong>500+</strong><span>Products</span></div>
            <div><strong>100+</strong><span>Happy Clients</span></div>
            <div><strong>5+</strong><span>Years of Service</span></div>
            <div><strong>24/7</strong><span>Support</span></div>
          </div>
        </div>
      </section>

      <section className="section directorsSection">
  <p className="sectionLabel">Leadership Team</p>
  <h2>Meet The Directors</h2>

  <div className="directorsGrid">

    <div className="directorCard">
      <img
        src="/vrishtiMD.jpeg"
        alt="Manoharan P.R"
        className="directorImage"
      />

      <div className="directorContent">
        <h3>P.R Manoharan</h3>
        <span>Managing Director</span>

        <p>
          Leading Vrishti Surgicals with a commitment to quality healthcare
          products, customer satisfaction and trusted service.
        </p>
      </div>
    </div>

    <div className="directorCard">
      <img
        src="/vrishtiDrctr.jpeg"
        alt="Rethika Manoharan"
        className="directorImage"
      />

      <div className="directorContent">
        <h3>Rethika Manoharan</h3>
        <span>Director</span>

        <p>
          Dedicated to strengthening healthcare accessibility through reliable
          medical supplies, innovation and operational excellence.
        </p>
      </div>
    </div>

  </div>
</section>

      <section className="section">
        <p className="sectionLabel">Featured Products</p>
        <h2>Some of Our Popular Products</h2>

        <div className="productGrid">
          {products.map((item) => {
            const Icon = item.icon;
            return (
              <div className="productCard" key={item.title}>
                <Icon size={58} />
                <h3>{item.title}</h3>
                <p>Available for enquiry</p>
              </div>
            );
          })}
        </div>

        <a href="#contact" className="centerBtn">View All Products</a>
      </section>

      <section className="section soft" id="serve">
        <p className="sectionLabel">Who We Serve</p>
        <h2>Serving a <span>Wide Range</span> of Healthcare Needs</h2>

        <div className="serveGrid">
          {serve.map((item) => {
            const Icon = item.icon;
            return (
              <div className="serveCard" key={item.title}>
                <Icon size={42} />
                <h3>{item.title}</h3>
              </div>
            );
          })}
        </div>
      </section>

    

      <section className="cta">
        <div>
          <h2>Looking for Reliable Surgical Supplies?</h2>
          <p>We are here to serve your healthcare needs with quality and care.</p>
        </div>

        <div className="ctaBtns">
          <a href="#contact" className="whiteBtn">Contact Us</a>
          <a href={`https://wa.me/${PHONE}`} className="greenBtn" target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            WhatsApp Now
          </a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactInfo">
          <p className="sectionLabel">Contact Us</p>
          <h2>We're Here to Help You</h2>

          <div className="infoItem">
            <Phone />
            <div><strong>Phone</strong><p>{DISPLAY_PHONE}</p></div>
          </div>

          <div className="infoItem">
            <Mail />
            <div><strong>Email</strong><p>{EMAIL}</p></div>
          </div>

          <div className="infoItem">
            <MapPin />
            <div><strong>Address</strong><p>{ADDRESS}</p></div>
          </div>

          <div className="infoItem">
            <Clock />
            <div>
              <strong>Working Hours</strong>
              <p>Mon - Sat: 9:00 AM - 6:30 PM</p>
            </div>
          </div>
        </div>

        <form className="contactForm" onSubmit={handleWhatsAppSubmit}>
  <div className="formRow">
    <input name="name" type="text" placeholder="Your Name" required />
    <input name="phone" type="text" placeholder="Phone Number" required />
  </div>

  <input
    name="requirement"
    type="text"
    placeholder="Your Requirement"
    required
  />

  <textarea name="message" placeholder="Message"></textarea>

  <button type="submit">
    Send on WhatsApp <ArrowRight size={18} />
  </button>
</form>

        <div className="mapBox realMap">
  <iframe
    title="Vrishti Surgicals Pvt. Ltd."
    src="https://maps.google.com/maps?q=12.0680642,75.2952021&z=17&output=embed"
    loading="lazy"
    allowFullScreen
  ></iframe>
</div>
      </section>

      <footer>
        <div className="footerGrid">
          <div>
            <div className="logo footerLogo">
              <img src="/logo.png" alt="Vrishti Surgicals" className="footerLogoImg" />
            </div>
            <p>Your trusted partner for quality surgical and medical supplies. Committed to care, quality and trust.</p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#about">About Us</a>
            <a href="#serve">Who We Serve</a>
            <a href="#contact">Contact Us</a>
          </div>

          <div>
            <h3>Our Categories</h3>
            <a>Mobility & Patient Care</a>
            <a>Respiratory Care</a>
            <a>Wound Care & Dressings</a>
            <a>Diagnostic Devices</a>
            <a>First Aid & Emergency Kits</a>
          </div>

          <div>
            <h3>Contact Info</h3>
            <p>{DISPLAY_PHONE}</p>
            <p>{EMAIL}</p>
            <p>{ADDRESS}</p>
          </div>
        </div>

        <div className="copyright">
          © 2018 Vrishti Surgicals Pvt.Ltd. All Rights Reserved.
        </div>
      </footer>

      <a href={`tel:${PHONE}`} className="floatingCall"><Phone /></a>

      <a href={`https://wa.me/${PHONE}`} className="floatingWhatsapp" target="_blank" rel="noreferrer">
        <MessageCircle />
      </a>
    </main>
  );
}

export default App;