import Link from "next/link";

export default function Header() {
    return (<>
        <Link href={"/"}>
            <h1 className="text-3xl font-bold underline text-center">
                Ахуительний блог злого Константина
            </h1>
        </Link>

        <Link href={"/blogpost"}>Post</Link>
    </>)
}