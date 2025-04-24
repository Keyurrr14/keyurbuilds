import React, { useState, useEffect } from "react";

const songs = [
  "https://embed.music.apple.com/in/album/ho-hey/1754219081?i=1754219314",
  "https://embed.music.apple.com/in/album/evergreen/1233681655?i=1233681662",
  "https://embed.music.apple.com/in/album/open-arms-feat-travis-scott/1658650093?i=1658650800",
  "https://embed.music.apple.com/in/album/7-years/1081573096?i=1081573445",
  "https://embed.music.apple.com/in/album/invisible-string/1524793738?i=1524793912",
];

const MusicNotification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(() => {
    // Calculate days since January 1, 2024 (or any fixed start date)
    const startDate = new Date(2024, 0, 1); // January 1, 2024
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of day
    const daysSinceStart = Math.floor(
      (today - startDate) / (1000 * 60 * 60 * 24)
    );
    return daysSinceStart % songs.length;
  });

  useEffect(() => {
    // Trigger the animation after component mounts
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const scheduleNextSongChange = () => {
      const now = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0); // Change at midnight

      const timeUntilNext = tomorrow.getTime() - now.getTime();
      return setTimeout(() => {
        const newIndex = (currentSongIndex + 1) % songs.length;
        setCurrentSongIndex(newIndex);
        // Schedule the next day's change
        scheduleNextSongChange();
      }, timeUntilNext);
    };

    const timeoutId = scheduleNextSongChange();
    return () => clearTimeout(timeoutId);
  }, [currentSongIndex]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div
          className={`fixed bottom-4 right-2 z-50 transition-all duration-500 transform
          ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {!isOpen ? (
            <div className="flex flex-col items-end gap-2">
              <button
                onClick={() => handleDismiss()}
                className="text-zinc-500 hover:text-black p-1 rounded-full mb-2"
                title="Dismiss notification"
              >
                ✕
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className="bg-black text-white px-4 py-2 rounded-lg shadow-lg hover:bg-zinc-800 transition-all duration-300 font-caveat text-xl animate-bounce"
              >
                Tap this 'tiny' button to listen today's jam =)
              </button>
            </div>
          ) : (
            <div className="bg-white p-4 rounded-lg shadow-lg w-[400px]">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-caveat text-xl">Today's Jam 🎵</h3>
                <button
                  onClick={handleClose}
                  className="text-zinc-500 hover:text-black"
                >
                  ✕
                </button>
              </div>
              <iframe
                style={{ borderRadius: "12px" }}
                src={songs[currentSongIndex]}
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MusicNotification;
