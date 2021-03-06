import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__credit footer__credit--museum">
          Data provided by{" "}
          <a
            href="https://metmuseum.github.io/"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            the Metropolitan Museum of Art Collection API
          </a>
        </p>
        <p className="footer__credit">
          Designed and developed by{" "}
          <a
            href="https://github.com/Yinuo-M"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            Yinuo Meng
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
