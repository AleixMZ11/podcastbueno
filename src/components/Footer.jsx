import { FaSpotify, FaApple, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">🎙️</span>
            <span className="logo-text">SoundWave</span>
          </div>
          <p className="footer-tagline">Donde las ideas cobran vida a través del sonido</p>
          
          <div className="social-links">
            <a href="#" aria-label="Spotify" className="social-link">
              <FaSpotify className="social-icon" />
            </a>
            <a href="#" aria-label="Apple Podcasts" className="social-link">
              <FaApple className="social-icon" />
            </a>
            <a href="#" aria-label="YouTube" className="social-link">
              <FaYoutube className="social-icon" />
            </a>
            <a href="#" aria-label="Instagram" className="social-link">
              <FaInstagram className="social-icon" />
            </a>
            <a href="#" aria-label="Twitter" className="social-link">
              <FaTwitter className="social-icon" />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="links-column">
            <h3 className="links-title">Explorar</h3>
            <ul className="links-list">
              <li><a href="#" className="footer-link">Inicio</a></li>
              <li><a href="#" className="footer-link">Episodios</a></li>
              <li><a href="#" className="footer-link">Categorías</a></li>
              <li><a href="#" className="footer-link">Destacados</a></li>
            </ul>
          </div>

          <div className="links-column">
            <h3 className="links-title">Compañía</h3>
            <ul className="links-list">
              <li><a href="#" className="footer-link">Sobre Nosotros</a></li>
              <li><a href="#" className="footer-link">Equipo</a></li>
              <li><a href="#" className="footer-link">Contacto</a></li>
              <li><a href="#" className="footer-link">Patrocinadores</a></li>
            </ul>
          </div>

          <div className="links-column">
            <h3 className="links-title">Legal</h3>
            <ul className="links-list">
              <li><a href="#" className="footer-link">Términos de uso</a></li>
              <li><a href="#" className="footer-link">Política de privacidad</a></li>
              <li><a href="#" className="footer-link">Cookies</a></li>
              <li><a href="#" className="footer-link">Licencias</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-newsletter">
          <h3 className="newsletter-title">Suscríbete a nuestro boletín</h3>
          <p className="newsletter-text">Recibe las últimas actualizaciones y episodios directamente en tu correo.</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-button">
              Suscribirse
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} SoundWave Podcast. Todos los derechos reservados.</p>
        </div>
        <div className="footer-legal">
          <a href="#" className="legal-link">Licencia Creative Commons - Atribución 4.0 Internacional</a>
          <a href="#" className="legal-link">Términos de uso</a>
          <a href="#" className="legal-link">Política de privacidad</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;