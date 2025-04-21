import React, { useState, useEffect } from "react";

const MusicNotification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animation after component mounts
    setIsLoaded(true);
  }, []);

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
                src="https://embed.music.apple.com/in/album/ho-hey/1754219081?i=1754219314"
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
