import { ReactNode } from "react"

function Dashboard({children}:{children:ReactNode}) {
   
    return (
      <div className="py-[16px] px-[10px]  bg-[#1E2640]">
        {children}
      </div>
    )
}
  
  export default Dashboard