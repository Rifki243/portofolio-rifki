function Hero() {
  return (
    <section className="hero">
      <img src="/assets/foto.jpg" alt="Foto Muhamad Rifki Ardi Priadi" />
      <h1>Muhamad Rifki Ardi Priadi</h1>
      <p className="hero-role">Telecommunications Engineering Student</p>
      <p>
        Mahasiswa Teknik Telekomunikasi Telkom University dengan pengalaman
        langsung di bidang machine learning, data analysis, dan sistem
        telekomunikasi. Berpengalaman mengembangkan project berbasis data,
        termasuk sistem deteksi "Fake BTS" berbasis machine learning, serta
        analisis performa jaringan menggunakan Nemo dan QGIS.
      </p>
      <div className="button-group">
        <a
          className="btn btn-primary"
          href="/assets/CV.pdf"
          download="CV_Muhamad_Rifki_Ardi_Priadi.pdf"
        >
          Download CV
        </a>
        <a className="btn btn-secondary" href="#projects">
          Lihat Project
        </a>
      </div>
    </section>
  );
}

export default Hero;
