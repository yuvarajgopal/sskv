import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

export default function VideoEmbed({ videoId = 'BcPJWK2SdAY', title = 'Campus Tour' }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video max-w-4xl mx-auto">
      {!loaded ? (
        <button
          onClick={() => setLoaded(true)}
          className="absolute inset-0 w-full h-full bg-primary-800 flex items-center justify-center group cursor-pointer"
          aria-label={`Play ${title}`}
        >
          {/* Thumbnail background */}
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity"
            loading="lazy"
          />

          {/* Play button */}
          <div className="relative z-10 w-20 h-20 rounded-full bg-accent-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <FaPlay className="text-primary-900 text-2xl ml-1" />
          </div>

          {/* Label */}
          <span className="absolute bottom-6 left-6 text-white font-semibold text-lg z-10">
            {title}
          </span>
        </button>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
