export const Background = () => {
  return (
    <div className="w-full rounded-3xl sm:rounded-4xl absolute -z-10 top-0 h-full left-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        preload="none"
        className="w-full h-full object-cover rounded-3xl sm:rounded-4xl"
      >
        <source
          className="rounded-3xl sm:rounded-4xl"
          src="/Background.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Background;
