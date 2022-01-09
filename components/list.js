import { cursor } from "tailwindcss/defaultTheme";
import Link from "next/dist/client/link";

const list = ({ name }) => {
    return (
        <div>
            <Link href={name}>
                <div className="cursor-pointer flex items-center py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                >
                    <img src="https://s2.svgbox.net/octicons.svg?ic=dot&color=6b7280" width="26" height="26" />
                    <span className="mx-1">{name}</span>
                </div>
            </Link>
        </div>
    );
}

export default list;