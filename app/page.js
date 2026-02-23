"use client";

import { useEffect, useMemo, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const quickPoints = [
  "INTERIOR EXPERTISE",
  "SATISFACTION GUARANTEED",
  "QUICK DEALS",
  "AFFORDABLE PRICE",
  "24/7 SUPPORT",
];

const heroBadges = ["TURNKEY APPROACH", "COMMERCIAL PROJECTS - MUMBAI", "24/7 SUPPORT"];

const marqueeItems = [
  "INTERIOR DESIGN",
  "ARCHITECTURE AND SPACE PLANNING",
  "RETAIL AND COMMERCIAL DESIGN",
];

const whoWeAreStory = [
  "The company was founded by Mr. Manish and Jitendra Mali, professionals known for creativity, technical excellence, and strong project handover expertise across commercial projects in Mumbai.",
  "Over the years, our organisation has grown steadily on a foundation of trust, efficiency, and uncompromising quality.",
  "Our core values focus on innovative planning, commercial design solutions, and execution excellence so clients receive reliable, business-ready spaces.",
  "Driven by passion, precision, and performance, we continue expanding our footprint in Mumbai's commercial design and contracting industry.",
];

const whoWeAreValues = [
  "Innovative planning",
  "Commercial design solutions",
  "Execution excellence",
  "On-time delivery",
  "On-budget delivery",
];

const planningHighlights = [
  "Interior Design",
  "Architecture and Space Planning",
  "Retail and Commercial Design",
];

const expertiseList = [
  "Pop Punning",
  "Gypsum Partition",
  "False Ceiling",
  "Modular False Ceiling",
  "Commercial Interiors",
  "Residential Interiors",
];

const serviceGroups = [
  {
    title: "INTERIOR DESIGN",
    items: [
      "Home Design",
      "Office Design",
      "Showroom Design",
      "Auditorium Design",
    ],
  },
  {
    title: "CUSTOM FURNITURE",
    items: [
      "Custom Sofa",
      "Custom Bed",
      "Custom Chair",
      "Custom Kitchen",
      "Custom Cabinet",
      "Custom Table",
      "Custom Reception",
      "Custom Door",
      "Custom Workstation",
    ],
  },
];

const trustedClients = ["IndusInd Bank", "Tata", "Tata Power", "Flipspaces", "Livspace"];

const projectHighlights = [
  {
    title: "Pop and Gypsum",
    category: "Ceiling & Gypsum",
    short: "Clean partition and ceiling work for agile office use.",
    location: "Mumbai",
    duration: "6 weeks",
    scope: "POP punning, gypsum partition, finishing",
    description:
      "This project focused on lightweight partition strategy and clean finish quality for a fast-moving office environment.",
    highlights: ["Clean partition layout", "Fast handover", "Office-ready finish"],
    images: [
      { title: "Pop and Gypsum - 01", src: "/gallery/project-03.jpg" },
      { title: "Pop and Gypsum - 02", src: "/gallery/project-03.jpg" },
      { title: "Pop and Gypsum - 03", src: "/gallery/project-03.jpg" },
    ],
  },
  {
    title: "False Ceiling",
    category: "Ceiling & Gypsum",
    short: "Lighting-integrated ceiling design for premium interiors.",
    location: "Mumbai",
    duration: "4 weeks",
    scope: "False ceiling, lighting integration, finishing",
    description:
      "A complete false ceiling package with focused lighting layout, improving both visual appeal and user comfort.",
    highlights: ["Premium ceiling detailing", "Lighting-focused layout", "Smooth execution"],
    images: [
      { title: "False Ceiling - 01", src: "/gallery/project-04.jpg" },
      { title: "False Ceiling - 02", src: "/gallery/project-05.jpg" },
      { title: "False Ceiling - 03", src: "/gallery/project-06.jpg" },
    ],
  },
  {
    title: "Exterior",
    category: "Exterior",
    short: "Modern facade enhancement for stronger building presence.",
    location: "Mumbai",
    duration: "10 weeks",
    scope: "Commercial exterior design and facade enhancement",
    description:
      "This exterior transformation improved brand visibility, street presence, and long-term durability of facade materials.",
    highlights: ["Modern facade language", "Brand-ready frontage", "Durable finish materials"],
    images: [
      { title: "Exterior - 01", src: "/gallery/project-07.jpg" },
      { title: "Exterior - 02", src: "/gallery/project-08.jpg" },
      { title: "Exterior - 03", src: "/gallery/project-09.jpg" },
    ],
  },
  {
    title: "Residential",
    category: "Residential",
    short: "Comfort-first home interiors with tailored furniture design.",
    location: "Mumbai",
    duration: "12 weeks",
    scope: "End-to-end residential interior and custom furniture",
    description:
      "A full residential project balancing utility and aesthetics through layout planning, storage, and custom furniture.",
    highlights: ["Comfort-first planning", "Custom furniture", "Elegant material palette"],
    images: [
      { title: "Residential - 01", src: "/gallery/project-08.jpg" },
      { title: "Residential - 02", src: "/gallery/project-09.jpg" },
      { title: "Residential - 03", src: "/gallery/project-13.jpg" },
    ],
  },
  {
    title: "Commercial",
    category: "Commercial",
    short: "Business-focused workplace planning and turnkey execution.",
    location: "Mumbai",
    duration: "14 weeks",
    scope: "Workplace design, planning and full execution",
    description:
      "A complete commercial fit-out with efficient work-zoning, meeting spaces, and practical circulation for teams.",
    highlights: ["Business efficiency layout", "Corporate-ready finish", "Turnkey implementation"],
    images: [
      { title: "Commercial - 01", src: "/gallery/project-05.jpg" },
      { title: "Commercial - 02", src: "/gallery/project-06.jpg" },
      { title: "Commercial - 03", src: "/gallery/project-14.jpg" },
    ],
  },
];

const contact = {
  office:
    "GROUND FLOOR, Flat No-2, Bela Court 2, SBS Road, Near Fire Brigade, Colaba, Mumbai, Maharashtra, 400005",
  phones: ["+919967511210", "+919819112929"],
  email: "mjsolution247@gmail.com",
};

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assetUrl = (path) => `${BASE_PATH}${path}`;

export default function HomePage() {
  const [theme, setTheme] = useState("dark");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const nextTheme = saved || "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  };

  const workCategories = ["All", ...new Set(projectHighlights.map((project) => project.category))];
  const filteredProjects =
    activeCategory === "All"
      ? projectHighlights
      : projectHighlights.filter((project) => project.category === activeCategory);

  const activeProject = projectHighlights[activeProjectIndex];
  const totalProjectImages = activeProject.images.length;

  const goToNextGalleryImage = () => {
    setActiveGalleryIndex((prev) => (prev + 1) % totalProjectImages);
  };

  const goToPrevGalleryImage = () => {
    setActiveGalleryIndex((prev) => (prev - 1 + totalProjectImages) % totalProjectImages);
  };

  const openProjectDetails = (index) => {
    setActiveProjectIndex(index);
    setActiveGalleryIndex(0);
    setIsGalleryOpen(true);
  };

  useEffect(() => {
    if (!isGalleryOpen) {
      return;
    }
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onEscape = (event) => {
      if (event.key === "Escape") {
        setIsGalleryOpen(false);
      }
    };
    window.addEventListener("keydown", onEscape);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onEscape);
    };
  }, [isGalleryOpen]);

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "MJ Solutions",
      description: "Transforming spaces for future.",
      image: assetUrl("/gallery/project-03.jpg"),
      telephone: contact.phones,
      email: contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "GROUND FLOOR, Flat No-2, Bela Court 2, SBS Road, Near Fire Brigade, Colaba",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400005",
        addressCountry: "IN",
      },
      areaServed: "Mumbai",
    }),
    []
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay" />
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />

          <header className="top-nav">
            <a href="#home" className="brand" aria-label="MJ Solutions Home">
              MJ SOLUTIONS
            </a>

            <nav className="menu" aria-label="Primary">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
              <button type="button" className="theme-toggle" onClick={toggleTheme}>
                {theme === "dark" ? "Light" : "Dark"}
              </button>
            </nav>
          </header>

          <div className="hero-copy">
            <p className="eyebrow reveal reveal-1">TRANSFORMING SPACES FOR FUTURE</p>
            <h1 className="reveal reveal-2">MJ SOLUTIONS</h1>
            <p className="reveal reveal-3">
              IF YOU CAN DREAM IT, WE CAN BUILD IT. Commercial design and
              contracting with turnkey execution.
            </p>
            <div className="hero-cta reveal reveal-4">
              <a className="btn btn-primary" href={`tel:${contact.phones[0]}`}>
                Call Now
              </a>
              <a className="btn btn-outline" href={`mailto:${contact.email}`}>
                Email Us
              </a>
              <a
                className="btn btn-ghost"
                href={`https://wa.me/${contact.phones[0].replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
            <div className="hero-badges reveal reveal-5">
              {heroBadges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </div>

          <div className="corner-accent top-left" aria-hidden="true" />
          <div className="corner-accent top-right" aria-hidden="true" />
          <div className="corner-accent bottom-left" aria-hidden="true" />
          <div className="corner-accent bottom-right" aria-hidden="true" />
        </section>
        <section className="hero-marquee" aria-label="Service highlights">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-head">
            <p className="eyebrow">WHO WE ARE</p>
            <h2>Your Dream. Our Duty.</h2>
          </div>

          <div className="about-grid">
            <article className="info-card about-reveal about-reveal-1">
              {whoWeAreStory.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </article>

            <article className="info-card about-reveal about-reveal-2">
              <h3>Core Values</h3>
              <ul>
                {whoWeAreValues.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="about-tags about-reveal about-reveal-3">
            <span>CREATIVITY</span>
            <span>TECHNICAL EXCELLENCE</span>
            <span>STRONG PROJECT MANAGEMENT</span>
            <span>COMMERCIAL CONTRACTING</span>
            <span>MUMBAI FOCUSED</span>
          </div>
        </section>

        <section className="section" id="direction">
          <div className="split-grid">
            <article className="info-card">
              <h3>OUR PHILOSOPHY</h3>
              <p>
                Interior design should be about bringing the vision of the
                client to life. Design can be both aesthetic and functional.
              </p>
            </article>
            <article className="info-card">
              <h3>OUR APPROACH</h3>
              <p>
                We have adopted the turnkey approach to interior design,
                combining design and implementation so clients can focus on
                their business.
              </p>
            </article>
          </div>
        </section>

        <section className="section planning-section" id="planning">
          <div className="section-head">
            <p className="eyebrow">DESIGNING AND SPACE PLANNING</p>
            <h2>Tailored planning for functional, efficient business spaces.</h2>
          </div>

          <div className="planning-grid">
            <article className="info-card planning-reveal planning-reveal-1">
              <p>
                The interior designers at MJ Solutions remodel your space with
                your specific requirements in mind. Our planners understand
                industry-level complexity and create practical solutions
                accordingly.
              </p>
              <p>
                We focus on imagining the space clearly and delivering execution
                that captures all the expected qualities from day one.
              </p>
            </article>

            <article className="info-card planning-reveal planning-reveal-2">
              <h3>Planning Focus</h3>
              <ul>
                {planningHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="planning-tags planning-reveal planning-reveal-3">
            <span>FUNCTIONAL LAYOUTS</span>
            <span>BUSINESS EFFICIENCY</span>
            <span>EXECUTION READY</span>
            <span>CLIENT REQUIREMENT FIRST</span>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-head">
            <p className="eyebrow">OUR SERVICES</p>
            <h2>Focused | Competent | Inspired</h2>
          </div>

          <article className="info-card focus-note">
            <p>
              Our focus is on delivering smart, functional, and visually
              compelling commercial environments, from offices and retail spaces
              to corporate fit-outs and custom commercial projects.
            </p>
            <p>
              Our team of commercial designers, engineers, and project experts
              ensures every client receives strong results on time, on budget,
              and beyond expectations.
            </p>
          </article>

          <div className="quick-points">
            {quickPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>

          <div className="services-grid">
            {serviceGroups.map((group) => (
              <article className="service-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <article className="expertise-card">
            <h3>Our Expertise</h3>
            <ul>
              {expertiseList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="section" id="work">
          <div className="section-head">
            <p className="eyebrow">OUR WORKS</p>
            <h2>
              <span className="work-title">Projects</span>
            </h2>
          </div>

          <div className="work-category-filters" role="tablist" aria-label="Work categories">
            {workCategories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={`work-filter-btn ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="work-track gallery-view">
            {filteredProjects.map((project) => {
              const projectIndex = projectHighlights.findIndex((item) => item.title === project.title);
              return (
                <article key={project.title} className="project-card">
                  <img src={assetUrl(project.images[0].src)} alt={project.title} loading="lazy" />
                  <div className="project-overlay">
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                    <p>{project.location}</p>
                    <p>{project.short}</p>
                    <button
                      type="button"
                      className="project-read-more"
                      onClick={() => openProjectDetails(projectIndex)}
                    >
                      Discover More Gallery
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        {isGalleryOpen ? (
          <div className="work-modal-backdrop" onClick={() => setIsGalleryOpen(false)}>
            <article
              className="work-modal"
              role="dialog"
              aria-modal="true"
              aria-label={`${activeProject.title} details`}
              onClick={(event) => event.stopPropagation()}
            >
              <header className="work-modal-head">
                <div>
                  <p className="work-modal-kicker">Discover More Gallery</p>
                  <h3>{activeProject.title}</h3>
                </div>
                <button
                  type="button"
                  className="viewer-btn work-modal-close"
                  onClick={() => setIsGalleryOpen(false)}
                  aria-label="Close gallery"
                >
                  ×
                </button>
              </header>
              <div className="work-modal-visual">
                <button
                  type="button"
                  className="work-modal-arrow"
                  onClick={goToPrevGalleryImage}
                  aria-label="Previous image"
                >
                  &#8249;
                </button>
                <figure className="work-hero-image">
                  <img
                    src={assetUrl(activeProject.images[activeGalleryIndex].src)}
                    alt={activeProject.images[activeGalleryIndex].title}
                  />
                  <figcaption>{activeProject.images[activeGalleryIndex].title}</figcaption>
                </figure>
                <button
                  type="button"
                  className="work-modal-arrow"
                  onClick={goToNextGalleryImage}
                  aria-label="Next image"
                >
                  &#8250;
                </button>
              </div>
              <div className="work-modal-meta">
                <p>
                  <strong>Category:</strong> {activeProject.category}
                </p>
                <p>
                  <strong>Location:</strong> {activeProject.location}
                </p>
                <p>
                  <strong>Duration:</strong> {activeProject.duration}
                </p>
                <p>
                  <strong>Scope:</strong> {activeProject.scope}
                </p>
                <p>{activeProject.description}</p>
              </div>
              <ul className="work-modal-highlights">
                {activeProject.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="work-modal-counter">
                Image {activeGalleryIndex + 1} of {totalProjectImages}
              </p>
              <div className="work-thumbs">
                {activeProject.images.map((img, index) => (
                  <button
                    key={img.title}
                    type="button"
                    className={`work-thumb ${activeGalleryIndex === index ? "active" : ""}`}
                    onClick={() => setActiveGalleryIndex(index)}
                    aria-label={`Open ${img.title}`}
                  >
                    <img src={assetUrl(img.src)} alt={img.title} loading="lazy" />
                  </button>
                ))}
              </div>
            </article>
          </div>
        ) : null}

        <section className="section" id="clients">
          <div className="section-head">
            <p className="eyebrow">TRUSTED BY THE CLIENTS</p>
            <h2>Client Network</h2>
          </div>
          <div className="client-list">
            {trustedClients.map((client) => (
              <span key={client}>{client}</span>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <p className="eyebrow">LET’S DESIGN YOUR SPACE!</p>
          <h2>Contact Information</h2>

          <div className="contact-details">
            <p>
              <strong>Office Address:</strong> {contact.office}
            </p>
            <p>
              <strong>Phone Number:</strong> {contact.phones.join("  |  ")}
            </p>
            <p>
              <strong>Email Address:</strong> {contact.email}
            </p>
          </div>

          <div className="contact-actions">
            <a className="btn btn-primary" href={`tel:${contact.phones[0]}`}>
              Call {contact.phones[0]}
            </a>
            <a className="btn btn-outline" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <a
              className="btn btn-ghost"
              href={`https://wa.me/${contact.phones[0].replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Fast Chat
            </a>
          </div>
        </section>
      </main>

      <a className="floating-call" href={`tel:${contact.phones[0]}`}>
        Call Now
      </a>
    </>
  );
}
