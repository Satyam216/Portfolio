// src/app/layout.js
import './globals.css';
import React from 'react';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Modern Tech Portfolio',
  description: 'Animated one-page portfolio with smooth scrolling',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* App Router में <head> अलग से नहीं लिखना पड़ता; metadata ऊपर से inject होता है */}
      <body data-onepage="true">
        {children}
      </body>
    </html>
  );
}
