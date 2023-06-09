import {
  Box,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Fade,
  Heading,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import BookmarkIcon from 'components/icons/BookmarkIcon';
import HeadsetIcon from 'components/icons/HeadsetIcon';
import ShareIcon from 'components/icons/ShareIcon';
import PodtcastProgressIndicator from 'components/podcasts/PodcastProgressIndicator';
import { useEffect, useRef, useState } from 'react';

import Duration from '@/components/podcasts/Duration';
import Progress from '@/components/podcasts/Progress';
import { style } from '@/styles/style';

import { PodcastType } from './PodcastType';

const Course = ({ name, experts, categories, duration, image }: PodcastType) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const currentTime = useRef<number>(Math.round((progress * duration) / 100) * 1000); // ms

  const runningPodcast = useRef<NodeJS.Timer | null>(null);
  const stopPodCastInterval = () => {
    if (runningPodcast.current) {
      clearInterval(runningPodcast.current);
    }
  };
  useEffect(() => {
    if (!isPlaying) {
      stopPodCastInterval();
      return;
    }
    runningPodcast.current = setInterval(() => {
      if (isPlaying) {
        const newTime = currentTime.current + 500;
        currentTime.current = newTime;
        setProgress(Math.floor((newTime / (duration * 1000)) * 100));
        if (newTime >= duration * 1000) {
          setIsPlaying(false);
          stopPodCastInterval();
        }
      }
    }, 500);
  }, [isPlaying]);

  const playOrStop = () => {
    if (isPlaying) {
      setIsPlaying(false);
      stopPodCastInterval();
    } else {
      if (currentTime.current >= duration * 1000) {
        currentTime.current = 0;
      }
      setIsPlaying(true);
    }
  };

  const expert = experts?.[0] || {};
  const currentHost = window.location.protocol + '//' + window.location.host;

  const imgUrl = new URL(image?.uri || currentHost + '/public/img/no-image.png');
  if (image?.uri) {
    imgUrl.pathname = '/resize/250x' + imgUrl.pathname;
  }

  return (
    <Card maxW="sm" borderRadius="8px" height="272px" className="mx-auto" width="244px">
      <Fade in>
        <article>
          <Box
            className="relative"
            borderRadius="8px 8px 0 0"
            w="full"
            h="120px"
            background={`url(${imgUrl.href}) center/cover no-repeat`}
          >
            <PodtcastProgressIndicator progress={progress} />
            <IconButton
              rounded={'full'}
              colorScheme={style.baseColor}
              bgColor={style.buttonBgRGBA}
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
              <Text fontSize="xs" color={style.tagColor} textTransform="uppercase">
                {categories
                  .map((category) => (category.name || '').substring('category '.length))
                  .join(', ')}
              </Text>
              <Heading fontSize="md" className="!mt-0 capitalize">
                {name}
              </Heading>
              <Text fontSize="xs" mt={2} color={style.expertColor}>
                {expert.firstName} {expert.lastName}
              </Text>
              <Text
                fontSize="xs"
                color={style.expertCompanyColor}
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
