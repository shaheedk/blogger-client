import BlogList from "../features/blog/BlogList"
import Header from "../features/Home/HeroHeader"
import NewsLetter from "../components/common/NewsLetter"
import Footer from "../components/Layouts/Footer"
import Navbar from "../components/Layouts/Navbar"


const Home = () => {
  return (
    <>
<Navbar/>
<Header/>
<BlogList/>
<NewsLetter/>
<Footer/>
    </>
  )
}

export default Home
