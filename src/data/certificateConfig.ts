import ciitUxDesign from "../assets/certificates/ciit_cert.jpg";
import googleUxFoundation from "../assets/certificates/google_cert_foundation_ux.jpg";
import uxDesignProcesss from "../assets/certificates/google_cert_ux_design_processjpg.jpg";
import metaFrontEnd from "../assets/certificates/meta_cert_intro_frontend.jpg";
import metaBackEnd from "../assets/certificates/meta_cert_intro_backend.jpg";
import zuittFrontend from "../assets/certificates/zuitt_cert_front-end.jpg";
import zuittBackend from "../assets/certificates/zuitt_cert_backend.jpg";
import zuittFullstack from "../assets/certificates/zuitt_cert_fullstack.jpg";
import zuittJava from "../assets/certificates/zuitt_cert_java.jpg";
import zuittSQL from "../assets/certificates/zuitt_cert_sql.jpg";

export interface CertificateItem {
  title: string;
  image: string;
  imageData?: string;
  issuer: string;
  category?: string;
}

export const certificates: CertificateItem[] = [
  {
    title: "UX Design",
    image: ciitUxDesign,
    issuer: "College of Arts and Technology",
    category: "Design",
  },
  {
    title: "Foundation of UX Design",
    image: googleUxFoundation,
    issuer: "Google via Coursera",
    category: "Design",
  },
  {
    title: "UX Design Process",
    image: uxDesignProcesss,
    issuer: "Google via Coursera",
    category: "Design",
  },
  {
    title: "Introduction to Front-end Development",
    image: metaFrontEnd,
    issuer: "Meta (Facebook) via Coursera",
    category: "Web Development",
  },
  {
    title: "Introduction to Back-end Development",
    image: metaBackEnd,
    issuer: "Meta (Facebook) via Coursera",
    category: "Web Development",
  },
  {
    title: "Front-end Development",
    image: zuittFrontend,
    issuer: "Zuitt Coding Bootcamp",
    category: "Web Development",
  },
  {
    title: "Back-end Development",
    image: zuittBackend,
    issuer: "Zuitt Coding Bootcamp",
    category: "Web Development",
  },
  {
    title: "Full Stack Development",
    image: zuittFullstack,
    issuer: "Zuitt Coding Bootcamp",
    category: "Web Development",
  },
  {
    title: "Java Programming",
    image: zuittJava,
    issuer: "Zuitt Coding Bootcamp",
    category: "Programming",
  },
  {
    title: "SQL",
    image: zuittSQL,
    issuer: "Zuitt Coding Bootcamp",
    category: "Database",
  },
];
