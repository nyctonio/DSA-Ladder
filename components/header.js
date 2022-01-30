import Link from "next/dist/client/link";
import Logo from "assets/Logo3.svg";
import Image from "next/image";
import Whatsapp from "assets/whatsapp.svg";
import Instagram from "assets/instagram.svg";
import Telegram from "assets/telegram.svg";


const header = ({ toggle, toggleMenu }) => {
    const toggleState = () => {
        toggleMenu(!toggle);
    };

    return (
        <header class="flex justify-between items-center py-1 px-6 bg-white border-b-4 border-indigo-600">
            <div class="flex items-center">
                <button onClick={toggleState} class="text-gray-500  focus:outline-none">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round"></path>
                    </svg>
                </button>

                <div class="relative w-full mx-4 lg:mx-0">
                    {/* <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            </path>
                        </svg>
                    </span> */}
                    {/* <input class="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600" type="text"
                        placeholder="Search" /> */}
                </div>
            </div>
            <Link href='/'>
                <div className="max-h-24 cursor-pointer font-mono text-2xl">
                    <Image
                        src={Logo}
                        height={60}
                        width={220}
                        alt="thecodemaniac"
                    />
                </div>
            </Link>
            <div class="flex items-center">

                <div className="flex">
                    <a target='_blank' href="https://linktr.ee/thecodemaniac">
                        <div className="mr-3 cursor-pointer">
                            <Image
                                src={Whatsapp}
                                height={30}
                                width={30}
                            />
                        </div>
                    </a>
                    <a target='_blank' href="https://www.instagram.com/thecodemaniac/">
                        <div className="mr-3 cursor-pointer">
                            <Image
                                src={Instagram}
                                height={30}
                                width={30}
                            />
                        </div>
                    </a>
                    <a target='_blank' href="https://t.me/thecodemaniac">
                        <div className="cursor-pointer">
                            <Image
                                src={Telegram}
                                height={30}
                                width={30}
                            />
                        </div>
                    </a>
                </div>
            </div >
        </header >
    );
}

export default header;


// https://tailwindcomponents.com/component/dashboard-template/landing