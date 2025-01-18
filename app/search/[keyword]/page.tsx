import { PageProps } from '@/.next/types/app/search/[keyword]/page';


const Page = async ({ params }: PageProps) => {
  const { keyword } = await params;
  const response = await fetch(`https://wartsanimeapi.vercel.app/api/search?s=${keyword}`);
  const searchAnime = await response.json();
  return (
    <main className="text-white mx-auto w-full mb-auto mt-8">
      <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl text-white font-semibold border-l-4 border-l-[#E94560] uppercase pl-2 pt-1">{decodeURIComponent(keyword)}</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {
            searchAnime.map((item: any) => (
              <div className="product__item" key={item.linkid}>
                <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${item.image})` }}>
                  <div className={`status ${item.status === "Ongoing" ? "bg-green-900" : "bg-red-600"}`}>
                    {item.status}
                  </div>
                  <div className="score">
                    <i className="fa fa-star"></i>
                    <span>{item.score}</span>
                  </div>
                  <div className="view">
                    <i className="fa fa-eye"></i>
                    <span>{item.view}</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <ul>
                    {
                      item.genre.map((genre: any, index: number) => (
                        <li key={index}>{genre}</li>
                      ))
                    }
                  </ul>
                  <h5 className="my-auto"><a href="#">{item.title}</a></h5>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default Page