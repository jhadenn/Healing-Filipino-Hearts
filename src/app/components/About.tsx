import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-widest uppercase text-red-600 mb-4">Our Mission</p>
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-gray-900">
            Designed to Help
            <br />
            Communities Thrive
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Our mission is to provide accessible healthcare and support to Filipino communities,
            building healthier futures one heart at a time.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-10 rounded-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-600 rounded-lg mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl mb-4 text-gray-900">Community Outreach</h3>
            <p className="text-gray-600 leading-relaxed">
              Bringing healthcare directly to underserved communities through mobile clinics and community programs.
            </p>
          </div>

          <div className="bg-white p-10 rounded-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-red-600 rounded-lg mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl mb-4 text-gray-900">Health Education</h3>
            <p className="text-gray-600 leading-relaxed">
              Empowering individuals with knowledge about preventive care, nutrition, and healthy living practices.
            </p>
          </div>

          <div className="bg-white p-10 rounded-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl mb-4 text-gray-900">Compassionate Care</h3>
            <p className="text-gray-600 leading-relaxed">
              Providing emotional and mental health support to individuals and families facing health challenges.
            </p>
          </div>
        </div>

        {/* Image and Stats */}
        <div className="grid md:grid-cols-2 gap-16 items-center bg-white p-12 md:p-16 rounded-lg border border-gray-100">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1757125736482-328a3cdd9743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGaWxpcGlubyUyMGhlYWx0aGNhcmUlMjB2b2x1bnRlZXJ8ZW58MXx8fHwxNzczNDMzMzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Healthcare volunteers"
              className="w-full h-full object-cover"
            />
            {/* Filipino flag color accent */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-red-600 to-yellow-400"></div>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl mb-6 text-gray-900">
              Building a Healthier Community
            </h3>
            <p className="text-lg mb-10 text-gray-600 leading-relaxed">
              Since our founding, we've been dedicated to making quality healthcare accessible to all.
              Our volunteer-driven programs have touched thousands of lives across the archipelago.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-2 border-blue-600 pl-4">
                <div className="text-4xl mb-2 text-gray-900">5,000+</div>
                <div className="text-gray-600">Patients Served</div>
              </div>
              <div className="border-l-2 border-red-600 pl-4">
                <div className="text-4xl mb-2 text-gray-900">50+</div>
                <div className="text-gray-600">Communities Reached</div>
              </div>
              <div className="border-l-2 border-yellow-500 pl-4">
                <div className="text-4xl mb-2 text-gray-900">200+</div>
                <div className="text-gray-600">Volunteers</div>
              </div>
              <div className="border-l-2 border-blue-600 pl-4">
                <div className="text-4xl mb-2 text-gray-900">15</div>
                <div className="text-gray-600">Partner Organizations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}