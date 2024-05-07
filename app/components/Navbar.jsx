import Image from 'next/image';
import Link from 'next/link';
import download from '../../public/assets/images/download.png';
import nav_button from '../../public/assets/images/nav-btn.png';

import logo from '../../public/assets/images/logo.png';

export default function Navbar({ toggleMini }) {
	return (
		<div className=' border-b-[1px] border-[#13306b4b] px-[6rem]'>
			<nav className='flex justify-between w-full items-center md:h-[193px] px-2 md:p-4 md:bg-transparent  md:shadow-none sticky md:relative top-6'>
				<Image
					src={logo}
					alt='company logo'
					className='w-[287.38px] h-[97.03px]'
				/>
				<div className='flex flex-row gap-4 relative right-[7rem]'>
					<div className='text-[#333333] font-[400] text-[20px] leading-[24px] cursor-pointer  flex flex-row gap-2 items-center hover:text-[#858585] ease-in-out duration-300'>
						<p>Services</p>
						<Image src={nav_button} alt='company logo' />
					</div>
					<div className='text-[#333333] font-[400] text-[20px] leading-[24px] cursor-pointer flex flex-row gap-2 items-center hover:text-[#858585] ease-in-out duration-300'>
						<p>Company</p>
						<Image src={nav_button} alt='company logo' />
					</div>
					<div className='text-[#333333] font-[400] text-[20px] leading-[24px] cursor-pointer hover:text-[#858585] ease-in-out duration-300'>
						Our Blog
					</div>
					<div className='text-[#333333] font-[400] text-[20px] leading-[24px] cursor-pointer hover:text-[#858585] ease-in-out duration-300'>
						Ambassador
					</div>
				</div>
				<button className='border-2 border-[#000070] rounded-[12px] md:gap-[10px] md:h-[79px] md:w-[245px] md:px-[32px] md:py-[12px] flex items-center justify-center'>
					<Image src={download} alt='company logo' />
					<p className='font-[700]'>Download Now</p>
				</button>
			</nav>
		</div>
	);
}
