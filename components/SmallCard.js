import Image from 'next/image'

export default function SmallCard({img, location, distance}){
  return(
    <div className='flex item-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transitio transform duration-200 ease-out'>
      <div className='relative h-16 w-16'>
        <Image 
          className='rounded-lg'
          src={img}
          fill
        />
      </div>

      <div>
        <h2>{location}</h2>
        <h3 className='text-gray-500'>{distance}</h3>
      </div>
    </div>
  )
}
