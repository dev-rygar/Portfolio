import React, { useState, useRef } from "react";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { certificates, CertificateItem } from "../certificateConfig";

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
  const galleryRef = useRef<HTMLDivElement>(null);

  const openModal = (certificate: CertificateItem) => {
    setSelectedCertificate(certificate);
  };

  const scroll = (direction: "left" | "right") => {
    if (galleryRef.current) {
      const { current } = galleryRef;
      const scrollAmount = current.clientWidth; // Scroll by the width of the gallery

      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative flex mt-10 justify-center items-center">
      <div
        ref={galleryRef}
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
    </div>
  );
}
