function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        © {year} Muhamad Rifki Ardi Priadi. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
