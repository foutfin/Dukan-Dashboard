import { ReactNode } from "react";
import Header from "./Header";

function PageWrapper({title,children,setNav}:{title:string,children:ReactNode,setNav:React.Dispatch<React.SetStateAction<boolean>>}){
    return(
        <div className=" flex-grow flex flex-col overflow-hidden">
            <Header title={title} setNav={setNav}/>
            {children}
        </div>
    )

}

export default PageWrapper