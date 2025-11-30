export default function Footer() {
  return (
    <footer className="bg-black text-white py-14 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Logo */}
          <h2 className="text-2xl font-semibold">StayHaven</h2>

          {/* Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-gray-300 text-sm">
            {/* Column 1 */}
            <div>
              <h3 className="text-white font-semibold mb-4">Our Stay</h3>
              <ul className="space-y-2">
                <li>The Apartment</li>
                <li>Amenities</li>
                <li>Pricing</li>
                <li>Availability</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-white font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                <li>Concierge</li>
                <li>Cleaning Services</li>
                <li>Local Guides</li>
                <li>Long-Term Stays</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>Blog</li>
                <li>Help Center</li>
                <li>FAQ</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Contacts</li>
                <li>Press</li>
              </ul>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-5 text-gray-300 text-lg">
            <i className="bx bxl-facebook"></i>
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-pinterest"></i>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          © 2025 StayHaven. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
