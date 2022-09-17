import React from 'react'
import { categories } from '../utils/foodData'

const CategoryComp = () => {
  return (
    <section className='max-w-[1640px] mx-auto px-4 py-12'>
      <h2 className='text-orange-600 text-bold text-center text-4xl'>Top Rated Menu Items</h2>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 py-6 my-2'>
        {
            categories.map((item) => (
                <div key={item.id} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'>
                    <h3 className='font-bold sm:text-xl'>{item.name}</h3>
                    <img src={item.images} alt={item.name} className='w-20 h-[70px] cursor-pointer object-contain' />
                </div>
            ))
        }
      </div>
    </section>
  )
}

export default CategoryComp
