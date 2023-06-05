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
      position="relative"
    >
      <Box
        w="12px"
        height="12px"
        border="1px solid #FFA97A"
        display="inline-block"
        position="absolute"
        top="8px"
        left="8px"
        borderRadius="full"
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
      </Box>
      <Text
        lineHeight="14px"
        fontSize="xs"
        display="inline-block"
        fontFamily="NeueMontreal-Bold"
        marginLeft="24px !important"
      >
        {progress}% Completed
      </Text>
    </Stack>
  );
};

export default PodtcastProgressIndicator;
