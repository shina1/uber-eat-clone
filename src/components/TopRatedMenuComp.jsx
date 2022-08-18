import React, { useState } from 'react';
import {foodData} from '../utils/foodData.js';

const TopRatedMenuComp = () => {
    const [data, setData] = useState(() => foodData)
    
    // filter by category

    const filterByCategory = (category) => {
        setData(
            foodData.filter((item) => {
                return item.category === category
            })
        )
    }

    // filter by price

    const filterItemsByPriceBelow = (price) => {
        setData(
            foodData.filter((item) => {
                return item.price <= price
            }) 
        )
    }

    const filterItemsByPriceAbove = (price) => {
        setData(
            foodData.filter((item) => {
                return item.price >= price
            }) 
        )
    }
  return (
    <section className='max-w-[1640px] mx-auto px-4 py-12'>
      <h2 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h2>
      {/* filter row */}
      <div className='flex flex-col lg:flex-row justify-between my-2'>
        {/* filter type */}
        <div>
            <p className='font-bold text-gray-700'>Filter Type</p>
            <div className='flex justify-between flex-wrap max-w-[680px] my-1'>
                <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => setData(foodData)}>All</button>
                <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterByCategory('burger')}>Burgers</button>
                <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterByCategory('chicken')}>Chicken</button>
                <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterByCategory('cake')}>Cake</button>
                <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterByCategory('fast food')}>Fast Foods</button>
                <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterByCategory('local')}>Local</button>
                <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterByCategory('pizza')}>Pizza</button>
                <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterByCategory('salad')}>Salads</button>
                <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterByCategory('vegan')}>Vegan</button> 
            </div>
        </div>
        {/* filter price */}
        <div >
            <p className='font-bold text-gray-700'>Filter Price</p>
            <div className='my-1'>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterItemsByPriceBelow(10)}>Less Than $10</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterItemsByPriceAbove(10)}>Above $10</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterItemsByPriceBelow(30)}>Less Than $50</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterItemsByPriceAbove(50)}>Above $50</button>
            </div>
        </div>
      </div>
      {/* display food data */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {
            data.map((data)=> (
                <div key={data.id} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
                    <img src={data.image} alt={data.name} className='w-full h-[200px] object-cover rounded-t-lg cursor-pointer' />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{data.name}</p>
                        <p className='text-center font-bold'><span className='bg-orange-500 text-white rounded-lg px-4 py-1 mx-1'>${data.price}</span></p>
                    </div>
                </div>
            ))
        }
      </div>
    </section>
  )
}

export default TopRatedMenuComp
 