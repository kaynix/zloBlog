import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="p-2 flex flex-row justify-between border-4 rounded-lg border-gray-600">
            <Link href={"/"}><Image src={'/logo.svg'} alt={""} width={445} height={128}/></Link>
            <Link href={"/blogpost"}><h1 className="text-2xl">blogpost</h1></Link>
            <Link href={"/shop"}><h1 className="text-2xl">shop</h1></Link>
            <Link href={"/about"}><h1 className="text-2xl">about</h1></Link>
        </div>)
}