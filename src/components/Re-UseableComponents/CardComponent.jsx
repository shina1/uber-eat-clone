import React from 'react'

const CardComponent = ({image, topText, sText}) => {
  return (
    <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>{topText}</p>
          <p className='px-2'>{sText}</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img  className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={image} alt="card display" />
      </div>
  )
}

export default CardComponent
