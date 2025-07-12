
export type BlogTypes = {
  _id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  isPublished: boolean;
  subTitle: string;
};
export type BlogTableItemProps = {
  blog: BlogTypes;
  index: number;
  fetchBlogs: () => void | Promise<void>;
};