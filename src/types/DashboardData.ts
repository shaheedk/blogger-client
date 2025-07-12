// types/DashboardData.ts

export type Blog = {
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

export type DashboardData = {
  blogs: number;
  comments: number;
  drafts: number;
  recentBlogs: Blog[]; // ← matches your `blog_data.slice(0,5)`
};
