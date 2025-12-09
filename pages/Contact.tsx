import React, { useState } from "react";
import Button from "../components/Button";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Store,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Clock,
  Send,
  Map,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { Link } from "react-router-dom";

// ------------------------------------------------------------------
// SOCIAL LINK COMPONENT
// ------------------------------------------------------------------
const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center hover:bg-accent hover:text-white transition-all"
  >
    {icon}
  </a>
);

// ------------------------------------------------------------------
// MAIN CONTACT PAGE
// ------------------------------------------------------------------
const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `New Message from ${formState.name}`;
    const body = `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
    const mailtoLink = `mailto:mobanja@icloud.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <div className="pt-32 pb-20 animate-fade-in min-h-screen bg-bg">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* ----------------------------------------------------------- */}
        {/* HERO HEADER */}
        {/* ----------------------------------------------------------- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6 border border-accent/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span>Support Team Online</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold text-primary mb-6 tracking-tight">
            We're here to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">
              help you.
            </span>
          </h1>

          <p className="text-xl text-text-medium leading-relaxed">
            Have questions about an iPhone plan? Need help with verification?
            Our Kampala-based team is ready to assist.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          {/* ----------------------------------------------------------- */}
          {/* LEFT SIDE: CONTACT CHANNELS */}
          {/* ----------------------------------------------------------- */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Contact Channels
            </h3>

            {/* --- WhatsApp Box --- */}
            <a
              href="https://wa.me/256709477930"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm group-hover:shadow-lg group-hover:border-accent/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <WhatsAppIcon className="w-24 h-24 text-[#25D366]" />
                </div>

                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-xl flex items-center justify-center">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="font-bold text-primary text-lg">
                      Chat on WhatsApp
                    </h4>
                    <p className="text-text-medium text-sm mb-3">
                      Fastest response. Best for applications.
                    </p>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold">
                      <Clock size={12} />
                      <span>Avg. reply 2 mins</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* ---- Phone + Email Grid ---- */}
            <div className="grid sm:grid-cols-2 gap-6">
              <a href="tel:+256709477930" className="block group">
                <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Phone size={20} />
                  </div>
                  <h4 className="font-bold text-primary">Call Us</h4>
                  <p className="text-text-medium text-sm mt-1">
                    +256 709 477 930
                  </p>
                  <p className="text-xs text-text-medium mt-2 opacity-70">
                    Mon-Sat, 9am-6pm
                  </p>
                </div>
              </a>

              <a href="mailto:mobanja@icloud.com" className="block group">
                <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Mail size={20} />
                  </div>
                  <h4 className="font-bold text-primary">Email Us</h4>
                  <p className="text-text-medium text-sm mt-1">
                    mobanja@icloud.com
                  </p>
                  <p className="text-xs text-text-medium mt-2 opacity-70">
                    Replies in 24h
                  </p>
                </div>
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              <SocialLink
                href="https://wa.me/256709477930"
                icon={<WhatsAppIcon className="w-5 h-5" />}
              />
              <SocialLink
                href="https://www.instagram.com/mobanja_iphones_uganda/"
                icon={<Instagram className="w-5 h-5" />}
              />
              <SocialLink
                href="https://www.tiktok.com/@mobanjaiphoness?lang=en"
                icon={<FaTiktok className="w-5 h-5" />}
              />
              <SocialLink
                href="https://www.facebook.com/profile.php?id=61583863782741"
                icon={<Facebook className="w-5 h-5" />}
              />
            </div>
          </div>

          {/* ----------------------------------------------------------- */}
          {/* RIGHT SIDE: SEND MESSAGE FORM */}
          {/* ----------------------------------------------------------- */}
          <div className="lg:col-span-7">
            <div className="bg-surface p-8 md:p-10 rounded-[2rem] border border-border shadow-lg relative overflow-hidden">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Send us a message
              </h3>
              <p className="text-text-medium mb-8">
                Prefer email? Fill out the form and we’ll reach back.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text-dark">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-border"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text-dark">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-border"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-text-dark">
                    How can we help?
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="I'm interested in the iPhone 15 Pro..."
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-border resize-none"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className={`w-full transition-all duration-300 ${
                    isSent ? "bg-green-500" : ""
                  }`}
                  icon={
                    isSent ? (
                      <CheckCircle size={20} />
                    ) : (
                      <Send size={20} />
                    )
                  }
                  disabled={isSent}
                >
                  {isSent ? "Opening Email Client..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------- */}
        {/* LOCATION SECTION */}
        {/* ----------------------------------------------------------- */}
        <div className="mb-24">
          <div className="grid md:grid-cols-12 gap-0 rounded-[2rem] overflow-hidden border border-border shadow-lg">
            {/* LEFT SIDE */}
            <div className="md:col-span-4 bg-surface p-8 md:p-12">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>

              <h3 className="text-2xl font-bold text-primary mb-2">
                Visit our Shop
              </h3>

              <p className="text-text-medium mb-8">
                Come test the devices in person. Friendly staff, trusted
                service.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm font-bold opacity-70">Address</p>
                  <p className="text-lg font-medium">New Pioneer Mall</p>
                  <p className="text-text-medium">Shop PI 62, Kampala</p>
                </div>

                <div>
                  <p className="text-sm font-bold opacity-70">Opening Hours</p>
                  <p className="text-text-medium">Mon - Sat: 9am - 6pm</p>
                  <p className="text-text-medium">Sun: Closed</p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/@0.3139508,32.5781254,1732m/data=!3m1!1e3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" icon={<Map size={16} />}>
                  Get Directions
                </Button>
              </a>
            </div>

            {/* RIGHT — STATIC IMAGE MAP */}
            <div className="md:col-span-8 relative min-h-[300px] bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=1200"
                alt="Map Location"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/10 pointer-events-none" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-accent text-white px-4 py-2 rounded-lg shadow-lg font-bold animate-bounce">
                  Mobanja Shop
                </div>
                <div className="w-4 h-4 bg-accent rotate-45"></div>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------- */}
        {/* SHOP OWNER PARTNERSHIP SECTION */}
        {/* ----------------------------------------------------------- */}
        <div
          id="partner"
          className="relative rounded-[2.5rem] overflow-hidden bg-[#0F172A] text-white shadow-2xl"
        >
          <div className="relative z-10 p-8 md:p-16 grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                <Store className="w-4 h-4 text-accent" />
                <span className="text-sm font-bold">B2B Partnership</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Own a phone shop?
                <br />
                <span className="text-accent">Partner with us.</span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                Join Uganda's fastest-growing financing network. You provide the
                stock — we bring the customers and handle the credit risk.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Instant 100% payment for every device",
                  "Zero credit risk — we handle collections",
                  "Access to 5,000+ pre-approved customers",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/256709477930?text=I%20am%20a%20shop%20owner%20interested%20in%20partnering"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-14 px-8 text-white border-white/20"
                    icon={<ArrowRight />}
                  >
                    Register Shop
                  </Button>
                </a>

                <Link to="/shop-owners">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto"
                  >
                    How It Works
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative hidden md:block">
              <img
                src="showOwner.png"
                className="relative rounded-2xl shadow-2xl border border-white/10 h-full w-full object-cover transform hover:rotate-0 transition-all duration-500 rotate-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
