import promo1 from '../assets/1stpromo.jpg'
import promo2 from '../assets/2ndpromo.jpg'
import promo3 from '../assets/3rdpromo.jpg'
import promo4 from '../assets/4thpromo.jpg'
import promo5 from '../assets/5thpromo.jpg'
import promo6 from '../assets/applecard.jpg'
import ipadair from '../assets/airipad.png'


const Promopage = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-3 w-full pt-3'>
                <div className='relative w-full md:w-1/2 h-[550px] overflow-hidden'>
                    <img src={promo1} className='object-cover w-full h-[550px] scale-110 mt-6' />
                    <div className='absolute inset-0 flex items-center justify-end flex-col pb-8'>
                        <p className='text-xl'>Apple Worldwide Developers Conference.</p>
                        <p className='text-xl pb-5'>Join us online June 9-13.</p>
                        <a className='font-extralight tracking-wider text-white rounded-full py-2 px-5 text-xs bg-[#1871ed] hover:bg-[#2579ed]' href="#">Learn more</a>
                    </div>
                </div>
                <div className='relative w-full md:w-1/2 h-[550px] overflow-hidden'>
                    <img src={promo2} className='object-cover w-full h-[550px] ' />
                    <div className='absolute inset-0 flex items-center justify-start flex-col pt-8 md:pt-12 cursor-pointer'>
                        <h1 className='flex items-center text-4xl font-bold'><i class="ri-apple-fill pb-1"></i>WATCH</h1>
                        <p className='text-[18px] font-light text-center'>SERIES 10</p>
                        <p className='text-xl font-light text-center'>Thinstant classic.</p>
                        <div className='flex gap-4 pt-5'>
                            <a className='font-extralight tracking-wider text-white rounded-full py-2 px-5 text-xs bg-[#1871ed] hover:bg-[#2579ed]' href="#">Learn more</a>
                            <a className='font-light tracking-wider text-[#2577ED] border border-[#2577ED] hover:text-white hover:bg-[#2577ED] rounded-full py-2 px-5 text-xs' href="#">Shop iPhone</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-3 w-full pt-3'>
                <div className='relative w-full md:w-1/2 h-[550px] overflow-hidden'>
                    <img src={promo3} className='object-cover w-full h-[550px]' />
                    <div className='absolute inset-0 flex items-center justify-start flex-col pt-12 cursor-pointer'>
                        <h1 className='flex items-center text-4xl font-medium'>Apple</h1>
                        <h1 className='flex items-center text-4xl font-medium'>Design Awards</h1>
                        <p className='text-lg'>Honoring the year's best</p>
                        <p className='text-lg pb-3'>in app and game design.</p>
                        <a className='font-extralight tracking-wider text-white rounded-full py-2 px-5 text-xs bg-[#1871ed] hover:bg-[#2579ed]' href="#">View the winners</a>
                    </div>
                </div>
                <div className='relative w-full md:w-1/2 h-[550px] overflow-hidden'>
                    <img src={promo6} className='object-cover w-full h-[550px] ' />
                    <div className='absolute inset-0 flex items-center justify-start flex-col pt-8 md:pt-12 cursor-pointer'>
                        <h1 className='flex items-center text-4xl font-medium text-center'><i class="ri-apple-fill text-3xl pb-1"></i>Card</h1>
                        <p className='text-xl font-light text-center'>Get up to 3% Daily Cash Back</p>
                        <p className='text-xl font-light text-center'>with every purchase.</p>
                        <div className='flex gap-4 pt-5'>
                            <a className='font-extralight tracking-wider text-white rounded-full py-2 px-5 text-xs bg-[#1871ed] hover:bg-[#2579ed]' href="#">Learn more</a>
                            <a className='font-light tracking-wider text-[#2577ED] border border-[#2577ED] hover:text-white hover:bg-[#2577ED] rounded-full py-2 px-5 text-xs' href="#">Apply now</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Promopage
