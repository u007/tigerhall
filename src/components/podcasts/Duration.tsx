import { Flex, Text } from '@chakra-ui/react';

import ClockIcon from '@/components/icons/ClockIcon';

/**
 * @param duration in seconds
 */
const Duration = ({ duration }: { duration: number }) => {
  const durationInMinutes = Math.floor(duration / 60);

  return (
    <Flex
      position="absolute"
      bottom={0}
      right={0}
      m="0 8px 8px 0"
      p="5px 8px"
      color="white"
      bgColor="rgba(0, 0, 0, 0.7)"
      borderRadius="100px"
      gap="4px"
    >
      <ClockIcon className="mt-1" />
      <Text fontWeight="bold" fontSize="xs" mt="2px">
        {`${durationInMinutes >= 1 ? durationInMinutes : duration}${
          durationInMinutes >= 1 ? 'm' : 's'
        }`}
      </Text>
    </Flex>
  );
};

export default Duration;
