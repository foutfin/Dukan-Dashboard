import { useState } from "react"
import api from "../mockapi/api"

function Card({ title, value }: { title: string, value: string }) {
    return (
        <div className="min-w-[250px] shadow-sm  bg-[#fff] p-[20px] rounded-[8px] flex flex-col gap-[16px] flex-grow ">
            <span className="text-[#4D4D4D] text-[16px] leading-[24px]">{title}</span>
            <span className="text-[32px] leading-[38px] font-medium">{value}</span>
        </div>
    )
}

function ViewControls() {
    return (

        <div className="border-[1px] border-[#D9D9D9] px-[5px] lg:px-[16px] py-[10px]  rounded-[4px] flex gap-[8px] items-center w-[180px]  lg:w-[270px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_60947_3685)">
                    <path d="M5.95 10.5263C3.4412 10.5263 1.4 8.48 1.4 5.96491C1.4 3.44982 3.4412 1.40351 5.95 1.40351C8.4588 1.40351 10.5 3.44982 10.5 5.96491C10.5 8.48 8.4588 10.5263 5.95 10.5263ZM10.7443 9.48281C11.4674 8.49474 11.9 7.2814 11.9 5.96491C11.9 2.67579 9.2309 0 5.95 0C2.6691 0 0 2.67579 0 5.96491C0 9.25403 2.6691 11.9298 5.95 11.9298C7.4137 11.9298 8.7542 11.3944 9.7909 10.5116L12.2528 12.9796C12.3893 13.1165 12.5685 13.1853 12.7477 13.1853C12.9269 13.1853 13.1061 13.1165 13.2426 12.9796C13.5163 12.7053 13.5163 12.2618 13.2426 11.9874L10.7443 9.48281Z" fill="#999999" />
                </g>
                <defs>
                    <clipPath id="clip0_60947_3685">
                        <rect width="14" height="14" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <input className="focus:outline-none w-full" type="text" placeholder="Search by order ID..." />
        </div>
    )
}

function PageButton({pageno,active,setPageNumber}:{pageno:number,active:boolean,setPageNumber:React.Dispatch<React.SetStateAction<TransactionMockApiType>>}){
    return(
        <>
            {active?
                <button className="bg-[#146EB4] text-[#fff] rounded-[4px]  w-[28px]  text-[14px] leading-[20px] py-2 flex items-center justify-center">{pageno}</button>
            :
            <button onClick={()=>setPageNumber(p=>{return {...p , curPage:pageno}})} className="ease-in-out rounded-[4px] active:scale-90  w-[28px]  text-[14px] leading-[20px] py-2 flex items-center justify-center">{pageno}</button>
            }
        </>
    )
}





