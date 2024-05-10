'use client';
import React from 'react';
import Image from 'next/image';
import { useAppContext } from '../context';
import Loader from './Loader';

const LatestBlog = () => {
	const { indexData } = useAppContext();
	const latestBlog = indexData?.[0];
	const secondBlog = indexData?.[1];
	const thirdBlog = indexData?.[2];

	if (!indexData) {
		return <Loader />;
	}
	return (
		<div className=' w-full flex flex-col'>
			<div className='flex flex-row justify-between items-center leading-[80px] md:w-full bg-transparent mt-[9rem] md:mt-[16rem] pb-8 px-[1.5rem] md:px-24'>
				<h2 className='text-[16px] md:text-[40px] leading-[19.5px] md:leading-[48.76px] tracking-[0.5px] font-[700] text-black'>
					Latest Blog
				</h2>

				<a
					href='#'
					className='font-[600] text-[16px] md:text-[20px] leading-[19.5px] md:leading-[24.38px] text-right text-[#00B9CD]'
				>
					View More
				</a>
			</div>

			<div
				className={`md:px-24 px-[1.5rem] grid grid-cols-1 md:grid-cols-2 mt-[2.2rem]  md:mt-[5rem] md:gap-[8rem] pb-4 w-full items-start`}
			>
				<div
					className={`overflow-hidden col-span-1 w-full h-full rounded-[25px] cursor-pointer flex flex-col items-start justify-start`}
				>
					<Image
						src={latestBlog?.image}
						alt='Article image'
						width={606}
						height={388}
						loading='lazy'
						className='rounded-[25px] md:w-[606px] w-full h-[203px] object-cover md:h-[388px] origin-left hover:scale-105 duration-500 ease '
					/>

					<div className='flex flex-col items-start justify-start w-full mt-12'>
						<h4 className='text-black font-[700] text-[16px] md:text-[40px] leading-[35px] md:leading-[70px] tracking-[.5px] w-full'>
							{latestBlog?.title}{' '}
						</h4>
						<span className='flex flex-col gap-6  mt-8 md:mt-12'>
							<h6 className='font-[500] text-[16px] leading-[19.5px] '>
								{latestBlog?.description}
							</h6>{' '}
							<p className='font-[500] text-[14px] leading-[17.01px] text-[#AAAAAA] '>
								{latestBlog?.date}
							</p>{' '}
						</span>

						<p className='mt-8 w-full text-black/60 md:leading-[35px] font-[400]  text-[10px] md:text-[16px] leading-[30px] text-left h-[8rem]  md:h-[6rem] text-ellipsis overflow-hidden'>
							{latestBlog?.body}
						</p>
					</div>
				</div>
				{/* Second latest article */}
				<div className='flex flex-col items-start justify-start w-full pt-[3.35rem] md:pt-0'>
					<h4 className='text-black font-[700] text-[16px] md:text-[40px] leading-[35px] md:leading-[70px] tracking-[.5px] w-full'>
						{secondBlog?.title}{' '}
					</h4>
					<span className='flex flex-col gap-6  mt-8 md:mt-12'>
						<h6 className='font-[500] text-[16px] leading-[19.5px] '>
							{secondBlog?.description}
						</h6>{' '}
						<p className='font-[500] text-[14px] leading-[17.01px] text-[#AAAAAA] '>
							{secondBlog?.date}
						</p>{' '}
					</span>

					<p className='mt-8 w-full text-black/60 md:leading-[35px] font-[400]  text-[10px] md:text-[16px] leading-[30px] text-left h-[8rem]  md:h-[6rem] text-ellipsis overflow-hidden'>
						{latestBlog?.body}
					</p>
					{/* Third latest article */}
					<div className='flex flex-col items-start justify-start w-full mt-12'>
						<h4 className='text-black font-[700] text-[16px] md:text-[40px] leading-[35px] md:leading-[70px] tracking-[.5px] w-full'>
							{thirdBlog?.title}{' '}
						</h4>
						<span className='flex flex-col gap-6  mt-8 md:mt-12'>
							<h6 className='font-[500] text-[16px] leading-[19.5px] '>
								{thirdBlog?.description}
							</h6>{' '}
							<p className='font-[500] text-[14px] leading-[17.01px] text-[#AAAAAA] '>
								{thirdBlog?.date}
							</p>{' '}
						</span>

						<p className='mt-8 w-full text-black/60 md:leading-[35px] font-[400]  text-[10px] md:text-[16px] leading-[30px] text-left h-[8rem]  md:h-[6rem] text-ellipsis overflow-hidden'>
							{thirdBlog?.body}
						</p>
					</div>
				</div>
				{/* Latest Article */}
			</div>
		</div>
	);
};

export default LatestBlog;
