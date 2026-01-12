import { Camera, X } from "lucide-react";
import { certificates, CertificateItem } from "../data/certificateConfig";

interface CertificateGalleryProps {
  selectedCertificate: CertificateItem | null;
  setSelectedCertificate: React.Dispatch<
    React.SetStateAction<CertificateItem | null>
  >;
}

export default function CertificateGallery({
  selectedCertificate,
  setSelectedCertificate,
}: CertificateGalleryProps) {
  // Function to open modal and set selected certificate
  const openModal = (certificate: CertificateItem) => {
    setSelectedCertificate(certificate);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="relative flex mt-10 justify-center items-center">
      <div
        className="flex overflow-x-auto space-x-4 pb-4 no-scrollbar scroll-smooth"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 cursor-pointer hover:scale-105 transition-transform duration-300 group relative scroll-snap-align-start"
            onClick={() => openModal(cert)}
          >
            <div className="relative w-full h-48">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                <Camera
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  size={48}
                />
              </div>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700 text-center">
              {cert.title}
            </p>
          </div>
        ))}
      </div>

      {/* Modal for selected certificate */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <X size={24} />
            </button>
            <div className="p-6">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <h2 className="text-xl font-bold text-gray-800">
                  {selectedCertificate.title}
                </h2>
                <p className="text-gray-600 mt-2">
                  Issued by: {selectedCertificate.issuer}
                </p>
                {selectedCertificate.category && (
                  <p className="text-gray-500 text-sm mt-1">
                    Category: {selectedCertificate.category}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
