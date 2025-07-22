export interface BlogTypes {
  _id: string;
  title: string;
  subTitle: string;
  description: string;
  category: string;
    
  createdAt: string;
  updatedAt: string;
  image?: string;
  isPublished: boolean;
}

export type BlogTableItemProps = {
  blog: BlogTypes;
  index: number;
  fetchBlogs: () => Promise<void>;
};
