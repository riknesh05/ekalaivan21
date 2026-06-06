import './Music.css';

const Music = () => {
  const tracks = [
    { num: '01', title: 'Oru Vaipu', year: '2026', img: 'album-oru-vaipu-cover.jpg', link: 'https://open.spotify.com/album/7EsxWB3wh6V7H5ugOR2uDt' },
    { num: '02', title: 'Boomshakalaka', year: '2026', img: 'album-boomshakalaka-cover.jpg', link: 'https://open.spotify.com/album/1FdjD91TzypYyEHJ18lbHP' },
    { num: '03', title: 'Nillave Vaa', year: '2026', img: 'album-nillave-vaa-cover.jpg', link: 'https://open.spotify.com/album/6YHP9jUnkUmzL0uZOHHOAP' },
    { num: '04', title: 'Penne Oru Mutham Thaa', year: '2026', img: 'album-penne-oru-mutham-thaa-cover.jpg', link: '#' },
    { num: '05', title: 'Ethaya Rani', year: '2025', img: 'album-ethaya-rani-cover.jpg', link: 'https://open.spotify.com/album/6ozVWH99NuEWfO9elFE7jF' },
    { num: '06', title: 'Intro', year: '2025', img: 'album-intro-cover.jpg', link: 'https://open.spotify.com/album/265MuUo53V8ABQXmQqhbmL' },
    { num: '07', title: 'Useless', year: '2025', img: 'album-useless-cover.jpg', link: 'https://open.spotify.com/album/17ngwim9ORmnkLPNv21DB6' },
    { num: '08', title: 'Miss You', year: '2024', img: 'album-miss-you-cover.jpg', link: 'https://open.spotify.com/album/7hrpaLa3C8JpLUCCDgWwxZ' },
  ];

  return (
    <section id="music" className="music-section">
      <div className="container">
        <h2 className="section-title reveal">THE TRACKS</h2>
        <div className="track-list">
          {tracks.map((track, i) => (
            <div className="track-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="track-img-wrapper">
                <img src={`/images/${track.img}`} alt={track.title} className="track-img" />
              </div>
              <div className="track-info">
                <div className="track-num">{track.num}</div>
                <h3 className="track-title">{track.title}</h3>
                <div className="track-meta">{track.year} &middot; Single</div>
              </div>
              <a href={track.link} target="_blank" rel="noopener noreferrer" className="play-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="spotify-player reveal">
          <iframe 
            src="https://open.spotify.com/embed/artist/4QdQsFOVWg3NpBFGDf2D0d?theme=0" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            title="Spotify Player"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Music;
