import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';

import { PodcastType } from './PodcastType';

const Course = ({ name, experts, categories }: PodcastType) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Tag colorScheme="blue">{categories.name}</Tag>
          <Heading size="md">{name}</Heading>
          <Text>
            {experts.firstName} {experts.lastName}
          </Text>
          <Text>{experts.company}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Share
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Bookmark
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Course;
