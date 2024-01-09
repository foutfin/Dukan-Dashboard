import NavbarContainer from "./NavbarContainer";
import NavbarPage from "./NavbarPage";
import Other from "./Other";
import HomeIcon from "../icons/Home";
import ProductsIcon from "../icons/Products";
import MarketingIcon from "../icons/Marketing";
import DeliveryIcon from "../icons/Delivery";
import AnalyticsIcon from "../icons/Analytics";
import PaymentsIcon from "../icons/Payments";
import ToolsIcon from "../icons/Tools";
import DiscountsIcon from "../icons/Discounts";
import AudienceIcon from "../icons/Audience";
import AppearanceIcon from "../icons/Appearance";
import PluginsIcon from "../icons/Plugins";
import OrdersIcon from "../icons/Orders";
import imglogo from "../assets/imgsrc.png"
import { ReactNode } from "react";
import PageWrapper from "./PageWrapper";
import Payments from "./Payments";

interface navpage {
    page: ReactNode;
    name: string
}

interface navbarProps {
    currentPage: navpage;
    setCurrentPage: React.Dispatch<React.SetStateAction<navpage>>;
    setNav:React.Dispatch<React.SetStateAction<boolean>>
}

function Navbar({ currentPage, setCurrentPage,setNav }: navbarProps) {
    
    return (
        <NavbarContainer>
            <div>
                <div className="flex gap-[12px] items-center mx-[10px]">
                    <img className="w-[40px] h-[40px]" src={imglogo} alt="profile picture" />
                    <div className="" >
                        <p className="text-[15px] font-medium">Nishyam</p>
                        <p className="opacity-80 text-[15px]">Visit store</p>
                    </div>
                    <button className="ml-auto active:scale-90 ease-in-out" >
                        <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Bold / Chevron Down">
                                <path id="Vector" d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z" fill="white" />
                            </g>
                        </svg>
                    </button>
                </div>

                <div className="mt-[24px]  w-[208px] flex flex-col gap-[2px] ">
                    <NavbarPage setNav={setNav} active={currentPage.name == "Home"} setPage={setCurrentPage} page={<PageWrapper title="Home" setNav={setNav} ><Other title="Home" /></PageWrapper>} icon={<HomeIcon />} title="Home" />
                    <NavbarPage setNav={setNav} active={currentPage.name == "Orders"} setPage={setCurrentPage} page={<PageWrapper title="Orders" setNav={setNav} ><Other title="Orders" /></PageWrapper>} icon={<OrdersIcon />} title="Orders" />
                    <NavbarPage  setNav={setNav} active={currentPage.name == "Products"} setPage={setCurrentPage} page={<PageWrapper title="Products" setNav={setNav} ><Other title="Products" /></PageWrapper>} icon={<ProductsIcon />} title="Products" />
                    <NavbarPage setNav={setNav} active={currentPage.name == "Delivery"} setPage={setCurrentPage} page={<PageWrapper title="Delivery" setNav={setNav} ><Other title="Delivery" /></PageWrapper>} icon={<DeliveryIcon />} title="Delivery" />
                    <NavbarPage  setNav={setNav} active={currentPage.name == "Marketing"} setPage={setCurrentPage} page={<PageWrapper title="Marketing" setNav={setNav} ><Other title="Marketing" /></PageWrapper>} icon={<MarketingIcon />} title="Marketing" />
                    <NavbarPage setNav={setNav} active={currentPage.name == "Analytics"} setPage={setCurrentPage} page={<PageWrapper title="Analytics" setNav={setNav} ><Other title="Analytics" /></PageWrapper>} icon={<AnalyticsIcon />} title="Analytics" />
                    <NavbarPage  setNav={setNav} active={currentPage.name == "Payments"} setPage={setCurrentPage} page={<PageWrapper title="Payments" setNav={setNav} ><Payments/></PageWrapper>} icon={<PaymentsIcon />} title="Payments" />
                    <NavbarPage setNav={setNav} active={currentPage.name == "Tools"} setPage={setCurrentPage} page={<PageWrapper title="Tools" setNav={setNav} ><Other title="Tools" /></PageWrapper>} icon={<ToolsIcon />} title="Tools" />
                    <NavbarPage setNav={setNav} active={currentPage.name == "Discounts"} setPage={setCurrentPage} page={<PageWrapper title="Discounts" setNav={setNav} ><Other title="Discounts" /></PageWrapper>} icon={<DiscountsIcon />} title="Discounts" />
                    <NavbarPage setNav={setNav} active={currentPage.name == "Audience"} setPage={setCurrentPage} page={<PageWrapper title="Audience" setNav={setNav} ><Other title="Audience" /></PageWrapper>} icon={<AudienceIcon />} title="Audience" />
                    <NavbarPage setNav={setNav} active={currentPage.name == "Appearance"} setPage={setCurrentPage} page={<PageWrapper title="Appearance" setNav={setNav} ><Other title="Appearance" /></PageWrapper>} icon={<AppearanceIcon />} title="Appearance" />
                    <NavbarPage  setNav={setNav} active={currentPage.name == "Plugins"} setPage={setCurrentPage} page={<PageWrapper title="Plugins" setNav={setNav} ><Other title="Plugins" /></PageWrapper>} icon={<PluginsIcon />} title="Plugins" />
                </div> 

            </div>
            <div className="rounded-[4px] mt-[16px]  bg-[#353C53] mx-[10px] px-[12px] py-[6px] flex gap-[12px] items-center">
                <div className="p-[6px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.0002 3.79727C2.42343 3.79727 1.8002 4.35527 1.8002 5.24727V18.7473C1.8002 19.6393 2.42343 20.1973 3.0002 20.1973H21.0002C21.577 20.1973 22.2002 19.6393 22.2002 18.7473V15.8473H17.0003C14.874 15.8473 13.1503 14.1236 13.1503 11.9973C13.1503 9.87097 14.874 8.14727 17.0003 8.14727H22.2002V5.24727C22.2002 4.35527 21.577 3.79727 21.0002 3.79727H3.0002ZM23.8002 8.14727V5.24727C23.8002 3.65398 22.6326 2.19727 21.0002 2.19727H3.0002C1.36782 2.19727 0.200195 3.65398 0.200195 5.24727V18.7473C0.200195 20.3405 1.36782 21.7973 3.0002 21.7973H21.0002C22.6326 21.7973 23.8002 20.3405 23.8002 18.7473V15.8473H23.8503V8.14727H23.8002ZM16.0002 11.9473C16.0002 11.4778 16.3808 11.0973 16.8502 11.0973H18.1502C18.6197 11.0973 19.0002 11.4778 19.0002 11.9473C19.0002 12.4167 18.6197 12.7973 18.1502 12.7973H16.8502C16.3808 12.7973 16.0002 12.4167 16.0002 11.9473ZM14.8503 11.9973C14.8503 10.8099 15.8129 9.84727 17.0003 9.84727H22.1503V14.1473H17.0003C15.8129 14.1473 14.8503 13.1847 14.8503 11.9973Z" fill="white" />
                    </svg>
                </div>
                <div className="flex flex-col gap-[2px]">
                    <span className="opacity-80 text-[13px] leading-[16px]">Available credits</span>
                    <span className="text-[16px] leading-[24px] font-medium">222.10</span>
                </div>
            </div>
        </NavbarContainer>
    )
}

export default Navbar