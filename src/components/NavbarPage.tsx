import { ReactNode } from "react"
interface navpage {
    page: ReactNode;
    name: string
}

interface props {
    icon: ReactNode;
    title: string;
    page: ReactNode;
    setPage: React.Dispatch<React.SetStateAction<navpage>>;
    active: boolean;
    setNav:React.Dispatch<React.SetStateAction<boolean>>;
}

function NavbarPage({ title, icon, page, setPage, active,setNav }: props) {

    return (
        <>
            {active ?
                <button className="rounded-[4px] bg-[rgba(255,255,255,0.10)] w-full">
                    <div className="flex gap-[12px] px-[16px] py-[8px]">
                        {icon}
                        <span className="text-[14px] font-medium">{title}</span>
                    </div>
                </button>

                :
                <button className="rounded-[4px] hover:bg-[rgba(255,255,255,0.10)] w-full" onClick={() =>{ setNav(false) ;setPage({ name: title, page: page })}}>
                    <div className="flex gap-[12px] px-[16px] py-[8px]">
                        {icon}
                        <span className="text-[14px] font-medium">{title}</span>
                    </div>
                </button>

            }
        </>

    )
}

export default NavbarPage