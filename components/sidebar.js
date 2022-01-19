import List from "./list";
import Sidedivider from "./sidedivider"
import Script from 'next/script'
import { useState, useEffect } from "react";

const sidebar = ({ setQuestion, toggle, toggleMenu }) => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    const triggerMenu = () => {
        toggleMenu(false);
    }
    const triggerQuestion = (set) => {
        setQuestion(set);
    }
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            if (window.innerWidth < 1024) {
                // console.log('done');
                toggleMenu(false);
            }
            if (window.innerWidth > 1024) {
                // console.log('done');
                toggleMenu(true);
            }
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    // console.log(windowSize);
    return (
        toggle ? <div>
            <Script src={"https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"} defer />

            <div className="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden">
                <img onClick={triggerMenu} className="cursor-pointer absolute right-0 mt-3 mr-3" src="https://s2.svgbox.net/hero-outline.svg?ic=x&color=fff" width="32" height="32" />
            </div>
            <div className="h-screen fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
                <div className="flex items-center justify-center mt-8">
                    <div className="flex items-center">
                        {/* <span className="text-white text-2xl mx-2 font-semibold">Thecodermaina</span> */}
                    </div>
                </div>
                <nav className="mt-10">
                    <Sidedivider name={'TOPIC'} />
                    <List name={'Math-i'} />
                    <List name={'Math-ii'} />
                    <List name={'Strings-i'} />
                    <List name={'Strings-ii'} />
                    <List name={'Sortings'} />
                    <List name={'SOON...'} />
                    <Sidedivider name={'RATING'} />
                    <List name={'800-MISC'} />
                    <List name={'900-MISC'} />
                    <List name={'SOON...'} />
                    <Sidedivider name={'LEVEL'} />
                    <List name={'EASY'} />
                    <List name={'SOON...'} />
                </nav>
                <div className="text-white bottom-0"></div>
            </div>
        </div > : <div></div>
    )
}

export default sidebar;