type Props = {
  progress: number;
  className?: string;
};

const Progress = ({ progress, className }: Props) => {
  return (
    <div
      className={`progress w-full${className ? ` ${className}` : ''}`}
      style={{ height: '2px' }}
    >
      <div
        className="progress__bar h-full "
        style={{ width: `${progress}%`, backgroundColor: '#FF5900' }}
      ></div>
    </div>
  );
};

export default Progress;
