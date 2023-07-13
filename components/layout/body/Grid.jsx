'use client'
import './Grid.scss'
// import Shirt from '@/assets/shirt.jpg'
import Image from 'next/image'


export default function picGrid() {
  return (
    <div className='grid-container'>
          <Image
            className='item-1'
            src='/assets/hmm.jpg'
            width={810}
            height={810}
            alt="Awsome Salmon Shirt"
          />
          <Image
            className='item-2'
            src='/assets/salmonCookies2.jpg'
            width={405}
            height={405}
            alt="Awsome Salmon Shirt"
          />
          <Image
            className='Item-3'
            src='/assets/salmonCookies.jpg'
            width={405}
            height={405}
            alt="Awsome Salmon Shirt"
          />
    </div>
  )
}