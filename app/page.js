'use client'
import Image from 'next/image'
// import products from './products/page'
import {data} from '../constants/data'
import { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
export default function Home() {
  // const [data, setData] = useState()
  const {id}=useParams()
  useEffect(() =>{
    
  }, [])
  return (
    <main className="w-full h-screen pt-8 bg-slate-100">
      <h1 className="text-center text-5xl ">All products</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-3 mt-8 gap-8">

      {data && data?.map((item) => {
        return (
          <Link href={`/detail/${item.id}`} key={item.id} className='w-[320px] p-4 hover:scale-105 duration-300 bg-white  rounded-xl'>
            <Image
            alt='img'
              height={200}
              width={300}
              src={item.img}
              className='w-[300px] h-[200px] object-cover'
            />
            <h1 className='text-slate-600 text-2xl'>{ item.name}</h1>
          </Link>
        )
      })}
      </div>
        
    </main>
  )
}
