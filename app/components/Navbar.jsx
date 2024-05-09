import Image from 'next/image';
import menu from '../../public/assets/images/menu.png';
import download from '../../public/assets/images/download.png';
import nav_button from '../../public/assets/images/nav-btn.png';

import logo from '../../public/assets/images/logo.png';

export default function Navbar() {
	return (
		<div className=' border-b-[1px] md:border-[#13306b4b] border-[#13306bfd] px-[2rem] md:px-[6rem]'>
			<nav className='flex justify-between w-full items-center md:h-[193px] px-2 p-7 md:p-4 md:bg-transparent  md:shadow-none sticky md:relative top-6'>
				<Image
					src={logo}
					alt='company logo'
					className='md:w-[287.38px] w-[80px] h-[27px] md:h-[97.03px]'
				/>
				<div className='md:flex flex-row gap-4 relative right-[7rem] hidden '>
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
				<div className='flex gap-3'>
					<button className='border-2 border-[#000070] rounded-[12px] gap-3 md:gap-[10px] py-2 px-4 md:h-[79px] md:w-[245px] md:px-[32px] md:py-[12px] flex items-center justify-center'>
						<Image src={download} className=' p-1 md:p-0' alt='company logo' />
						<p className='font-[700] text-[8px] md:text-[22px]'>Download Now</p>
					</button>

					<Image
						src={menu}
						width={23}
						height={23}
						className='flex md:hidden min-w-[23px] min-h-[23px]'
						alt='company logo '
					/>
				</div>
			</nav>
		</div>
	);
}
