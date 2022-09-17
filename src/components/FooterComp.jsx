import React from 'react'

const FooterComp = () => {
  return (
    <section className='max-w-[1640px] mx-auto px-4 py-12 bg-black/90'>
        {/* inner container */}
        <div className='flex justify-between w-full lg:w-[80%] mx-auto'>
            <div>
            <h3 className='text-2xl sm:text-3xl lg:text-4xl px-2 text-white py-4'>
            Best <span className='font-bold'>Eats</span>
            </h3>
            </div>
            <div>
                <nav>
                    <ul className='flex flex-col text-white'>
                        <li className='text-xl py-4 flex'>Orders</li>
                        <li className='text-xl py-4 flex'>Favorites</li>
                        <li className='text-xl py-4 flex'>Wallet</li>
                        <li className='text-xl py-4 flex'>Help</li>
                    </ul>
                </nav>
            </div>
            <div>
                <nav>
                    <ul className='flex flex-col text-white'>
                        <li className='text-xl py-4 flex'>Promotions</li>
                        <li className='text-xl py-4 flex'>Best One</li>
                        <li className='text-xl py-4 flex'>Invite Friends</li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
  )
}

export default FooterComp
