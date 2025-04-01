import Image from 'next/image';
import { useState } from 'react';
import { FiZoomIn, FiX } from 'react-icons/fi';

// Import your certificate images
import certifcate1 from '../../assets/Certificates/Certificate_of_black_belt_Programming-hero.png';
import certifcate2 from '../../assets/Certificates/Screenshot (518).png';
import certifcate3 from '../../assets/Certificates/Screenshot (582).png';
import certifcate4 from '../../assets/Certificates/Screenshot (583).png';
import certifcate6 from '../../assets/Certificates/IMG-20250401-WA0018.jpg';
import certifcate7 from '../../assets/Certificates/IMG-20250401-WA0019.jpg';
import certifcate8 from '../../assets/Certificates/IMG-20250401-WA0020.jpg';
import certifcate9 from '../../assets/Certificates/IMG-20250401-WA0021.jpg';
import certifcate10 from '../../assets/Certificates/IMG-20250401-WA0022.jpg';
import certifcate11 from '../../assets/Certificates/IMG-20250401-WA0023.jpg';
import certifcate12 from '../../assets/Certificates/IMG-20250401-WA0024.jpg';
import certifcate13 from '../../assets/Certificates/IMG-20250401-WA0025.jpg';
import certifcate14 from '../../assets/Certificates/IMG-20250401-WA0026.jpg';
import certifcate15 from '../../assets/Certificates/IMG-20250401-WA0027.jpg';
import certifcate16 from '../../assets/Certificates/IMG-20250401-WA0029.jpg';

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>('');

  const certificates = [
    { src: certifcate1, alt: 'Programming Hero Black Belt Certificate' },
    { src: certifcate2, alt: 'Web Development Certificate' },
    { src: certifcate3, alt: 'JavaScript Certification' },
    { src: certifcate4, alt: 'React Certification' },
    { src: certifcate6, alt: 'Advanced Programming Certificate' },
    { src: certifcate7, alt: 'Database Design Certificate' },
    { src: certifcate8, alt: 'Cloud Computing Certificate' },
    { src: certifcate9, alt: 'DevOps Certification' },
    { src: certifcate10, alt: 'Security Fundamentals Certificate' },
    { src: certifcate11, alt: 'UI/UX Design Certificate' },
    { src: certifcate12, alt: 'Mobile Development Certificate' },
    { src: certifcate13, alt: 'Data Structures Certificate' },
    { src: certifcate14, alt: 'Algorithms Certification' },
    { src: certifcate15, alt: 'System Design Certificate' },
    { src: certifcate16, alt: 'Leadership in Tech Certificate' },
  ];

  const openImage = (src: string, alt: string) => {
    setSelectedImage(src);
    setSelectedAlt(alt);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-12 px-4 max-w-screen-xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">My Certificates</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Professional certifications and achievements that demonstrate my expertise and commitment to continuous learning.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {certificates.map((cert, index) => (
          <div 
            key={index} 
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-800"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src={cert.src}
                alt={cert.alt}
                width={400}
                height={300}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                placeholder="blur"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <button
                onClick={() => openImage(cert.src.src, cert.alt)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
                aria-label="Zoom in"
              >
                <FiZoomIn size={24} />
              </button>
              <p className="text-white text-sm font-medium">{cert.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <button
            onClick={closeImage}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            aria-label="Close modal"
          >
            <FiX size={32} />
          </button>
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <Image
              src={selectedImage}
              alt={selectedAlt}
              width={1200}
              height={900}
              className="object-contain w-full h-full"
            />
            <p className="text-white text-center mt-4">{selectedAlt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;