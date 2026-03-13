export function Partners() {
  const partners = [
    { name: "Philippine Heart Association", category: "Medical" },
    { name: "Manila Health Department", category: "Government" },
    { name: "Barangay Health Workers Alliance", category: "Community" },
    { name: "Filipino Medical Association", category: "Medical" },
    { name: "Asian Development Foundation", category: "Nonprofit" },
    { name: "Philippine Red Cross", category: "Healthcare" },
    { name: "Community Health Coalition", category: "Community" },
    { name: "Healthy Hearts Philippines", category: "Medical" },
  ];

  return (
    <section id="partners" className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm tracking-widest uppercase text-red-600 mb-4">Collaboration</p>
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-gray-900">
            Our Partners
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Together, we're stronger. We collaborate with leading organizations to maximize our impact.
          </p>
        </div>

        {/* Partnership Impact Section */}
        <div className="relative mb-20 rounded-lg overflow-hidden bg-gray-900 text-white">
          <div className="relative z-10 p-12 md:p-16 max-w-3xl">
            {/* Filipino flag accent */}
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-red-600 to-yellow-400 mb-8"></div>
            <h3 className="text-3xl md:text-4xl mb-6">
              Collaboration for Community Health
            </h3>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Our partnerships enable us to extend our reach, share resources, and deliver
              comprehensive healthcare solutions to communities across the Philippines. Together,
              we're building a network of care that spans the entire archipelago.
            </p>
            <button className="bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 transition-all duration-300">
              Become a Partner
            </button>
          </div>
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center group"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center group-hover:bg-red-50 transition-colors duration-300">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h4 className="mb-2 text-gray-900">{partner.name}</h4>
              <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-md">
                {partner.category}
              </span>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white p-12 rounded-lg border border-gray-100">
          <p className="text-lg text-gray-600 mb-6">
            Interested in partnering with us to make a difference in Filipino communities?
          </p>
          <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-md hover:bg-gray-900 hover:text-white transition-all duration-300">
            Contact Our Partnership Team
          </button>
        </div>
      </div>
    </section>
  );
}