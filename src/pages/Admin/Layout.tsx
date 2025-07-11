import { Outlet, useNavigate } from "react-router-dom"
import { assets } from "../../assets/assets"
import Sidbar from "../../components/Admin/Sidbar"


function Layout() {
    const navigate=useNavigate()

    const logout=()=>{
        navigate('/')
    }

  return (
    <>
     <div className='flex justify-between items-center py-2 h-[70px] sm:mx-20 xl:mx-12 px-4  sm:px-12 '>
        <img src={assets.logo} alt="" className="w-32 sm:w-40 cursor-pointer" onClick={()=>navigate('/')}/>
        <button onClick={logout} className="text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer">Logout</button>
        </div> 
        <div className="flex h-[calc(100vh-70px)]">
           <Sidbar/>
                            <Outlet/>
        </div>
    </>
  )
}

export default Layout
