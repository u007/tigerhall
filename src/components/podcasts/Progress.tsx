import { Box } from '@chakra-ui/react';

import { gray200, style } from '@/styles/style';

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
      bgColor={gray200}
      className={`progress${className ? ` ${className}` : ''}`}
    >
      <Box
        h="100%"
        transition="all 1s ease-in-out"
        // animate-pulse
        className={`progress__bar ${playing ? ' animate-pulse' : ''}`}
        style={{ width: `${progress}%`, backgroundColor: style.iconColor }}
      ></Box>
    </Box>
  );
};

export default Progress;
