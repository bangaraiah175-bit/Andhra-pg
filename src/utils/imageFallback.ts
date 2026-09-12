import React from 'react';

const SVG_FALLBACK = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23FAF7F5"/><rect x="20" y="20" width="560" height="360" rx="16" fill="%23F3ECE8" stroke="%23E8CCD1" stroke-width="2"/><text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="%23722F37">Andhra Prince PG</text><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14" fill="%2378716c">Sector 126, Noida (Near Amity)</text></svg>`;

/**
 * Prevents infinite loop in onError image handlers.
 * Tries the primary fallback URL once, and if that fails, uses an inline SVG data URI.
 */
export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  primaryFallback = '/budget-pg/1.webp'
) => {
  const target = e.currentTarget;
  if (!target.dataset.triedPrimary) {
    target.dataset.triedPrimary = 'true';
    target.src = primaryFallback;
  } else if (!target.dataset.triedSvg) {
    target.dataset.triedSvg = 'true';
    target.src = SVG_FALLBACK;
  }
};
