export const Background = () => {
  return (
    <div className="w-full absolute z-0 top-0 h-full left-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        preload="none"
        className="w-full h-full object-cover"
      >
        <source src="/Background.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Background;
