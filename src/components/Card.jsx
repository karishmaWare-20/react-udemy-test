function Card({title, description, imageUrl}){

    return (
        <>
              <div className="max-w-sm bg-white mt-8 rounded-xl border-2 border-gray-400 overflow-hidden shadow transition-shadow">
        <img className="w-full h-50 object-cover" src={imageUrl} alt="random image" />
        <div className='p-4'>
          <h2 className='text-lg font-semibold text-gray-900'>{title}</h2>
          <p className='text-gray-600 text-sm'>
          {description}
          </p>
          <button className='mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors'>Buy Now</button>
        </div>
       </div>
        
        </>
    );
}

export default Card;