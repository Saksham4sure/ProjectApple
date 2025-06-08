import mac from '../assets/Macbook.jpg'
import macS from '../assets/Macsmall.jpg'

const Landingpage = () => {
    return (
        <div className=''>
            <div className='w-full h-full relative'>
                <img className='pt-10 h-[620px] object-cover hidden md:flex ' src={mac} />
                <img className='pt-12 w-full h-[580px] object-cover flex md:hidden ' src={macS} />
                <div className='absolute inset-0 flex items-center justify-between text-black flex-col pt-20'>
                    <div className='flex flex-col items-center cursor-default'>
                        <h1 className='text-4xl lg:text-[4vw] font-medium lg:font-bold pb-2'>MacBook Air</h1>
                        <p className='text-lg sm:text-xl md:text2xl lg:text-3xl font-light'>Sky blue color.</p>
                        <p className='text-lg sm:text-xl md:text2xl lg:text-3xl font-light'>Sky high performance with M4.</p>
                        <div className='flex gap-4 pt-5'>
                            <a className='font-extralight tracking-wider text-white rounded-full py-2 px-5 text-sm lg:text-base bg-[#1871ed] hover:bg-[#2579ed]' href="#">Learn more</a>
                            <a className='font-light tracking-wider text-[#2577ED] border border-[#2577ED] hover:text-white hover:bg-[#2577ED] rounded-full py-2 px-5 text-sm lg:text-base' href="#">Buy</a>
                        </div>
                    </div>
                    <div className='pb-10 text-xl cursor-pointer'>
                        <p className='bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent'>
                            Build for Apple Intelligence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage
