import { Link } from 'react-router'

const Card = ({contest}) => {
  const {_id, name, image, price, category, quantity}= contest || {}
  return (
    <Link
      to={`/contest/${_id}`}
      className='col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl'
    >
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
        >
          <img
            className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
            src={image}
          />
          <div
            className='
              absolute
              top-3
              right-3
            '
          ></div>
        </div>
        <div className='font-semibold text-lg'>{name}</div>
        <div> <span className='bg-amber-400 rounded py-1 px-0.5'>Category: </span> {category}</div>
        <div className=''>Available: {quantity}</div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-medium text-sm'> Price: ${price}</div>
        </div>
      </div>
    </Link>
  )
}

export default Card
