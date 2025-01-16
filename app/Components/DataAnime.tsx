'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {openModal,Modal} from './Modal'

export const DataAnime = () => {
  const [anime, setData] = useState<{ data: any[] }>({ data: [] })
  const [loading, setLoading] = useState(true);
  const [selectedAnime, setSelectedAnime] = useState<any>(null) 

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api')
      const result = await response.json()
      setData(result)
      setLoading(false)
    };

    fetchData()
  }, [])

  const handleOpenModal = async (id: string) => {
 
    setSelectedAnime(null)
    openModal()

    const response = await fetch(`api/anime/${id}`)
    const result = await response.json()
    setSelectedAnime(result)
  }
  return (
    <div className=''>
      {
        loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-100">
              <span className="loading loading-ring text-primary loading-xl"></span>
          </div>
        )
      }
      {anime.data.map((item: any) => (
        <a onClick={() => handleOpenModal(item.id)} key={item.id} className="cursor-pointer hover:scale-105">
          <div suppressHydrationWarning className="mb-3 mr-2 text-white amv rounded-lg" key={item.id}>
            <div className='rounded-lg relative overflow-hidden pdimg block'>
              <img decoding='async' className='imgfc' src={item.image} />
            </div>
            <div className="amvj">
              <h3 className='ibox1'>{item.title}</h3>
            </div>
            <div className="jamup">
              {item.rilis}
            </div>
          </div>
        </a>
      ))}
      <Modal data={selectedAnime} />
    </div>
  )
}