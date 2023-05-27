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
      pr="8px"
    >
      <Box
        w="12px"
        h="12px"
        mt="2px"
        ml={2}
        mr="4px"
        border="1px solid #FFA97A"
        borderRadius="full"
        display="inline-block"
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
        fontSize="xs"
        display="inline-block"
        fontFamily="NeueMontreal-Bold"
        className="!mt-[8px]"
      >
        {progress}% Completed
      </Text>
    </Stack>
  );
};

export default PodtcastProgressIndicator;
