import hero from '../assets/herolarge.jpg'
import heroS from '../assets/herosmall.jpg'

const Thirdhero = () => {
  return (
    <div className='pt-3'>
      <div className='h-full w-full relative'>
        <img className='h-[580px] object-cover w-full hidden md:flex' src={hero}/>
        <img className='h-[560px] object-cover w-full md:hidden flex' src={heroS}/>
        <div className='absolute inset-0 flex items-center justify-start flex-col pt-8 md:pt-12 cursor-pointer'>
            <h1 className='flex items-center text-4xl lg:text-[4vw] pb-2'><i class="ri-apple-fill"></i>Trade In</h1>
            <p className='text-lg sm:text-xl md:text2xl lg:text-3xl font-light'>Get extra credit toward a new</p>
            <p className='text-lg sm:text-xl md:text2xl lg:text-3xl font-light'>iPhone when you trade in.</p>
            <p className='text-[#6E6E73] py-4'>Now through 6.18</p>
            <a className='font-extralight tracking-wider text-white rounded-full py-2 px-5 text-sm lg:text-base bg-[#1871ed] hover:bg-[#2579ed]' href="#">Get your estimate</a>
        </div>
      </div>
    </div>
  )
}

export default Thirdhero
