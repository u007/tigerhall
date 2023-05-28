import { Box, Stack } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
const PodtcastProgressIndicator = ({ progress }: { progress: number }) => {
  return (
    <Stack
      h="30px"
      borderRadius="8px 0px 5px"
      bgColor="#FFF9F6"
      direction="column"
      display="inline-block"
      p="0 8px 0 0"
      verticalAlign="middle"
      className="relative"
    >
      <div
        style={{
          width: '12px',
          height: '12px',
          border: '1px solid #FFA97A',
        }}
        className="inline-block border-1 absolute top-[8px] left-[8px] rounded-full"
      >
        <CircularProgressbar
          value={progress}
          strokeWidth={50}
          background={true}
          styles={buildStyles({
            strokeLinecap: 'butt',
            pathColor: '#FFA97A',
          })}
        />
      </div>
      <Text
        lineHeight="14px"
        fontSize="xs"
        display="inline-block"
        fontFamily="NeueMontreal-Bold"
        className="!ml-[24px]"
      >
        {progress}% Completed
      </Text>
    </Stack>
  );
};

export default PodtcastProgressIndicator;
