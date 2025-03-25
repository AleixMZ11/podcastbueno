import { useState, useRef, useEffect } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Animación de entrada
    if (titleRef.current) {
      titleRef.current.style.opacity = 1;
      titleRef.current.style.transform = 'translateY(0)';
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío a una API
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Formulario enviado:', formData);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Resetear el estado de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error al enviar:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1 ref={titleRef} className="contact-title">
            <span className="title-line">Contáctanos</span>
            <span className="title-line">y Participa</span>
          </h1>
          <p className="contact-subtitle">
            ¿Tienes ideas, sugerencias o quieres ser parte de nuestro podcast? 
            Estamos siempre buscando nuevas voces y perspectivas.
          </p>
        </div>

        <div className="contact-content">
          <form 
            ref={formRef}
            onSubmit={handleSubmit} 
            className="contact-form"
          >
            <div className="form-group floating">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
                className="form-input"
              />
              <label htmlFor="name" className="form-label">Nombre</label>
              <div className="form-underline"></div>
            </div>
            
            <div className="form-group floating">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
                className="form-input"
              />
              <label htmlFor="email" className="form-label">Email</label>
              <div className="form-underline"></div>
            </div>
            
            <div className="form-group floating">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder=" "
                className="form-input"
                rows="4"
              ></textarea>
              <label htmlFor="message" className="form-label">Tu Mensaje</label>
              <div className="form-underline"></div>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="spinner" viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                  </svg>
                  Enviando...
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                  </svg>
                  Enviar Mensaje
                </>
              )}
            </button>

            {submitSuccess && (
              <div className="success-message">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                </svg>
                ¡Gracias por tu mensaje! Nos pondremos en contacto pronto.
              </div>
            )}
          </form>

          <div className="contact-info">
            <div className="info-card">
              <h3 className="info-title">Sobre la Producción</h3>
              <p className="info-text">
                Este podcast es creado con pasión usando herramientas profesionales 
                para ofrecerte la mejor calidad de audio.
              </p>
              
              <div className="tools-used">
                <div className="tool-item">
                  <div className="tool-icon audacity"></div>
                  <span>Audacity</span>
                </div>
                <div className="tool-item">
                  <div className="tool-icon ffmpeg"></div>
                  <span>FFmpeg</span>
                </div>
                <div className="tool-item">
                  <div className="tool-icon react"></div>
                  <span>React</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3 className="info-title">¿Quieres Participar?</h3>
              <p className="info-text">
                Envíanos tus ideas para episodios o grabaciones que quieras compartir. 
                ¡Nos encanta colaborar con nuevos talentos!
              </p>
              <ul className="participation-list">
                <li>
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.68L7.91,10.59L6.5,12L11,16.5Z" />
                  </svg>
                  Envío de grabaciones
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.68L7.91,10.59L6.5,12L11,16.5Z" />
                  </svg>
                  Sugerencias de temas
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.68L7.91,10.59L6.5,12L11,16.5Z" />
                  </svg>
                  Entrevistas y colaboraciones
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;