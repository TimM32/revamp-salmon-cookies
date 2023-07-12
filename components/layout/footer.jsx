export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  
  return (
    <footer>
      &copy; {copyrightDate} Salmonm Cookies. All rights reserved.
    </footer>
  );
}

