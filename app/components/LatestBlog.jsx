'use client';
import React from 'react';
import Image from 'next/image';
import { useAppContext } from '../context';

const LatestBlog = () => {
	const { indexData } = useAppContext();
	const latestBlog = indexData?.[0];
	const secondBlog = indexData?.[1];
	const thirdBlog = indexData?.[2];

	return (
		<div className=' w-full flex flex-col'>
			<div className='flex flex-row justify-between items-center leading-[80px] md:w-full bg-transparent mt-[12rem] pb-8 px-24'>
				<h2 className='text-[40px] leading-[48.76px] tracking-[0.5px] font-[700] text-black'>
					Latest Blog
				</h2>

				<a
					href='#'
					className='font-[600] text-[20px] leading-[24.38px] text-right text-[#00B9CD]'
				>
					View More
				</a>
			</div>

			<div
				className={`px-24 flex flex-row-reverse  mt-[5rem] md:gap-[8rem] pb-4 w-full items-start`}
			>
				{/* Second latest article */}
				<div className='flex flex-col items-start justify-start w-full'>
					<h4 className='text-black font-[700] text-[40px] leading-[70px] tracking-[.5px] w-full'>
						{secondBlog?.title}{' '}
					</h4>
					<span className='flex flex-col md:gap-6 md:mt-12'>
						<h6 className='font-[500] text-[16px] leading-[19.5px] '>
							{secondBlog?.description}
						</h6>{' '}
						<p className='font-[500] text-[14px] leading-[17.01px] text-[#AAAAAA] '>
							{secondBlog?.date}
						</p>{' '}
					</span>

					<p className='mt-8 w-full text-black/60 leading-[35px] text-[16px] text-left font-[400] h-[6rem] text-ellipsis overflow-hidden'>
						{latestBlog?.body}
					</p>
					{/* Third latest article */}
					<div className='flex flex-col items-start justify-start w-full mt-12'>
						<h4 className='text-black font-[700] text-[40px] leading-[70px] tracking-[.5px] w-full'>
							{thirdBlog?.title}{' '}
						</h4>
						<span className='flex flex-col md:gap-6 md:mt-12'>
							<h6 className='font-[500] text-[16px] leading-[19.5px] '>
								{thirdBlog?.description}
							</h6>{' '}
							<p className='font-[500] text-[14px] leading-[17.01px] text-[#AAAAAA] '>
								{thirdBlog?.date}
							</p>{' '}
						</span>

						<p className='mt-8 w-full text-black/60 leading-[35px] text-[16px] text-left font-[400] h-[6rem] text-ellipsis overflow-hidden'>
							{thirdBlog?.body}
						</p>
					</div>
				</div>
				{/* Latest Article */}
				<div
					className={`overflow-hidden  w-full h-full rounded-[25px] cursor-pointer flex flex-col items-start justify-start`}
				>
					<Image
						src={latestBlog?.image}
						alt='Article image'
						width={606}
						height={388}
						className='rounded-[25px] md:w-[606px] object-cover md:h-[388px] origin-left hover:scale-105 duration-500 ease '
					/>

					<div className='flex flex-col items-start justify-start w-full mt-12'>
						<h4 className='text-black font-[700] text-[40px] leading-[70px] tracking-[.5px] w-full'>
							{latestBlog?.title}{' '}
						</h4>
						<span className='flex flex-col md:gap-6 md:mt-12'>
							<h6 className='font-[500] text-[16px] leading-[19.5px] '>
								{latestBlog?.description}
							</h6>{' '}
							<p className='font-[500] text-[14px] leading-[17.01px] text-[#AAAAAA] '>
								{latestBlog?.date}
							</p>{' '}
						</span>

						<p className='mt-8 w-full text-black/60 leading-[35px] text-[16px] text-left font-[400] h-[6rem] text-ellipsis overflow-hidden'>
							{latestBlog?.body}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatestBlog;
