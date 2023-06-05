import { Box } from '@chakra-ui/react';

type Props = {
  progress: number;
  playing?: boolean;
  className?: string;
};

const Progress = ({ playing, progress, className }: Props) => {
  return (
    <Box
      height="2px"
      w="100%"
      bgColor="rgba(255, 89, 0, 0.3)"
      className={`progress${className ? ` ${className}` : ''}`}
    >
      <Box
        h="100%"
        transition="all 1s ease-in-out"
        animation={{ scale: '1, 1.1, 1', opacity: '1, 0.5, 1' }}
        // animate-pulse
        className={`progress__bar ${playing ? ' ' : ''}`}
        style={{ width: `${progress}%`, backgroundColor: '#FF5900' }}
      ></Box>
    </Box>
  );
};

export default Progress;
