interface ILionIdleProps {
  isPlayingAudio: boolean;
}

export const LionIdle: React.FC<ILionIdleProps> = ({ isPlayingAudio }) => {
  return (
    <div className="w-full h-[75%] bottom-0 sm:h-full sm:top-0 absolute rounded-3xl sm:rounded-4xl overflow-hidden">
      <video
        autoPlay
        loop
        muted
        preload="none"
        className={`w-full h-full ${isPlayingAudio && "hidden"} object-cover`}
      >
        <source src="/Lion Idling Transparent.webm" type={"video/webm"} />
      </video>
      <video
        autoPlay
        loop
        muted
        preload="none"
        className={`w-full h-full object-cover ${!isPlayingAudio && "hidden"} `}
      >
        <source src="/Lion Speaking.webm" type={"video/webm"} />
      </video>
    </div>
  );
};

export default LionIdle;
