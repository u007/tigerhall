import {
  Box,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Fade,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import Duration from 'components/Duration';
import BookmarkIcon from 'components/icons/BookmarkIcon';
import ClockIcon from 'components/icons/ClockIcon';
import HeadsetIcon from 'components/icons/HeadsetIcon';
import ShareIcon from 'components/icons/ShareIcon';
import PodtcastProgressIndicator from 'components/PodcastProgressIndicator';
import Progress from 'components/Progress';
import { useState } from 'react';

import { PodcastType } from './PodcastType';

const Course = ({ name, experts, categories, duration }: PodcastType) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(Math.floor(Math.random() * 100));

  return (
    <Card maxW="sm" borderRadius="8px">
      <Fade in>
        <Box
          className="relative"
          borderRadius="8px 8px 0 0"
          w="full"
          h="120px"
          bgImage="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          backgroundSize="cover"
        >
          {/* <CircularProgress size="12px" value={progress} ml={2} thickness="80%" rounded="full" /> */}
          <PodtcastProgressIndicator progress={progress} />
          <IconButton
            rounded={'full'}
            colorScheme="orange"
            bgColor="rgba(255, 89, 0, 1)"
            onClick={() => console.log('TODO')}
            icon={<HeadsetIcon />}
            variant="ghost"
            aria-label="play"
            size="xs"
            _hover={{ bgColor: 'rgba(255, 89, 0, 0.6)' }}
            className="!absolute bottom-0 left-0 ml-2 mb-2"
          ></IconButton>
          <Duration duration={duration} />
          <Progress progress={progress} className="absolute bottom-0 left-0" />
        </Box>
        <CardBody p="8px 8px 12px">
          <Stack mt="0" gap={0}>
            <Text fontSize="xs" color="#797670" textTransform="uppercase">
              {categories
                .map((category) => (category.name || '').substring('category '.length))
                .join(', ')}
            </Text>
            <Heading fontSize="md" className="!mt-0 capitalize">
              {name}
            </Heading>
            <Text fontSize="xs" mt={2} color="#4D4B46">
              {experts
                .map((expert) => `${expert.firstName} ${expert.lastName}`)
                .join(', ')}
            </Text>
            <Text
              fontSize="xs"
              color="#797670"
              fontWeight="bold"
              className="!mt-0"
              fontFamily="NeueMontreal-Bold"
            >
              {/* {experts.company} */}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter p="0 0 5px 0">
          <ButtonGroup spacing="0" ml="auto">
            <IconButton
              colorScheme="orange"
              onClick={() => console.log('TODO')}
              icon={<ShareIcon />}
              variant="ghost"
              aria-label="share"
              size="sm"
              w={18}
              border="0"
              p="0"
              rounded="full"
            ></IconButton>

            <IconButton
              colorScheme="orange"
              onClick={() => console.log('TODO')}
              icon={<BookmarkIcon />}
              variant="ghost"
              aria-label="bookmark"
              size="sm"
              border="0"
              p="0"
              rounded="full"
            ></IconButton>
          </ButtonGroup>
        </CardFooter>
      </Fade>
    </Card>
  );
};

export default Course;
