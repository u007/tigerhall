import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Icon,
  IconButton,
  Image,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';
import BookmarkIcon from 'components/icons/BookmarkIcon';
import ShareIcon from 'components/icons/ShareIcon';

import { PodcastType } from './PodcastType';

const Course = ({ name, experts, categories }: PodcastType) => {
  return (
    <Card maxW="sm" borderRadius="8px">
      <Box
        borderRadius="8px 8px 0 0"
        w="full"
        h="120px"
        bgImage="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        backgroundSize="cover"
      ></Box>
      <CardBody p="8px 8px 12px">
        <Stack mt="0" gap={0}>
          <Text fontSize="xs" color="#797670" textTransform="uppercase">
            {categories.name}
          </Text>
          <Heading fontSize="md" className="!mt-0 capitalize">
            {name}
          </Heading>
          <Text fontSize="sm" mt={2} color="#4D4B46">
            {experts.firstName} {experts.lastName}
          </Text>
          <Text fontSize="xs" color="#797670" fontWeight="bold" className="!mt-0">
            {experts.company}
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
          ></IconButton>

          <IconButton
            colorScheme="orange"
            onClick={() => console.log('TODO')}
            icon={<BookmarkIcon />}
            variant="ghost"
            aria-label="bookmark"
          ></IconButton>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Course;
