import Image from 'next/image';
import React from 'react';
import popular_img from '../../public/assets/images/Rectangle 3.png';
import share_blog from '../../public/assets/images/share_blog.png';
const Popular = () => {
	return (
		<section className='flex flex-col'>
			<div className='flex flex-row justify-between items-center leading-[80px] md:w-full bg-transparent mt-0 md:mt-[147px] pb-8 px-[2rem] md:px-24'>
				<h2 className='text-[16px] md:text-[40px] leading-[48.76px] tracking-[0.5px] font-[700] text-black'>
					Popular Blog
				</h2>

				<a
					href='#'
					className='font-[600] text-[12px] md:text-[20px] leading-[24.38px] text-right text-[#00B9CD]'
				>
					View More
				</a>
			</div>

			<div className='flex justify-start items-center'>
				<Image
					src={popular_img}
					alt='popular blog bg-img'
					className='md:h-[667px] h-[368px] object-cover relative -z-10'
				/>
				<article className=' left-4 md:left-24 p-5 md:p-10 rounded-[20px] bg-white flex flex-col items-center justify-center text-left absolute w-[269px] h-[302px] md:w-[668px] md:h-[465px]'>
					<h4 className='text-black font-[600] pt-4 text-[13px] md:text-[32px] leading-[32px] md:leading-[40px] tracking-[0.5px] md:pb-8 w-full'>
						Ethereum market, the myth and the trend
					</h4>

					<p className='font-[400] text-[10px] md:text-[16px] leading-[19px] md:leading-[35px] md:pb-8 w-full text-black/60'>
						Lorem ipsum dolor sit amet consectetur. Egestas bibendum malesuada
						ultrices elementum. Tempor porta sit volutpat ridiculus nec leo
						lorem tristique at. Orci vestibulum felis habitasse cursus diam.
						Nulla vel turpis elementum dignissim donec neque at elit justo.
					</p>

					<div className='flex justify-between items-start w-full mt-3 md:mt-0 pb-4'>
						<span className='flex flex-col md:gap-8 justify-start items-start'>
							<h6 className='font-[500]  text-[10px] md:text-[16px] leading-[19.5px] '>
								Cryptocurrency
							</h6>{' '}
							<p className='font-[500] text-[8px] md:text-[14px] leading-[17.01px] text-[#AAAAAA] '>
								24 March, 2023
							</p>{' '}
						</span>

						<a href='#'>
							<Image
								src={share_blog}
								alt='share blog icon'
								className='scale-[.9]'
							/>
						</a>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Popular;
