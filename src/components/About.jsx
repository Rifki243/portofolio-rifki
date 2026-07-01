function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Sedikit tentang perjalanan saya.</p>
        <p>
          Saya mahasiswa Teknik Telekomunikasi di Telkom University dengan
          pengalaman praktis di bidang machine learning, data analysis, dan
          sistem telekomunikasi. Saya terbukti mampu memimpin dan membimbing
          melalui peran sebagai koordinator praktikum dan asisten dosen,
          dengan minat besar pada penerapan AI dan solusi berbasis data di
          industri telekomunikasi dan teknologi.
        </p>
        <div className="stats">
          <div>
            <div className="stat-number">???</div>
            <div className="stat-label">GPA / IPK</div>
          </div>
          <div>
            <div className="stat-number">10+</div>
            <div className="stat-label">Sertifikasi</div>
          </div>
          <div>
            <div className="stat-number">5+</div>
            <div className="stat-label">Project ML & Data</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
