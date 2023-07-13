'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  
  return (
    <footer className="margin-top: auto">
      &copy; {copyrightDate} Salmon Cookies. All rights reserved.
    </footer>
  );
}

