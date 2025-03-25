import { useEffect, useRef } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import './Home.css';

function Home() {
  const latestEpisode = {
    title: "Episodio 1: Introducción al Podcast",
    audioSrc: "../assests/audio/episodio1.mp3",
    description: "En este primer episodio exploramos los fundamentos de la creación de contenido de audio digital y cómo la tecnología está transformando la forma en que consumimos medios.",
    date: "15 Junio 2023",
    duration: "32 min",
    image: "../assests/images/podcast-cover.jpg"
  };

  const titleRef = useRef(null);
  const coverRef = useRef(null);

  useEffect(() => {
    // Animaciones al cargar el componente
    if (titleRef.current) {
      titleRef.current.style.opacity = 1;
      titleRef.current.style.transform = 'translateY(0)';
    }
    if (coverRef.current) {
      coverRef.current.style.opacity = 1;
      coverRef.current.style.transform = 'scale(1)';
    }
  }, []);

  return (
    <section className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 ref={titleRef} className="hero-title">
            Bienvenidos a <span className="highlight">SoundWave</span>
          </h1>
          <p className="hero-subtitle">
            Donde las ideas cobran vida a través del sonido
          </p>
        </div>
      </div>

      <div className="container">
        <div className="latest-episode-container">
          <div className="episode-cover" ref={coverRef}>
            <img 
              src={latestEpisode.image} 
              alt="Portada del último episodio" 
              className="cover-image"
            />
            <div className="play-indicator">
              <div className="play-circle">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="episode-details">
            <div className="episode-meta">
              <span className="episode-date">{latestEpisode.date}</span>
              <span className="episode-duration">{latestEpisode.duration}</span>
            </div>
            <h2 className="episode-title">{latestEpisode.title}</h2>
            <p className="episode-description">{latestEpisode.description}</p>
            
            <div className="audio-player-wrapper">
              <AudioPlayer 
                audioSrc={latestEpisode.audioSrc} 
                title={latestEpisode.title}
              />
            </div>

            <div className="episode-actions">
              <button className="action-button subscribe">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>
                Suscribirse
              </button>
              <button className="action-button share">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />
                </svg>
                Compartir
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;