import { ReactNode, useState } from "react";
import Navbar from "./components/Navbar";
import PageWrapper from "./components/PageWrapper";
import Payments from "./components/Payments";

interface navpage {
  page: ReactNode;
  name: string
}
function App() {
  const [openNav , setOpenNav] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<navpage>({ name: "Payments", page: <PageWrapper title="Payments" setNav={setOpenNav} ><Payments/></PageWrapper> })
  
  return (
    <>
    {openNav ?
        <div className="z-30 lg:hidden fixed inset-0 h-[100dvh] flex">
          <Navbar setNav={setOpenNav} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          <div onClick={()=>setOpenNav(false)} className=" backdrop-opacity-20 backdrop-invert bg-white/30 flex-grow"></div>
        </div>
        :
        null
      }
    <div className="h-[100dvh] flex ">
      <div className="hidden lg:flex">
        <Navbar setNav={setOpenNav} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
      {currentPage.page}
    </div>
    </>
  )
}

export default App
