import { cursor } from "tailwindcss/defaultTheme";
import Link from "next/dist/client/link";

const list = ({ name }) => {
    return (
        <div>
            <Link href={name}>
                <div class="cursor-pointer flex items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                >
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                        </path>
                    </svg>
                    <span class="mx-3">{name}</span>
                </div>
            </Link>
        </div>
    );
}

export default list;