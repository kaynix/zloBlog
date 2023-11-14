import Link from "next/link"

export default function ShopControLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
<div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-100">
      {/* <div className="flex-none"> */}
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      {/* </div>  */}
      <div className="flex-1 px-2 mx-2"></div>
    </div>
    {children}
    
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
      <li><Link href={"/shop_control/orders"}><label htmlFor="my-drawer-3" className="drawer-button">Orders</label></Link></li>
      <li><Link href={"/shop_control/uploader"}><label htmlFor="my-drawer-3" className="drawer-button">Uploader</label></Link></li>
      <li><Link href={"/shop_control/addPost"}>Post a post</Link></li>
    </ul>
  </div>
</div>
  )
}
