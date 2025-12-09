import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa6";
import WhatsAppIcon from "./WhatsAppIcon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

          {/* BRAND COLUMN */}
          <div className="md:col-span-4 space-y-8">
            <Link to="/" className="inline-block">
              <div className="bg-white rounded-xl p-2 inline-block">
                <img
                  src="/mobanja-logo.png"
                  alt="Mobanja"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed max-w-xs">
              Empowering Ugandans with accessible technology financing.
              Authentic devices, transparent terms, zero stress.
            </p>

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
                icon={<FaTiktok className="w-5 h-5" />
}
              />
              <SocialLink
                href="https://www.facebook.com/profile.php?id=61583863782741"
                icon={<Facebook className="w-5 h-5" />}
              />
            </div>
          </div>

          {/* LINKS SECTIONS */}
          <FooterColumn title="Shop">
            <FooterLink to="/phones" label="All iPhones" />
            <FooterLink to="/phones" label="New Arrivals" />
            <FooterLink to="/how-it-works" label="How It Works" />
          </FooterColumn>

          <FooterColumn title="Company">
            <FooterLink to="/about" label="About Us" />
            <FooterLink to="/shop-owners" label="Partners" />
            <FooterLink to="/contact" label="Contact" />
          </FooterColumn>

          <FooterColumn title="Support">
            <FooterLink to="/faq" label="FAQs" />
            <FooterLink to="/terms" label="Terms of Service" />
            <FooterLink to="/privacy" label="Privacy Policy" />
          </FooterColumn>

          {/* CONTACT INFO */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <Mail size={16} />
                <span>mobanja@icloud.com</span>
              </li>

              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <Phone size={16} />
                <span>+256 709 477 930</span>
              </li>

              <li className="text-sm pt-4 text-gray-500 leading-relaxed">
                New Pioneer Mall,<br />
                Shop PI 62,<br />
                Kampala, Uganda
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 Mobanja Uganda. All rights reserved.</p>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* -------------------------------------------------------------------------- */
/*                               SMALL COMPONENTS                             */
/* -------------------------------------------------------------------------- */

const FooterColumn = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="md:col-span-2">
    <h4 className="font-bold text-lg mb-6 text-white">{title}</h4>
    <ul className="space-y-4">{children}</ul>
  </div>
);

const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <li>
    <Link
      to={to}
      className="text-gray-400 hover:text-white transition-colors"
    >
      {label}
    </Link>
  </li>
);

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
    rel="noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center 
               hover:bg-white hover:text-black transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;
