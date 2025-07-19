import { createContext, useContext, useEffect, useState } from "react";
import type { AppContextType, AppProviderProps } from "../types/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


axios.defaults.baseURL=import.meta.env.VITE_BASE_URL
const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: AppProviderProps) => {

    const navigate=useNavigate()

    const [token,setToken]=useState<string|null>(null)
    const [blogs,setBlogs]=useState([])
    const [input,setInput]=useState("")

const fetchBlogs=async()=>{
    try {
    const {data}=await axios.get('/api/blog/all')
    console.log(data)
    data.success? setBlogs(data.blogs):toast.error(data.message)

    } catch (error) {
  if (error instanceof Error) {
    toast.error(error.message);
  }
}

}

useEffect(()=>{
fetchBlogs()
const token=localStorage.getItem('token')
if(token){
    setToken(token)
    axios.defaults.headers.common['Authorization']=`${token}`;
}
},[])

  const value = {
    axios,navigate,token,setToken,blogs,setBlogs,input,setInput
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
