import React, { useState } from "react";

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="title">{title}</h2>
      {description && <p className="muted mt-4">{description}</p>}
    </div>
  );
}
