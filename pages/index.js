import Link from "next/dist/client/link";
import A from "assets/1.svg";
import B from "assets/1.svg";
import C from "assets/1.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main class="overflow-y-scroll md:overflow-y-hidden grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5">
        <div>
        <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-200 mb-5">'While(TheCodemaniac){Code++}'</h1>
          {/* <p class="mb-2 text-lg text-gray-200 xl:text-xl">For writers, a random sentence can help them get their creative juices flowing. </p> */}

          <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-200 mb-5">LADDERS FOR YOU...</h1>
          <section class="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <Link href="/Math-i">
              <div class="bg-gray-900 cursor-pointer shadow-lg rounded p-3">
                <div class="group relative">
                  {/* <img class="w-full md:w-72 block rounded" src="https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg" alt="" /> */}
                  <Image class="w-full md:w-72 block rounded" src={A} />
                  <div class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                    <div class="hover:scale-110 text-white cursor-pointer opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                      <img src="https://s2.svgbox.net/octicons.svg?ic=file-code&color=fff" width="32" height="32" /> Start Solving...
                    </div>
                  </div>
                </div>
                <div class="p-5">
                  <h3 class="text-white text-lg">TOPIC WISE..</h3>
                </div>
              </div>
            </Link>

            <Link href="/800-MISC">
              <div class="bg-gray-900 cursor-pointer shadow-lg rounded p-3">
                <div class="group relative">
                  {/* <img class="w-full md:w-72 block rounded" src="https://upload.wikimedia.org/wikipedia/en/c/ca/Tycho_-_Awake.png" alt="" /> */}
                  <Image class="w-full md:w-72 block rounded" src={B} />
                  <div class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                    <div class="hover:scale-110 text-white cursor-pointer opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                      <img src="https://s2.svgbox.net/octicons.svg?ic=file-code&color=fff" width="32" height="32" /> Start Solving...
                    </div>
                  </div>
                </div>
                <div class="p-5">
                  <h3 class="text-white text-lg">RATING WISE..</h3>
                </div>
              </div>
            </Link>

            <Link href="/EASY">
              <div class="bg-gray-900 mb-20 sm:mb-0 shadow-lg cursor-pointer rounded p-3">
                <div class="group relative">
                  {/* <img class="w-full md:w-72 block rounded" src="https://upload.wikimedia.org/wikipedia/en/f/f1/Tycho_-_Epoch.jpg" alt="" /> */}
                  <Image class="w-full md:w-72 block rounded" src={C} />
                  <div class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                    <div class="hover:scale-110 text-white  opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                      <img src="https://s2.svgbox.net/octicons.svg?ic=file-code&color=fff" width="32" height="32" /> Start Solving...
                    </div>
                  </div>
                </div>
                <div class="p-5">
                  <h3 class="text-white text-lg">LEVEL WISE..</h3>
                </div>
              </div>
            </Link>

          </section>
        </div>
      </main>
    </>
  )
}
