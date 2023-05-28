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
import { useEffect, useRef, useState } from 'react';

import { PodcastType } from './PodcastType';

const Course = ({ name, experts, categories, duration }: PodcastType) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(Math.floor(Math.random() * 100));
  const currentTime = useRef<number>(Math.round((progress * duration) / 100) * 1000); // ms

  const runningPodcast = useRef<NodeJS.Timer | null>(null);
  useEffect(() => {
    if (!isPlaying) {
      clearInterval(runningPodcast.current!);
      return;
    }
    runningPodcast.current = setInterval(() => {
      // console.log('playing', name, {
      //   currentTime: currentTime.current,
      //   duration: duration * 1000,
      // });
      if (isPlaying) {
        const newTime = currentTime.current + 500;
        currentTime.current = newTime;
        setProgress(Math.floor((newTime / (duration * 1000)) * 100));
        if (newTime >= duration * 1000) {
          setIsPlaying(false);
          clearInterval(runningPodcast.current!);
        }
      }
    }, 500);
  }, [isPlaying]);

  const playOrStop = () => {
    console.log('playOrStop', name, isPlaying);
    if (isPlaying) {
      setIsPlaying(false);
      clearInterval(runningPodcast.current!);
    } else {
      if (currentTime.current >= duration * 1000) {
        currentTime.current = 0;
      }
      setIsPlaying(true);
    }
  };

  const expert = experts?.[0] || {};

  return (
    <Card maxW="sm" borderRadius="8px" height="272px" className="mx-auto" width="244px">
      <Fade in>
        <article>
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
              onClick={playOrStop}
              icon={<HeadsetIcon />}
              variant="ghost"
              aria-label="play"
              size="xs"
              _hover={{ transform: 'scale(1.4)' }}
              className={`!absolute bottom-0 left-0 ml-2 mb-2 ease-in${
                isPlaying ? ' animate-pulse	' : ''
              }`}
            ></IconButton>
            <Duration duration={duration} />
            <Progress
              progress={progress}
              className="absolute bottom-0 left-0"
              playing={isPlaying}
            />
          </Box>
          <CardBody p="8px 8px 12px" h="110px">
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
                {expert.firstName} {expert.lastName}
              </Text>
              <Text
                fontSize="xs"
                color="#797670"
                fontWeight="bold"
                className="!mt-0 capitalize"
                fontFamily="NeueMontreal-Bold"
              >
                {expert.company}
              </Text>
            </Stack>
          </CardBody>
          <CardFooter p="0 0 5px 0" bottom={0}>
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
                _hover={{ transform: 'scale(1.4)' }}
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
                _hover={{ transform: 'scale(1.4)' }}
              ></IconButton>
            </ButtonGroup>
          </CardFooter>
        </article>
      </Fade>
    </Card>
  );
};

export default Course;
