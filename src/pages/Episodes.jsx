import { useState, useEffect, useRef } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import './Episodes.css';

function Episodes() {
  const [episodes] = useState([
    {
      id: 1,
      title: "Introducción al Podcast",
      audioSrc: "../assests/audio/episodio1.mp3",
      date: "15 Mayo 2023",
      description: "Presentación del podcast y temas que cubriremos en futuros episodios. Hablamos sobre nuestra visión y lo que nos inspiró a crear este espacio.",
      duration: "28 min",
      image: "../assests/images/podcast-cover.jpg",
      category: "Inicio"
    },
    {
      id: 2,
      title: "Entrevista con Experto en Audio",
      audioSrc: "../assests/audio/episodio1.mp3",
      date: "22 Mayo 2023",
      description: "Conversación con Alejandro Martínez, ingeniero de sonido con 15 años de experiencia en producción de podcasts y radio.",
      duration: "42 min",
      image: "../assests/images/podcast-cover.jpg",
      category: "Entrevistas"
    },
    {
      id: 3,
      title: "Tecnología en la Producción de Podcasts",
      audioSrc: "../assests/audio/episodio1.mp3",
      date: "29 Mayo 2023",
      description: "Analizamos las mejores herramientas y software para crear podcasts de calidad profesional desde casa.",
      duration: "35 min",
      image: "../assests/images/podcast-cover.jpg",
      category: "Tecnología"
    }
  ]);

  const [filter, setFilter] = useState("Todos");
  const episodeRefs = useRef([]);

  useEffect(() => {
    // Animación de aparición para cada episodio
    episodeRefs.current.forEach((ref, index) => {
      if (ref) {
        setTimeout(() => {
          ref.style.opacity = 1;
          ref.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, [filter]);

  const categories = ["Todos", ...new Set(episodes.map(ep => ep.category))];
  const filteredEpisodes = filter === "Todos" 
    ? episodes 
    : episodes.filter(ep => ep.category === filter);

  return (
    <section className="episodes-page">
      <div className="episodes-header">
        <h1 className="episodes-title">Todos los Episodios</h1>
        <p className="episodes-subtitle">Explora nuestra colección completa de contenido</p>
        
        <div className="filter-controls">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-button ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="episodes-grid">
        {filteredEpisodes.map((episode, index) => (
          <div 
            key={episode.id}
            ref={el => episodeRefs.current[index] = el}
            className="episode-card"
          >
            <div className="episode-image-container">
              <img 
                src={episode.image} 
                alt={episode.title}
                className="episode-image"
              />
              <div className="episode-badge">{episode.category}</div>
              <div className="episode-duration">{episode.duration}</div>
            </div>
            
            <div className="episode-content">
              <div className="episode-meta">
                <span className="episode-date">{episode.date}</span>
              </div>
              
              <h3 className="episode-name">{episode.title}</h3>
              <p className="episode-description">{episode.description}</p>
              
              <div className="audio-player-container">
                <AudioPlayer 
                  audioSrc={episode.audioSrc} 
                  title={episode.title}
                />
              </div>
              
              <button className="episode-action">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path fill="currentColor" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
                </svg>
                Más opciones
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Episodes;