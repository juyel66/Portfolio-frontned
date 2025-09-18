export interface TBlog {
  _id: string;
  title: string;
  short_description: string;
  long_description: string;
  image: string;
  author: {
    email: string;
    image: string;
    name: string;
  };
}
export interface TProject {
  _id: string;
  title: string;
  live_link: string;
  client_link: string;
  server_link: string;
  short_description: string;
  long_description: string;
  technology: string;
  image: string;
  author: {
    email: string;
    image: string;
    name: string;
  };
}

export interface TMessage {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
