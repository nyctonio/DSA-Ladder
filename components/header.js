import Link from "next/dist/client/link";
import Logo from "assets/Logo3.svg";
import Image from "next/image";


const header = ({ toggle, toggleMenu }) => {
    const toggleState = () => {
        toggleMenu(!toggle);
    };

    return (
        <header class="flex justify-between items-center py-1 px-6 bg-white border-b-4 border-indigo-600">
            <div class="flex items-center">
                <button onClick={toggleState} class="text-gray-500 focus:outline-none">
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
                <a target='_blank' href='https://linktr.ee/thecodemaniac'>
                    <div className="mr-3 cursor-pointer">
                        <svg viewBox="-23.044000000000004 -18.006999999999998 10828.765 2026.6576107229826" xmlns="http://www.w3.org/2000/svg" width="100" ><path d="M2354.161 1301.182L1668.091 54.019c-39.63-72.025-143.129-72.025-182.749 0l-302.8 550.443 383.266 696.72a85.084 85.084 0 0 1 10.73 47.037c-3.122 46.472-45.124 87.316-102.054 87.34h.047c-.036 0-.061.011-.1.011h-124.07v475.586a88.843 88.843 0 0 0 88.844 88.844h275.032a88.843 88.843 0 0 0 88.843-88.843v-475.6h459.7c75.943.002 125.341-72.636 91.381-134.375z" fill="#28bf7b" /><path d="M879.734 54.02c-39.621-72.027-143.119-72.027-182.749 0L10.915 1301.183c-33.959 61.738 15.437 134.376 91.377 134.376H562v475.6A88.843 88.843 0 0 0 650.839 2000h275.032a88.843 88.843 0 0 0 88.843-88.843v-475.586H890.646c-.035 0-.062-.012-.1-.012h.047c-56.93-.023-98.932-40.868-102.054-87.34a85.079 85.079 0 0 1 10.729-47.036l383.267-696.72z" fill="#39e09b" /><path d="M3719.186 228.4c23.837 0 47.668 15.891 47.668 47.669v158.887c0 23.837-15.892 47.668-47.668 47.668h-166.832q-47.664 0-47.668-47.668V276.071c0-23.832 15.892-47.669 47.668-47.669zm6506.519 619.663c-103.362 0-190.591 39.723-246.361 111.222q-95.329 107.248-95.331 238.331h683.376c-8.1-95.253-31.776-182.72-87.546-246.276-55.53-71.497-142.999-103.275-254.138-103.275zm-1382.406 0c-103.275 0-190.661 39.723-246.43 111.222q-95.1 107.248-95.177 238.331h683.216c-7.94-95.253-31.694-182.72-87.386-246.276-55.607-71.497-143.155-103.275-254.222-103.275zm-778.621-150.939c23.831 0 55.447 0 79.438 7.939 23.916 7.946 31.862 31.784 31.862 47.669l-23.837 143c-7.941 23.832-31.695 39.722-55.609 31.777-15.808 0-31.616-7.945-55.53-7.945-150.863 0-230.309 103.278-230.309 309.831V1928.5c0 23.833-15.89 47.745-47.745 47.745h-151.022c-23.831 7.866-39.724-8.023-39.724-39.8V760.678c0-23.831 15.893-47.669 39.724-47.669h135.053c23.837 0 47.668 15.892 47.668 47.669v95.332h7.946c23.908-47.666 63.632-87.386 111.139-119.163 47.745-31.784 95.331-39.723 150.946-39.723zm2169.05-47.83c166.907 0 309.747 63.561 413.107 182.724 103.277 119.165 158.886 286.077 158.886 492.551v23.992c0 23.834-15.893 47.666-47.824 47.666h-826.215c-23.993 0-47.746 23.913-47.746 47.825 8.024 87.389 39.722 166.833 87.47 230.229 63.553 71.5 142.993 111.221 254.061 111.221q83.528 0 143.152-23.833c39.724-15.889 79.446-39.722 103.278-63.555 31.622-31.778 47.668-55.611 63.555-71.5 8.023-7.944 15.891-23.832 23.837-31.777 15.885-31.778 47.662-39.722 71.494-23.833l103.277 79.443c15.89 15.889 23.837 39.722 8.029 55.611-47.747 71.5-111.145 135.055-182.8 190.665-87.392 55.531-198.614 87.389-317.776 87.389-174.7 0-317.776-63.555-428.838-182.721-111.223-119.166-166.992-286.077-166.992-484.687 0-206.633 55.609-365.521 166.992-484.686 111.062-119.163 246.277-182.724 421.053-182.724zm-1382.244 0c166.915 0 309.753 63.561 413.03 182.724C9367.868 951.183 9423.4 1118.1 9423.4 1324.569v23.992c0 23.834-15.808 47.666-47.663 47.666h-826.215c-23.837 0-47.668 23.913-47.668 47.825 7.946 87.389 39.724 166.833 87.386 230.229 63.638 71.5 143.082 111.221 254.221 111.221q83.414 0 143-23.833c39.722-15.889 79.444-39.722 103.354-63.555 31.7-31.778 47.745-55.611 63.476-71.5 8.1-7.944 15.97-23.832 23.993-31.777 15.568-31.778 47.345-39.722 71.183-23.833l103.354 79.443c15.808 15.889 23.915 39.722 8.023 55.611-47.745 71.5-111.139 135.055-182.721 190.665-87.548 55.531-198.608 87.389-317.77 87.389-174.777 0-317.776-63.555-429-182.721s-166.83-286.077-166.83-484.687c0-206.633 55.53-365.521 166.83-484.686s246.278-182.724 421.131-182.724zm-3853.255 159.05c79.446 87.388 127.192 198.609 127.192 349.473v786.414c0 23.833-15.891 47.746-47.746 47.746h-143c-23.831 0-47.67-15.81-47.67-47.746v-723.018c0-214.419-87.461-325.8-270.108-325.8-87.384 0-166.83 23.833-222.438 79.444s-79.446 127.189-79.446 214.5v754.715c0 23.834-15.891 47.667-47.746 47.667h-143c-31.7-7.626-47.585-23.515-47.585-55.293V760.678c0-23.831 15.885-47.669 47.663-47.669h143c23.838 0 47.668 15.892 47.668 47.669v79.443h7.947c47.662-63.555 127.107-119.166 246.275-150.943h7.94c182.725-23.831 325.725 15.885 421.054 119.166zm1954.4-405.165c23.831 0 47.662 15.891 47.662 47.669v262.161H7270.4c23.837 0 47.668 15.892 47.668 47.669V871.9c0 23.834-15.808 47.666-47.668 47.666h-270.112v643.5c0 71.421 7.947 119.166 31.778 150.864 23.752 31.857 63.476 47.746 127.029 47.746h55.615c23.831 0 47.662 15.889 47.662 47.666v135.048c0 23.833-15.808 47.666-47.662 47.666h-71.5c-134.975 0-230.229-31.619-293.861-95.253-55.692-79.523-87.47-174.856-87.47-309.911V919.564h-143c-23.831 0-47.824-15.888-47.824-47.666v-111.22c8.1-23.831 23.993-47.669 47.824-47.669h150.946V450.848c0-23.832 15.808-47.669 47.745-47.669zM3703.3 713.009c23.831 0 47.662 15.892 47.662 47.669V1944.39c0 23.833-15.808 47.666-47.662 47.666h-143c-23.832-7.944-47.669-23.833-47.669-55.611V760.678c0-23.831 23.837-47.669 47.669-47.669zm-572-476.661c23.838 0 47.67 15.891 47.67 47.669V1944.39c0 23.833-15.892 47.666-47.746 47.666h-150.861c-23.837-7.944-47.669-23.833-47.669-55.611V284.017c0-23.838 15.892-47.669 47.669-47.669zm2462.758 0c23.831 0 47.663 15.891 47.663 47.669v1000.989h7.944l500.5-548.159c0-15.892 15.885-23.838 23.831-23.838h182.723c39.716 0 55.607 47.669 31.693 71.5l-365.361 413.107c-15.885 15.889-15.885 39.722 0 55.611l444.884 667.328c15.893 31.7 0 71.42-39.716 71.42h-158.892c-15.808 0-31.616-8.024-39.722-15.81L5824.443 1372.4h-7.943l-166.832 182.72c-6.81 6.946-7.777 13.658-7.919 25.44l-.025 371.779c0 23.833-15.887 47.666-47.663 47.666h-143c-23.831-15.888-47.67-31.777-47.67-63.555V284.017c0-23.838 15.892-47.669 47.67-47.669z" fill="#263238" fill-rule="evenodd" />
                        </svg>
                    </div>
                </a>
            </div >
        </header >
    );
}

export default header;


// https://tailwindcomponents.com/component/dashboard-template/landing