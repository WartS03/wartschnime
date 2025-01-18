import { DataAnime } from "./Components/DataAnime"
const Home = () => {

  return (
      <main className="text-white mx-auto mb-auto mt-8">
        <div className="mx-3 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-2xl text-white font-semibold border-l-4 border-l-[#E94560] pl-2 pt-1">LATEST ANIME</h1>
            <h1 className="text-xs tracking-[.50em]">VIEW ALL →</h1>
          </div>
          <DataAnime />
        </div>
      </main>
  )
}

export default Home