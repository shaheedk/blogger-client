// types/Context.ts
import type { ReactNode, Dispatch, SetStateAction } from "react";
import type { AxiosInstance } from "axios";
import type { NavigateFunction } from "react-router-dom";

// Define props for the provider
export interface AppProviderProps {
  children: ReactNode;
}


export interface AppContextType {
  axios: AxiosInstance;
  navigate: NavigateFunction;
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
  blogs: any[]; 
  setBlogs: Dispatch<SetStateAction<any[]>>; 
  setInput: Dispatch<SetStateAction<string>>;
}
