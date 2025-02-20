import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const Footer = () => {
  const socialIcons = [
    { name: "Instagram", icon: FaInstagram },
    { name: "TikTok", icon: FaTiktok },
    { name: "Facebook", icon: FaFacebookF },
    { name: "Twitter", icon: FaTwitter },
  ];

  const footerLinks = {
    "ABOUT US": ["Our Company", "Our Team"],
    PRODUCTS: ["Buy", "Short Lets", "Invest"],
    PARTNERS: [
      "Join as a Property Developer",
      "Join as a Lender",
      "Join as an Agent",
      "Sell Your House",
    ],
    RESOURCES: ["Tutorials", "Watch the Demo", "Blog"],
    "CONTACT US": [
      "info@gidaa.com",
      "WhatsApp",
      "Book a Meeting",
      "+234 809 762 1791",
    ],
    "SITE NAVIGATION": ["Home", "Properties", "Developers", "Sell Your House"],
  };

  return (
    <footer className="bg-primary text-white py-16 px-4 md:px-8">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Join Our Newsletter</h3>
            <p className="text-sm text-gray-200">
              Stay up to date with news and updates by subscribing to our
              newsletter
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-md w-full md:w-80 text-gray-800 form-input"
            />
            <button className="bg-white text-primary px-6 py-2 rounded-full font-bold whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-semibold mb-4">{title}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-200 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 mb-8">
        <div className="flex gap-4">
          {socialIcons.map((social) => (
            <a
              key={social.name}
              href="#"
              className="bg-white text-primary p-2 rounded-full"
              aria-label={social.name}
            >
              <social.icon />
            </a>
          ))}
        </div>
        <button className="flex items-center justify-between gap-3 bg-white text-primary px-6 py-2 rounded-full">
          <FaWhatsapp size={22} />
          <span>Join Our Community</span>
          <BsFillArrowUpRightCircleFill size={22} />
        </button>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">PROPERTY OF GIDAA INC.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-200 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-200 hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
