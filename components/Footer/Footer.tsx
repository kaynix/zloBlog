import Link from "next/link";

export default function Footer() {
    return (
        <div className="mt-5 flex flex-row justify-center border-t-2">
            <Link href={"/"}><h1 className="text-lg">А-Б-З-К</h1></Link>
            {/* <Link href={"/blogpost"}><h1 className="text-2xl">blogpost</h1></Link>
            <Link href={"/about"}><h1 className="text-2xl">about</h1></Link>
            <Link href={"/shop"}><h1 className="text-2xl">shop</h1></Link> */}
        </div>)
}