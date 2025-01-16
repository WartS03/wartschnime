import { DataAnime } from "./Components/DataAnime"
const Home = () => {

  return (
      <main className="mb-auto mt-8">
        <div className="mx-3 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl underline">Latest Anime : </h1>
          <DataAnime />
        </div>
      </main>
  )
}

export default Home