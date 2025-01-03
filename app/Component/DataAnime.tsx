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

  if (loading) return <div suppressHydrationWarning>Loading...</div>
  return (
    <div suppressHydrationWarning className='columns-1 gap-1 sm:columns-2'>
      {anime.data.map((item: any) => (
        <div suppressHydrationWarning className="mb-3 text-white flex" key={item.id}>
            <Link className="hover:font-bold truncate p-2 bg-teal-700 rounded-md" onClick={() => handleOpenModal(item.id)} type='button' href="#">
              {item.title}
            </Link>
        </div>
      ))}
      <Modal data={selectedAnime} />
    </div>
  )
}