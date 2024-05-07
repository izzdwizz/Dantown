'use client';
import Image from 'next/image';
import React from 'react';
import blog_img from '../../public/assets/images/blog_img.png';
import { useAppContext } from '../context';
const BlogCard = () => {
	const { indexData } = useAppContext();
	return indexData.map((blog, id) => (
		<div
			className={`px-24 flex ${
				parseInt(id.toString()) % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
			} mt-[10rem] md:gap-[8rem] pb-4 w-full items-start`}
		>
			<div className='flex flex-col items-start justify-start w-full'>
				<h4 className='text-black font-[700] text-[40px] leading-[70px] tracking-[.5px] w-full'>
					{blog?.title}{' '}
				</h4>
				<span className='flex flex-col md:gap-6 md:mt-12'>
					<h6 className='font-[500] text-[16px] leading-[19.5px] '>
						{blog?.description}
					</h6>{' '}
					<p className='font-[500] text-[14px] leading-[17.01px] text-[#AAAAAA] '>
						{blog?.date}
					</p>{' '}
				</span>

				<p className='mt-8 w-full text-black/60 leading-[35px] text-[16px] text-left font-[400] h-[13rem] text-ellipsis overflow-hidden'>
					{blog?.body}
				</p>

				<button className='rounded-[12px] md:mt-12 px-8 py-5 text-white text-[16px] bg-[#000070] hover:scale-105 duration-500 ease '>
					Read more
				</button>
			</div>
			<div
				className={`overflow-hidden  w-full h-full rounded-[25px] cursor-pointer flex ${
					parseInt(id.toString()) % 2 === 0 ? 'justify-end' : 'justify-start'
				}`}
			>
				<Image
					src={indexData ? blog?.image : blog_img}
					alt='Article image'
					width={606}
					height={388}
					className='rounded-[25px] md:w-[606px] object-cover md:h-[388px] origin-left hover:scale-105 duration-500 ease '
				/>
			</div>
		</div>
	));
};

export default BlogCard;
