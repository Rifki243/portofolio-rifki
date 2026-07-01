import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          Punya project atau ingin berdiskusi? Kirim pesan lewat form ini.
        </p>
        <div className="contact-info">
          <p>Email: muhamadpriadi520@gmail.com</p>
          <p>Phone: +62 812-8190-0650</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/muhamadrifkiardipriadi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/muhamadrifkiardipriadi
            </a>
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
