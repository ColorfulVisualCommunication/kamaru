import React from "react";

const Videos = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <div
          key={video.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <div className="relative">
            <iframe
              className="w-full h-56 sm:h-64"
              src={`https://www.youtube.com/embed/${extractYouTubeID(video.youtube_url)}`}
              title={video.title}
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-[#8F3B1B]">
              {video.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

// Helper function to extract YouTube video ID
const extractYouTubeID = (url) => {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\\s]{11})/
  );
  return match ? match[1] : "";
};

export default Videos;