import './Marquee.css';

const Marquee = () => {
  const tracks = [
    "Oru Vaipu", "Boomshakalaka", "Nillave Vaa", "Penne Oru Mutham Thaa",
    "Ethaya Rani", "Intro", "Useless", "Miss You"
  ];

  const repeatedTracks = [...tracks, ...tracks, ...tracks];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {repeatedTracks.map((track, index) => (
          <span key={index} className="marquee-item">
            {track} <span className="star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
