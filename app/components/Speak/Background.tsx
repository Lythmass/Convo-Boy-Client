export const Background = () => {
  return (
    <div className="w-full rounded-4xl absolute -z-10 top-0 h-full left-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        preload="none"
        className="w-full h-full rounded-4xl object-cover"
      >
        <source
          className="rounded-4xl"
          src="/Background.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Background;
