
import "./ProjectGallery.css";
import { useState } from "react";

export default function ProjectGallery({ project }) {
  const images = project.images ?? [];
  const [current, setCurrent] = useState(0);

  function previousImage() {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }

  function nextImage() {
    setCurrent((prev) => (prev + 1) % images.length);
  }

  return (
    <article className="project-card">
      {/* Project Image Gallery */}
      {images.length > 0 && (
        <div className="project-gallery">
          <img
            src={images[current]}
            alt={`${project.title} screenshot ${current + 1}`}
            className="project-gallery-image"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                className="gallery-arrow gallery-prev"
                onClick={previousImage}
                aria-label="Previous image"
              >
                ‹
              </button>

              <button
                type="button"
                className="gallery-arrow gallery-next"
                onClick={nextImage}
                aria-label="Next image"
              >
                ›
              </button>

              <span className="gallery-counter">
                {current + 1} / {images.length}
              </span>
            </>
          )}
        </div>
      )}

      {/* Project Information */}
      <div className="project-card-content">
        <p className="project-year">{project.year}</p>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tags">
          {project.technology.split(",").map((tech) => (
            <span className="project-tech" key={tech.trim()}>
              {tech.trim()}
            </span>
          ))}
        </div>

        {/* Key Features */}
        {project.features?.length > 0 && (
          <>
            <h4>Key Features</h4>

            <ul className="project-features">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </>
        )}

        {/* Repository Link */}
        {project.repository && (
          <a
            href={project.repository}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Repository ↗
          </a>
        )}

        {/* Single Documentation Link (if provided) */}
        {project.document && (
          <a
            href={project.document}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Documentation ↗
          </a>
        )}

        {/* Image Navigation Dots */}
        {images.length > 1 && (
          <div className="gallery-dots">
            {images.map((image, index) => (
              <button
                type="button"
                key={image}
                className={`gallery-dot ${
                  current === index ? "active" : ""
                }`}
                onClick={() => setCurrent(index)}
                aria-label={`Show image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Downloadable Project Documents */}
        {project.documents?.length > 0 && (
          <div className="project-documents">
            <h4>📁 Project Documents</h4>

            {project.documents.map((doc) => (
              <a
                key={doc.name}
                href={doc.file}
                download
                className="document-download"
              >
                <span>📄 {doc.name}</span>
                <span>⬇ Download</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
