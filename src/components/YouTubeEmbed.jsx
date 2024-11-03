// components/YouTubeEmbed.jsx
import React from 'react';

const YouTubeEmbed = ({ videoId }) => (
  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    />
  </div>
);

export default YouTubeEmbed;
