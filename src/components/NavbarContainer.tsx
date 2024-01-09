import { ReactNode } from "react"

function NavbarContainer({children}:{children:ReactNode}) {
   
    return (
      <div className="py-[16px] px-[10px]  bg-[#1E2640]  flex flex-col justify-between text-[#fff]">
        {children}
      </div>
    )
}
  
  export default NavbarContainer