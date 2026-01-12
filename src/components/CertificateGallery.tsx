import { createPortal } from "react-dom";
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
        className="flex overflow-x-auto space-x-4 pb-4 no-scrollbar scroll-smooth w-full px-4"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 cursor-pointer hover:scale-105 transition-transform duration-300 group relative scroll-snap-align-start select-none"
            onClick={() => openModal(cert)}
          >
            <div className="relative w-full h-48 rounded-xl overflow-hidden border border-border bg-muted/50">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <Camera className="text-white drop-shadow-md" size={32} />
              </div>
            </div>
            <p className="mt-3 text-sm font-medium text-muted-foreground text-center line-clamp-2">
              {cert.title}
            </p>
          </div>
        ))}
      </div>

      {/* Modal for selected certificate */}
      {selectedCertificate &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={closeModal}
          >
            <div
              className="bg-card border border-border text-card-foreground rounded-xl max-w-3xl w-full relative shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
                <h2 className="text-lg font-semibold truncate pr-4">
                  {selectedCertificate.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Close gallery"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto flex-1 flex flex-col items-center bg-black/5 dark:bg-black/20">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="max-w-full max-h-[60vh] object-contain rounded-md shadow-lg border border-border/50"
                />

                <div className="mt-6 text-center w-full max-w-lg">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex flex-col items-center p-3 rounded-lg bg-background border border-border">
                      <span className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
                        Issuer
                      </span>
                      <span className="font-medium">
                        {selectedCertificate.issuer}
                      </span>
                    </div>
                    {selectedCertificate.category && (
                      <div className="flex flex-col items-center p-3 rounded-lg bg-background border border-border">
                        <span className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
                          Category
                        </span>
                        <span className="font-medium">
                          {selectedCertificate.category}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
