export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h4 className="text-xl mb-4">Healing Filipino Hearts</h4>
            <p className="text-sm opacity-80 leading-relaxed">
              Dedicated to providing accessible healthcare and building healthier communities across the Philippines.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#events" className="opacity-80 hover:opacity-100 transition-opacity">Our Events</a></li>
              <li><a href="#partners" className="opacity-80 hover:opacity-100 transition-opacity">Partners</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Volunteer</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Donate</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Become a Partner</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Upcoming Events</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>123 Bonifacio Street</li>
              <li>Manila, Metro Manila 1000</li>
              <li className="pt-2">+63 (2) 8123-4567</li>
              <li>info@healingfilipinohearts.org</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-sm opacity-80">
              © 2026 Healing Filipino Hearts. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Terms of Service</a>
            </div>
          </div>
          {/* Filipino flag accent */}
          <div className="w-full h-1 bg-gradient-to-r from-blue-600 via-red-600 to-yellow-400 rounded-full"></div>
        </div>
      </div>
    </footer>
  );
}