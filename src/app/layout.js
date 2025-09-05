// src/app/layout.js
import './globals.css';
import React from 'react';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Satyam Jain-Portfolio',
  description: 'Satyam Jain portfolio with smooth scrolling',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body data-onepage="true">
        {children}
      </body>
    </html>
  );
}
