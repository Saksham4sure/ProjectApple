import iphone from '../assets/iphonelarge.jpg'
import iphoneS from '../assets/iphonesmall.jpg'

const Secondpage = () => {
  return (
    <div className='pt-3'>
      <div className='w-full h-full relative '>
        <img className='h-[580px] object-cover hidden md:flex ' src={iphone} />
        <img className='h-[560px] object-cover flex md:hidden ' src={iphoneS} />
        <div className='absolute inset-0 flex items-center justify-start flex-col pt-8 md:pt-12 cursor-pointer'>
          <h1 className='text-4xl lg:text-[4vw] font-medium lg:font-bold pb-2'>iPhone</h1>
          <p className='text-lg sm:text-xl md:text2xl lg:text-3xl font-light'>Meet the iPhone 16 family.</p>
          <div className='flex gap-4 pt-5'>
            <a className='font-extralight tracking-wider text-white rounded-full py-2 px-5 text-sm lg:text-base bg-[#1871ed] hover:bg-[#2579ed]' href="#">Learn more</a>
            <a className='font-light tracking-wider text-[#2577ED] border border-[#2577ED] hover:text-white hover:bg-[#2577ED] rounded-full py-2 px-5 text-sm lg:text-base' href="#">Shop iPhone</a>
          </div>
          <p className='bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent text-xl cursor-pointer pt-5'>
            Build for Apple Intelligence.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Secondpage
