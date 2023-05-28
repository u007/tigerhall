type Props = {
  progress: number;
  playing?: boolean;
  className?: string;
};

const Progress = ({ playing, progress, className }: Props) => {
  return (
    <div
      className={`progress w-full${className ? ` ${className}` : ''}`}
      style={{ height: '2px' }}
    >
      <div
        className={`progress__bar h-full ease-in${playing ? ' animate-pulse	' : ''}`}
        style={{ width: `${progress}%`, backgroundColor: '#FF5900' }}
      ></div>
    </div>
  );
};

export default Progress;
