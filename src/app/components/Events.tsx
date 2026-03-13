import { ImageWithFallback } from './figma/ImageWithFallback';

export function Events() {
  const events = [
    {
      title: "Community Health Fair",
      date: "March 20, 2026",
      location: "Manila City Hall",
      description: "Free health screenings, consultations, and wellness workshops for the entire community.",
      image: "https://images.unsplash.com/photo-1767990375778-feed20362a62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGaWxpcGlubyUyMGNvbW11bml0eSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3MzQzMzM1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      type: "Health Fair"
    },
    {
      title: "Heart Health Awareness Month",
      date: "April 1-30, 2026",
      location: "Multiple Locations",
      description: "Educational seminars on cardiovascular health, nutrition, and preventive care throughout the month.",
      image: "https://images.unsplash.com/photo-1629976532461-563f742de47f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGaWxpcGlubyUyMGZhbWlseSUyMGhlYWx0aHxlbnwxfHx8fDE3NzM0MzMzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      type: "Campaign"
    },
    {
      title: "Volunteer Training Workshop",
      date: "April 15, 2026",
      location: "HFH Training Center",
      description: "Join us for a comprehensive training session for new volunteers and community health advocates.",
      image: "https://images.unsplash.com/photo-1757125736482-328a3cdd9743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGaWxpcGlubyUyMGhlYWx0aGNhcmUlMjB2b2x1bnRlZXJ8ZW58MXx8fHwxNzczNDMzMzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      type: "Training"
    }
  ];

  return (
    <section id="events" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm tracking-widest uppercase text-red-600 mb-4">Join Us</p>
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-gray-900">
            Upcoming Events
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Join us in making a difference. Participate in our community health initiatives and events.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-1.5 rounded-md text-sm shadow-md">
                  {event.type}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{event.date}</span>
                </div>
                <h3 className="text-xl mb-2 text-gray-900">{event.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>
                <button className="w-full border-2 border-gray-900 text-gray-900 py-3 rounded-md hover:bg-gray-900 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}