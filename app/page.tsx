"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-700">
                <Image
                  src="/pta-logo.jpeg"
                  alt="Phantom Lake PTA Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-2xl font-bold text-slate-700">Phantom Lake PTA</h1>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="https://phantomlakepta.givebacks.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-slate-700 transition">
                Events & Programs
              </a>
              <a href="https://phantomlakepta.givebacks.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-slate-700 transition">
                Get Involved
              </a>
              <a href="https://phantomlakepta.givebacks.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-slate-700 transition">
                Resources
              </a>
            </div>
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-slate-700 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-slate-700 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-slate-700 transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col gap-4">
                <a href="https://phantomlakepta.givebacks.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-slate-700 transition px-2">
                  Events & Programs
                </a>
                <a href="https://phantomlakepta.givebacks.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-slate-700 transition px-2">
                  Get Involved
                </a>
                <a href="https://phantomlakepta.givebacks.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-slate-700 transition px-2">
                  Resources
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Building Stronger Schools Together
                </h2>
                <p className="text-xl text-gray-600">
                  Join the Phantom Lake PTA community. Supporting student success, family engagement, and school excellence.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
                  <div className="text-2xl font-bold text-slate-700 mb-2">🤝</div>
                  <p className="font-semibold text-gray-900">Join as Member</p>
                  <p className="text-sm text-gray-600">Get involved in our community</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
                  <div className="text-2xl font-bold text-slate-700 mb-2">🔍</div>
                  <p className="font-semibold text-gray-900">Explore Resources</p>
                  <p className="text-sm text-gray-600">Find what you need</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
                  <div className="text-2xl font-bold text-slate-700 mb-2">📅</div>
                  <p className="font-semibold text-gray-900">Events & Programs</p>
                  <p className="text-sm text-gray-600">Stay connected</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
                  <div className="text-2xl font-bold text-slate-700 mb-2">💪</div>
                  <p className="font-semibold text-gray-900">Volunteer</p>
                  <p className="text-sm text-gray-600">Make a difference</p>
                </div>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <a
                  href="https://phantomlakepta.givebacks.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transition shadow-md hover:shadow-lg"
                >
                  Join Us Today
                </a>
                <a
                  href="https://phantomlakepta.givebacks.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-slate-700 font-semibold rounded-lg border-2 border-slate-700 hover:bg-slate-50 transition"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Image/Illustration */}
            <div className="w-full">
              <div className="relative rounded-2xl overflow-hidden h-96 shadow-lg">
                <Image
                  src="/community-hero.jpg"
                  alt="Community Powered - Families and volunteers together"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end justify-center p-8">
                  <p className="text-white font-semibold text-xl">Community Powered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Events</h3>
            <p className="text-gray-600">Join us at our upcoming events and activities</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* PTA Meeting */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 relative rounded-lg overflow-hidden">
                  <Image
                    src="/pta-event-icon.jpg"
                    alt="PTA Meeting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">PTA Meeting</h4>
                  <p className="text-sm text-gray-600 mb-4">Join us for our monthly PTA meeting to discuss upcoming initiatives and school updates.</p>
                  <a
                    href="https://phantomlakepta.givebacks.com/w/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            {/* Mod Pizza Fundraiser */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 relative rounded-lg overflow-hidden">
                  <Image
                    src="/mod-event-icon.jpg"
                    alt="Mod Pizza Fundraiser"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Mod Pizza Fundraiser</h4>
                  <p className="text-sm text-gray-600 mb-4">Support our school while enjoying delicious pizza! A portion of proceeds goes to PTA.</p>
                  <a
                    href="https://phantomlakepta.givebacks.com/w/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            {/* STEM Night */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 relative rounded-lg overflow-hidden">
                  <Image
                    src="/steam-event-icon.jpg"
                    alt="STEM Night"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">STEM Night</h4>
                  <p className="text-sm text-gray-600 mb-4">Explore science, technology, engineering, and math through hands-on activities and experiments.</p>
                  <a
                    href="https://phantomlakepta.givebacks.com/w/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quick Links</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <a
              href="https://phantomlakepta.givebacks.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border-2 border-gray-200 rounded-lg hover:border-slate-700 hover:shadow-lg transition text-center"
            >
              <p className="text-4xl mb-3">📅</p>
              <h4 className="font-semibold text-gray-900 mb-2">Events & Programs</h4>
              <p className="text-sm text-gray-600">View upcoming activities</p>
            </a>
            <a
              href="https://phantomlakepta.givebacks.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border-2 border-gray-200 rounded-lg hover:border-slate-700 hover:shadow-lg transition text-center"
            >
              <p className="text-4xl mb-3">👥</p>
              <h4 className="font-semibold text-gray-900 mb-2">Membership</h4>
              <p className="text-sm text-gray-600">Become a member today</p>
            </a>
            <a
              href="https://phantomlakepta.givebacks.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border-2 border-gray-200 rounded-lg hover:border-slate-700 hover:shadow-lg transition text-center"
            >
              <p className="text-4xl mb-3">🙋</p>
              <h4 className="font-semibold text-gray-900 mb-2">Volunteer</h4>
              <p className="text-sm text-gray-600">Get involved and help</p>
            </a>
            <a
              href="https://phantomlakepta.givebacks.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border-2 border-gray-200 rounded-lg hover:border-slate-700 hover:shadow-lg transition text-center"
            >
              <p className="text-4xl mb-3">🏪</p>
              <h4 className="font-semibold text-gray-900 mb-2">Shop</h4>
              <p className="text-sm text-gray-600">Browse our store</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="text-white font-semibold mb-4">Phantom Lake PTA</h5>
              <p className="text-sm">Building stronger schools and communities together.</p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://phantomlakepta.givebacks.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    Main Site
                  </a>
                </li>
                <li>
                  <a href="https://phantomlakepta.givebacks.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://support.givebacks.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="https://www.givebacks.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    Privacy & Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Phantom Lake PTA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
