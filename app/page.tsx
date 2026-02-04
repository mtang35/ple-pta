import Image from "next/image";

export default function Home() {
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
          </div>
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
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-12 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
                  <p className="text-gray-600 font-semibold">Community Powered</p>
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