function Payments() {

    const [transactions, setTransactions] = useState<TransactionMockApiType>(api)


    return (
        <div className="text-[#1A181E] p-[16px] lg:p-[32px]  bg-[#FAFAFA] flex-grow overflow-y-scroll ">

            <div className="flex justify-between items-center">
                <span className="text-[20px] leading-[28px] font-medium">Overview</span>
                <button className="ease-in-out active:scale-90 flex gap-[7px] items-center px-[14px] py-[6px] rounded-[4px] border-[1px] border-[#D9D9D9]">
                    <span className="leading-[22px] text-[16px] ">Last Month</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z" fill="#4D4D4D" />
                    </svg>
                </button>
            </div>

            <div className="mt-[24px] flex gap-[20px] overflow-x-auto">
                <Card title="Online orders" value={"231"} />
                <Card title="Amount received" value={"₹23,92,312.19"} />
            </div>

            <div className="mt-[32px]">
                <span className="text-[20px] leading-[28px] font-medium">Transactions | This Month</span>
            </div>

            <div className="mt-[20px] p-[10px] lg:p-[20px] bg-[#fff] shadow-sm rounded-[8px]">

                <div className="flex justify-between items-center">
                    <ViewControls />
                    <div className="flex gap-[12px] items-center">
                        <button className="ease-in-out active:scale-90 flex gap-[6px] items-center px-[12px] py-[6px] rounded-[4px] border-[1px] border-[#D9D9D9]">
                            <span className="text-[#4D4D4D] leading-[24px] text-[16px] ">Sort</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.62301 9.93375C1.83129 9.72547 2.16897 9.72547 2.37725 9.93375L4.641 12.1975L6.90474 9.93375C7.11302 9.72547 7.45071 9.72547 7.65899 9.93375C7.86727 10.142 7.86727 10.4797 7.65899 10.688L5.01812 13.3289C4.80984 13.5371 4.47215 13.5371 4.26387 13.3289L1.62301 10.688C1.41473 10.4797 1.41473 10.142 1.62301 9.93375Z" fill="#4D4D4D" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.64095 2.51515C4.9355 2.51515 5.17428 2.75393 5.17428 3.04849L5.17428 12.9517C5.17428 13.2463 4.9355 13.4851 4.64095 13.4851C4.3464 13.4851 4.10762 13.2463 4.10762 12.9517L4.10762 3.04849C4.10762 2.75393 4.3464 2.51515 4.64095 2.51515Z" fill="#4D4D4D" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3772 6.06646C14.169 6.27474 13.8313 6.27474 13.623 6.06646L11.3592 3.80272L9.0955 6.06646C8.88722 6.27474 8.54953 6.27474 8.34126 6.06646C8.13298 5.85818 8.13298 5.52049 8.34126 5.31221L10.9821 2.67135C11.1904 2.46307 11.5281 2.46307 11.7364 2.67135L14.3772 5.31221C14.5855 5.52049 14.5855 5.85818 14.3772 6.06646Z" fill="#4D4D4D" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3593 13.4851C11.0647 13.4851 10.826 13.2463 10.826 12.9517L10.826 3.04847C10.826 2.75392 11.0647 2.51514 11.3593 2.51514C11.6538 2.51514 11.8926 2.75392 11.8926 3.04847L11.8926 12.9517C11.8926 13.2463 11.6538 13.4851 11.3593 13.4851Z" fill="#4D4D4D" />
                            </svg>
                        </button>

                        <button className="ease-in-out active:scale-90 flex gap-[6px] items-center p-[8px] rounded-[4px] border-[1px] border-[#D9D9D9]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z" fill="#4D4D4D" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="mt-[12px] overflow-x-auto">
                    <table className=" min-w-[100%] ">
                        <tr className="bg-[#F2F2F2]  ">
                            <th className="text-start pl-[12px] py-[10px]  text-[#4D4D4D] text-[14px] font-medium leading-[20px]">Order ID </th>
                            
                            <th className="whitespace-nowrap text-end pl-[15px] text-nowrap text-[#4D4D4D] text-[14px] font-medium leading-[20px] ">
                                <span >Order date</span>
                                <svg className="inline ml-[6px]" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.43025 6.23409L0.606918 2.3286C0.548707 2.24507 0.517907 2.15037 0.517581 2.05392C0.517255 1.95746 0.547415 1.86262 0.60506 1.77882C0.662705 1.69502 0.745826 1.62519 0.846154 1.57627C0.946481 1.52736 1.06052 1.50106 1.17692 1.5H6.82358C6.93998 1.50106 7.05402 1.52736 7.15435 1.57627C7.25468 1.62519 7.3378 1.69502 7.39544 1.77882C7.45309 1.86262 7.48325 1.95746 7.48292 2.05392C7.4826 2.15037 7.45179 2.24507 7.39358 2.3286L4.57025 6.23409C4.51083 6.31526 4.42716 6.38238 4.32732 6.42895C4.22747 6.47553 4.11483 6.5 4.00025 6.5C3.88567 6.5 3.77303 6.47553 3.67319 6.42895C3.57334 6.38238 3.48967 6.31526 3.43025 6.23409Z" fill="#4D4D4D" />
                                </svg>

                            </th>
                            <th className="text-end whitespace-nowrap pl-[15px]  text-[#4D4D4D] text-[14px] font-medium leading-[20px]">Order amount</th>
                            <th className=" whitespace-nowrap text-[#4D4D4D] text-[14px] pl-[15px] pr-[12px] font-medium leading-[20px] text-end ">
                                <span>Transaction fees</span>
                                <svg className="inline ml-[6px]" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_0_5817)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z" fill="#4D4D4D" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00019 6.62382C7.25793 6.62382 7.46686 6.83276 7.46686 7.09049L7.46687 9.44604C7.46687 9.70377 7.25794 9.9127 7.00021 9.9127C6.74247 9.9127 6.53354 9.70377 6.53354 9.44604L6.53353 7.09049C6.53353 6.83276 6.74246 6.62382 7.00019 6.62382Z" fill="#4D4D4D" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.52801 4.75852C7.52801 5.05002 7.29171 5.28633 7.00021 5.28633C6.70871 5.28633 6.4724 5.05002 6.4724 4.75852C6.4724 4.46702 6.70871 4.23072 7.00021 4.23072C7.29171 4.23072 7.52801 4.46702 7.52801 4.75852Z" fill="#4D4D4D" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_5817">
                                            <rect width="14" height="14" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </th>
                        </tr>
                        {transactions.res.map(transaction => {
                            return (
                                <tr className="border-b-[1px] border-[#E6E6E6]">
                                    <td className="pl-[12px]  py-[14px] text-start text-[#146EB4]"><a href="#">#{transaction.orderId}</a></td>
                                    <td className="text-[14px] text-[#1A181E] leading-[20px] text-end border-b-[1px] ">{transaction.orderDate}</td>
                                    <td className="text-[#1A181E] text-[14px]  leading-[20px] text-end border-b-[1px] ">₹{new Intl.NumberFormat('en-IN').format(transaction.orderAmount)}</td>
                                    <td className="pr-[12px] text-[#1A181E] text-[14px] leading-[20px] text-end border-b-[1px] ">₹{new Intl.NumberFormat('en-IN').format(transaction.transactionFee)}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>

                <div className=" mt-[24px] flex gap-[24px] justify-center">
                    <button disabled={transactions.curPage == 1} onClick={()=>setTransactions(p=>{return {...p , curPage:(p.curPage-1)}})} className="ease-in-out disabled:opacity-50 active:scale-90 rounded-[4px] border-[1px] border-[#D9D9D9] flex gap-[6px] items-center px-[12px] py-[6px]">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7803 3.96967C11.4874 3.67678 11.0126 3.67678 10.7197 3.96967L6.21967 8.46967C6.07902 8.61032 6 8.80109 6 9C6 9.19891 6.07902 9.38968 6.21967 9.53033L10.7197 14.0303C11.0126 14.3232 11.4874 14.3232 11.7803 14.0303C12.0732 13.7374 12.0732 13.2626 11.7803 12.9697L7.81066 9L11.7803 5.03033C12.0732 4.73744 12.0732 4.26256 11.7803 3.96967Z" fill="#4D4D4D" />
                        </svg>
                        <span>Previous</span>
                    </button>
                    <div className="flex gap-[4px] lg:hidden">
                        {transactions.curPage == 1 ? null :<PageButton setPageNumber={setTransactions}  pageno={transactions.curPage -1} active={transactions.curPage === (transactions.curPage -1)}/>}
                        <PageButton setPageNumber={setTransactions}  pageno={transactions.curPage} active={true}/>
                        {transactions.curPage == transactions.totalPage ? null :<PageButton setPageNumber={setTransactions}  pageno={transactions.curPage +1} active={transactions.curPage === (transactions.curPage +1)}/>}
                    </div>

                    <div className="sm:hidden portrait:hidden lg:flex items-center gap-[8px]">
                        {(transactions.totalPage - transactions.curPage)> 11 ?
                                transactions.curPage === 1 ?
                                     <>
                                        {Array.from({length:9}, (_, i) => <PageButton setPageNumber={setTransactions} key={"ddd"+(transactions.curPage + i)} pageno={transactions.curPage + i} active={transactions.curPage === (transactions.curPage + i)}/>)}    
                                        <button className="rounded-[4px]  w-[28px]  text-[14px] leading-[20px] py-2 flex items-center justify-center">..</button>
                                        <PageButton setPageNumber={setTransactions}  pageno={transactions.totalPage} active={transactions.curPage === transactions.totalPage}/>
                                    </>
                                    :
                                    <>
                                        <PageButton setPageNumber={setTransactions} pageno={1} active={transactions.curPage === 1}/>
                                        <button className="rounded-[4px]  w-[28px]  text-[14px] leading-[20px] py-2 flex items-center justify-center">..</button>
                                        {Array.from({length:9}, (_, i) => <PageButton setPageNumber={setTransactions} key={"ddd"+(transactions.curPage + i)} pageno={transactions.curPage + i} active={transactions.curPage === (transactions.curPage + i)}/>)}
                                    </>
                            
                            :
                            <>
                                {
                                    transactions.curPage === 1 ?
                                        [...Array(transactions.totalPage).keys()].map(pn=><PageButton setPageNumber={setTransactions} pageno={pn+1} active={transactions.curPage === pn+1}/>)  
                                    :
                                    <>
                                        <PageButton setPageNumber={setTransactions} pageno={1} active={transactions.curPage === 1}/>
                                        <button className="rounded-[4px]  w-[28px]  text-[14px] leading-[20px] py-2 flex items-center justify-center">..</button>
                                        {Array.from({ length:(transactions.totalPage+1) - transactions.curPage  }, (_, i) => <PageButton setPageNumber={setTransactions} key={"ddd"+(transactions.curPage + i)} pageno={transactions.curPage + i} active={transactions.curPage === (transactions.curPage + i)}/>)}
                                    </>
                                }   
                            </>



                        }

                    </div>

                    <button disabled={transactions.curPage == transactions.totalPage } onClick={()=>setTransactions(p=>{return {...p , curPage:(p.curPage+1)}})} className="ease-in-out disabled:opacity-50 active:scale-90 rounded-[4px] border-[1px] border-[#D9D9D9] flex gap-[6px] items-center px-[12px] py-[6px]">
                        <span>Next</span>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967Z" fill="#4D4D4D" />
                        </svg>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Payments