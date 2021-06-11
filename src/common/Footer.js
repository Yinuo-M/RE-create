import "./Footer.scss";

function Footer() {
	return (
		<footer className="footer">
			<p className="footer__credit">
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
			<p>
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
		</footer>
	);
}

export default Footer;
