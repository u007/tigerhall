export type PodcastExpert = {
  firstName: string;
  lastName: string;
  title: string;
  company: string;
};

export type PodcastType = {
  name: string;
  categories: {
    name: string;
  };
  image: {
    uri: string;
  };
  experts: PodcastExpert;
  link: string;
};
