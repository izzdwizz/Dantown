import Image from 'next/image';
import React from 'react';
import logo_img from '../../public/assets/images/footer_img.png';

const Footer = () => {
	return (
		<section className=' w-full bg-[#000070] footer-list'>
			<div className='w-full px-[2rem] md:px-24 py-12 grid grid-container gap-x-[35px] md:gap-[25px] '>
				<div className='w-full flex flex-col pb-4 item0'>
					<Image
						src={logo_img}
						width={287.38}
						height={97.03}
						loading='lazy'
						className='md:w-[287.38px] h-[36.13px] w-[107px] object-contain md:h-[97.03px] '
						alt='Footer logo'
					/>
					<p className='text-white/60 text-[20px] mt-[1.89rem] md:mt-[2.5rem] pb-24 flex h-full justify-start'>
						Everything crypto...
					</p>
					<div className='md:flex flex-col items-start text-left w-full hidden'>
						<h4 className='text-white font-[500] text-[24px]'>Contact us</h4>
						<ul className='flex flex-col text-white/60 gap-y-12 mt-12'>
							<li>Get in touch is easy</li>
							<li>support@godantown.com</li>
							<li className='text-[24px]'>
								Office 6A, Dlin plaza, No 152 NTA/Mgbuoba road Port Harcourt
								Nigeria
							</li>
							<li className='text-[24px]'>
								8 The Green, SteR, Dover, DE 19901. United State
							</li>
						</ul>
					</div>
				</div>
				{/* Col 1 */}
				<div className='flex flex-col items-start text-left md:items-center md:text-center w-full item1'>
					<h4 className='text-white font-[500] text-[24px]'>About us</h4>
					<ul className='flex flex-col text-white/60 gap-y-12 mt-12 '>
						<li>Who We Are</li>
						<li>Vision & Mission</li>
						<li>Core Values</li>
						<li>Terms & Conditions</li>
					</ul>
				</div>

				{/* Col 2 */}
				<div className='flex flex-col items-center text-center w-full item2'>
					<h4 className='text-white font-[500] text-[24px]'>Lorem ipsum</h4>
					<ul className='flex flex-col text-white/60 gap-y-12 mt-12'>
						<li>Products & Services</li>
						<li>Ambassadors</li>
						<li>Careers</li>
					</ul>
				</div>
				{/* Col 3 */}
				<div className='flex flex-col items-center text-center w-full item3'>
					<h4 className='text-white font-[500] text-[24px]'>Others</h4>
					<ul className='flex flex-col text-white/60 gap-y-12 mt-12'>
						<li>Blog</li>
						<li>FAQ</li>
					</ul>
				</div>
				{/* Col 4 */}
				<div className='flex flex-col items-center text-center w-full item4'>
					<h4 className='text-white font-[500] text-[24px]'>Social</h4>
					<ul className='flex flex-col text-white/60 gap-y-12 mt-12'>
						<li>Telegram {'(Community)'}</li>
						<li>Facebook</li>
						<li>Instagram</li>
						<li>Twitter</li>
						<li>Linkedin</li>
						<li>Youtube</li>
					</ul>
				</div>
				{/* Col 5 */}
				<div className='flex flex-col items-center text-center w-full item5 md:hidden '>
					<h4 className='text-white font-[500] text-[24px]'>Contact us</h4>
					<ul className='flex flex-col text-white/60 gap-y-12 mt-12'>
						<li>Get in touch is easy</li>
						<li>support@godantown.com</li>
						<li className='text-[24px]'>
							Office 6A, Dlin plaza, No 152 NTA/Mgbuoba road Port Harcourt
							Nigeria
						</li>
						<li className='text-[24px]'>
							8 The Green, SteR, Dover, DE 19901. United State
						</li>
					</ul>
				</div>
			</div>
			{/* Bottom footer */}
			<div className='border-t-[1px] border-white/60 w-full'>
				<div className='px-[1.5rem] md:px-24 w-full flex justify-between items-start mt-11  pb-24'>
					<p className='text-[#F0FBFD] font-[400] text-[10px] md:text-[18px] leading-[22px]'>
						Everything Crypto...
					</p>
					<p className='text-[#F0FBFD] font-[400] text-[10px] md:text-[18px] leading-[22px] text-right'>
						© 2023 Dantownms.com. All rights reserved
					</p>
				</div>
			</div>
		</section>
	);
};

export default Footer;
