'use client';
import Image from 'next/image';
import React from 'react';
import { useAppContext } from '../context';
import Link from 'next/link';
import Loader from './Loader';

const BlogCard = () => {
	const { indexData } = useAppContext();
	if (!indexData) return <Loader />;
	return indexData.map((blog, id) => (
		<>
			<div
				className={`px-24 hidden md:flex ${
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

					<Link href={`/blogs/${blog?.slug}`} className='w-full h-full'>
						<button className='rounded-[12px] md:mt-12 px-8 py-5 text-white text-[16px] bg-[#000070] hover:scale-105 duration-500 ease '>
							Read more
						</button>
					</Link>
				</div>
				<div
					className={`overflow-hidden  w-full h-full rounded-[25px] cursor-pointer flex ${
						parseInt(id.toString()) % 2 === 0 ? 'justify-end' : 'justify-start'
					}`}
				>
					<Image
						src={blog?.image}
						alt='Article image'
						width={606}
						height={388}
						className='rounded-[25px] bg-[#C4C4C4]md:min-w-[606px] object-cover md:h-[388px] hover:scale-105 duration-500 ease '
					/>
				</div>
			</div>
			<div
				className={`px-[1.5rem] md:px-24 flex flex-col mt-[6.6rem] md:mt-[10rem] md:gap-[8rem] pb-4 w-full items-start md:hidden `}
			>
				<div
					className={`flex ${
						parseInt(id.toString()) % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
					} items-start justify-start w-full gap-6`}
				>
					<div className='w-full'>
						<h4 className='text-black font-[700] text-[16px] md:text-[40px] leading-[35px] md:leading-[70px] tracking-[.5px] w-full'>
							{blog?.title}{' '}
						</h4>
						<span className='flex flex-col gap-6 mt-8 md:mt-12'>
							<h6 className='font-[500] text-[16px] leading-[19.5px] '>
								{blog?.description}
							</h6>{' '}
							<p className='font-[500] text-[14px] leading-[17.01px] text-[#AAAAAA] '>
								{blog?.date}
							</p>{' '}
						</span>
					</div>
					<div
						className={`overflow-hidden  w-full h-full rounded-[25px] cursor-pointer flex ${
							parseInt(id.toString()) % 2 === 0
								? 'justify-end'
								: 'justify-start'
						}`}
					>
						<Image
							src={blog?.image}
							alt='Article image'
							width={606}
							height={388}
							className='rounded-[25px] h-[183px] w-[208px] bg-[#C4C4C4] md:w-[606px] object-cover md:h-[388px] hover:scale-105 duration-500 ease '
						/>
					</div>
				</div>

				<div
					className={`w-full ${
						parseInt(id.toString()) % 2 === 0
							? 'text-left items-start'
							: 'text-right items-end'
					}`}
				>
					<p className='mt-8 w-full text-black/60 leading-[30px] md:leading-[35px] text-[10px] md:text-[16px]  font-[400] h-[8rem] md:h-[13rem] text-ellipsis overflow-hidden'>
						{blog?.body}
					</p>

					<Link href={`/blogs/${blog?.slug}`} className='w-full h-full'>
						<button className='rounded-[12px] mt-6 md:mt-12 px-6 py-4 md:px-8 md:py-5 text-white text-[16px] bg-[#000070] hover:scale-105 duration-500 ease '>
							Read more
						</button>
					</Link>
				</div>
			</div>
		</>
	));
};

export default BlogCard;
