import React from 'react'
import { FaTwitter, FaEnvelope, FaInstagram, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const Fotter = () => {
  return (
    <>
      <footer className="bg-[#0c0c0c] text-white px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

          {/* Brand Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-white">Cloudio</h2>
            <h6 className="text-xl font-sans  text-white">-Inayat Ullah Khan</h6>
            <p className="text-gray-400">Empowering developers with tools and knowledge to build the future.</p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-gray-300 font-semibold mb-2">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/">Careers</a></li>
              <li><a href="/">Team</a></li>
              <li><a href="/">Terms of Service</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Cookie Notice</a></li>
              <li><a href="/">Cookie Preferences</a></li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-gray-300 font-semibold mb-2">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/">Help</a></li>
              <li><a href="/">Change log</a></li>
              <li><a href="/">Pricing</a></li>
              <li><a href="/">Templates</a></li>
              <li><a href="/">Inspiration</a></li>
              <li><a href="/">Insights</a></li>
              <li><a href="/">Contact us</a></li>
            </ul>
          </div>

          {/* Follow Us Links */}
          <div>
            <h3 className="text-gray-300 font-semibold mb-2">Follow Us</h3>
            <ul className="space-y-2 text-gray-400">
  <li>
    <a href="link" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
      <FaTwitter /> Twitter
    </a>
  </li>
  <li>
    <a href="link" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
      <FaInstagram /> Instagram
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/inayat-ullah-khan-49863124b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
      <FaLinkedin /> LinkedIn
    </a>
  </li>
  <li>
    <a href="https://github.com/InayatUllahKhan10" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
      <FaGithub /> GitHub
    </a>
  </li>
  <li>
    <a href="mailto:inayatullahkhan0212@gmail.com" className="flex items-center gap-2">
      <FaEnvelope /> Gmail
    </a>
  </li>
</ul>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>© 2025 Cloudio. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <FaGlobe />
            <span>English</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Fotter
