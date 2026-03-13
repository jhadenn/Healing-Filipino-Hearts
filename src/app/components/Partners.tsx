import { motion } from 'motion/react';

export function Partners() {
  const partners = [
    {
      name: 'Casa Manila',
      src: '/Casa-Manila.png',
      scale: 'scale-[1.45]',
    },
    {
      name: 'Operation Heart',
      src: '/operation-heart.webp',
      scale: 'scale-[1.08]',
    },
    {
      name: 'Scarborough Cardiac',
      src: '/scarb-cardiac.png',
      scale: 'scale-[1.18]',
    },
    {
      name: 'Scarborough on Seniors',
      src: '/scarb-on-seniors.png',
      scale: 'scale-[1.4]',
    },
  ];
  const marqueePartners = [...partners, ...partners];

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

        {/* Logo Carousel - Full Width */}
      <div className="relative mb-20 left-1/2 w-screen -translate-x-1/2 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-neutral-50 via-neutral-50/80 to-transparent pointer-events-none md:w-40" />
        <div className="absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-neutral-50 via-neutral-50/80 to-transparent pointer-events-none md:w-40" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="py-6"
        >
          <div className="flex w-max animate-scroll-track items-center gap-12 pr-12 md:gap-16 md:pr-16">
            {marqueePartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                aria-hidden={index >= partners.length}
                className="flex h-32 w-48 shrink-0 items-center justify-center md:h-36 md:w-56"
              >
                <img
                  src={partner.src}
                  alt={index < partners.length ? partner.name : ''}
                  className={`max-h-16 w-auto max-w-full origin-center object-contain opacity-65 transition duration-300 hover:opacity-100 md:max-h-20 ${partner.scale}`}
                />
              </div>
            ))}
          </div>
        </motion.div>
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
              comprehensive healthcare solutions to Filipino and Asian communities across Canada.
            </p>
            <button className="bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 transition-all duration-300">
              Become a Partner
            </button>
          </div>
        </div>

      </div>

      
    </section>
  );
}
