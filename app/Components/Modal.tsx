import Image from "next/image";
interface ModalProps {
  data: any | null;
}
const Modal:React.FC<ModalProps> = ({data}) => {
  if (!data) return (
    <dialog id="myModal" className="modal">
      <div className="ddal w-11/12 max-w-5xl">
      <h1 className="text-center">
        <span className="loading loading-ring text-primary loading-xl"></span>
      </h1>
      </div>
    </dialog>
  )

    return (
      <dialog id="myModal" className="modal">
      <div className="modal-box w-9/12 max-w-full">
      <div className="flex">
        <Image 
          className="rounded-lg" 
          src={data.data.image} 
          alt={data.data.title} 
          width={340} 
          height={100} 
        />
        <div className=" mx-4">      
          <h4 className="font-bold text-xl">{data.data.title}</h4>
          <p className="py-2">{data.data.description}</p>
          <div className="flex mb-5">
          {Object.values(data.data.genres).map((genre: any, index: number) => (
              <h1 className="font-bold text-sm mr-2 p-2 bg-slate-900 rounded-md" key={index}>{genre}</h1>
          ))}
          </div>
          <div className="downl my-2 outline-dashed outline-2 rounded-md p-3">
            <div className="resso">
              <h1 className="text-base font-bold">DOWNLOAD</h1>
              {Object.entries(data.data.downloadLinks.resolution).map(([resolution, details]) => (
                <div key={resolution} className="grid grid-cols-8 gap-2">
                  <h1 className="font-bold bg-slate-900 my-2 p-1 px-3 text-center rounded-md">{resolution}</h1>
                  {Object.entries((details as { url: Record<string, string> }).url).map(([quality, link]) => (
                    <div key={`${resolution}-${quality}`} className="flex justify-center items-center">
                      <a
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="truncate hover:text-white p-3 hover:scale-105"
                      >
                        {quality} 
                      </a>
                    </div>
                  ))}
                </div>
              ))}
              </div>
          </div>
        </div>
      </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    )
  }
  
  // Function to open the modal
  const openModal = () => {
    const modal = document.getElementById('myModal') as HTMLDialogElement
    if (modal) {
      modal.showModal()// Show modal
    }
  };
  
  // Function to close the modal
  const closeModal = () => {
    const modal = document.getElementById('myModal') as HTMLDialogElement
    if (modal) {
      modal.close() // Close modal
    }
  }
  
  export { Modal, openModal, closeModal };