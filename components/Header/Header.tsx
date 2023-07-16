import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="p-2 flex flex-row flex-grow justify-between border-4 rounded-lg border-gray-600">
            <Link href={"/"}><Image src={'/logo.svg'} alt={""} width={445} height={128}/></Link>
            <Link href={"/"}><h1 className="text-2xl">Новини</h1></Link>
            <Link href={"/shop"}><h1 className="text-2xl">Товари</h1></Link>
            <Link href={"/about"}><h1 className="text-2xl">Про нас</h1></Link>
        </div>)
}