import React from 'react'
import { cardContent } from '../utils/cardContent'
// import cardImage from '../assets/images/'
import CardComponent from './Re-UseableComponents/CardComponent'

const HeadlineComponent = () => {
  return (
    <section className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* headline cards */}
        {
         cardContent ? cardContent.map((content)=>(
            <CardComponent image={content.image} topText={content.lText} sText={content.sText} key={content.id}/>
          )) : "Loading Content..."
        }
    </section>
  )
}

export default HeadlineComponent
