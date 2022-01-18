
import Link from "next/dist/client/link";

export default function Home() {
  return (
    <>
      <main class="overflow-y-scroll md:overflow-y-hidden grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5">
        <div>
          <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">LADDERS FOR YOU...</h1>
          <section class="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <Link href="/Math-i">
              <div class="bg-gray-900 mb-20 md:mb-0 cursor-pointer shadow-lg rounded p-3">
                <div class="group relative">
                  <img class="w-full md:w-72 block rounded" src="https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg" alt="" />
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
                  <img class="w-full md:w-72 block rounded" src="https://upload.wikimedia.org/wikipedia/en/c/ca/Tycho_-_Awake.png" alt="" />
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
              <div class="bg-gray-900 shadow-lg cursor-pointer rounded p-3">
                <div class="group relative">
                  <img class="w-full md:w-72 block rounded" src="https://upload.wikimedia.org/wikipedia/en/f/f1/Tycho_-_Epoch.jpg" alt="" />
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
