// types/Context.ts
import type { ReactNode } from "react";
import type { AxiosInstance } from "axios";
import type { NavigateFunction } from "react-router-dom";

// Define props for the provider
export interface AppProviderProps {
  children: ReactNode;
}
import type { BlogTypes } from "./BlogTypes";
export interface AppContextType {
  axios: AxiosInstance;
  navigate: NavigateFunction;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  blogs: BlogTypes[];
  setBlogs: React.Dispatch<React.SetStateAction<BlogTypes[]>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}
