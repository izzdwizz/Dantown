import Image from 'next/image';
import share_det from '../../../public/assets/images/share_dets.png';
import play from '../../../public/assets/images/Play.png';
import prevArr from '../../../public/assets/images/prevArr.png';
import { redirect } from 'next/navigation';
import Link from 'next/link';

async function getBlogs() {
	const data = await fetch('https://app.dantownms.com/api_v2/all-blogs', {
		next: { revalidate: 60 },
	});

	return data.json();
}

async function getBlogDetails(slug) {
	const res = await fetch(`https://app.dantownms.com/api_v2/blog/${slug}`, {
		next: { revalidate: 60 },
	});

	return res.json();
}

export default async function BlogDetails({ params }) {
	// GETTING THE NEXT AND PREVIOUS BLOG POSTS USING SLUG ID. ALTERNATIVELY THIS CAN BE DONE USING TIMESTAMP
	const allBlogs = await getBlogs();
	const data = allBlogs.data;
	const blog = await getBlogDetails(params.slug);
	const currentPageId = await blog?.data.id;
	const nextpage = parseInt(currentPageId.toString()) + 1;
	const prevpage = parseInt(currentPageId.toString()) - 1;

	const foundNext = await data?.findIndex((element) => element.id == nextpage);
	const foundPrev = await data?.findIndex((element) => element.id == prevpage);
	const nextSlug = await data[foundNext]?.slug;
	const prevSlug = await data[foundPrev]?.slug;

	return (
		<div className='flex flex-col w-full h-full md:px-24 px-[1.5rem] pt-16 md:pt-24'>
			<header className='flex flex-col w-full h-full'>
				<h4 className='font-[700] text-[16px] md:text-[40px] leading-[35px] bg-transparent pb-12 md:pb-16'>
					{blog?.data.title}
				</h4>

				<span className='flex justify-between w-full md:pb-0 pb-10'>
					<span className='w-full'>
						<p className='text-[14px] md:text-[16px] leading-[17px] md:leading-[19.5px] font-[500] pb-6'>
							{blog?.data.categories?.title}
						</p>
						<p className='text-[#AAAAAA] text-[14px] font-[500] leading-[17.07px]'>
							{blog?.data.date}
						</p>
					</span>
					<div className='flex w-full gap-5 justify-end pb-12'>
						<div className='border-[1px] overflow-hidden max-h-[30px] max-w-[30px] md:w-[61px] md:h-[54px] border-[#4F4F4F] rounded-[3px]'>
							<Image
								src={play}
								width={61}
								height={54}
								sizes='(max-width:768px) h-[30px] w-[30px]'
								className='md:p-3 p-[0.4px] object-contain md:w-[61px] md:h-[54px] cursor-pointer'
								alt='Play icon'
							/>
						</div>
						<div className=' border-[1px] overflow-hidden max-h-[30px] max-w-[30px] md:w-[61px] md:h-[54px] border-[#4F4F4F] rounded-[3px]'>
							<Image
								src={share_det}
								width={61}
								height={54}
								className=' p-1 md:p-5 cursor-pointer'
								alt='share icon'
							/>
						</div>
					</div>
				</span>
			</header>
			<Image
				src={blog?.data.image}
				alt='Blog image'
				width={1640}
				height={1040}
				objectPosition='center'
				className='rounded-[50px] bg-[#C4C4C4] object-cover h-[276px] w-[412px] md:w-full md:max-h-[1040px]'
			/>
			{/* ARTICLE SECTION */}
			<article className='flex flex-col w-full h-full pt-14 md:pt-8'>
				<h4 className='font-[700] text-[16px] leading-[35px] md:leading-[60px] md:text-[40px] bg-transparent pb-16'>
					{blog?.data.title}
				</h4>

				<span className='flex flex-col justify-between w-full'>
					<span className='w-full'>
						<p className='text-[16px] leading-[40px] text-black/60 md:max-h-[570px] min-h-fit max-h-[600px] font-[400] pb-6 overflow-y-scroll '>
							{blog?.data.body}
						</p>
					</span>
					<div className='flex w-full gap-5 justify-end py-16'>
						<button
							className={`flex  gap-4 items-center group ${
								!prevSlug ? 'hidden' : 'cursor-pointer'
							}`}
						>
							<Link
								href={`/blogs/${prevSlug}`}
								className='w-full flex gap-4 items-center '
							>
								<Image
									src={prevArr}
									width={12}
									height={12}
									className='md:w-[12px] md:h-[12px]  group-hover:-translate-x-5 ease-in-out duration-500'
									alt='prevArr icon'
								/>

								<span className='text-[#333333] text-[16px] leading-[19.6px] cursor-pointer'>
									Older Post
								</span>
							</Link>
						</button>
						<button
							className={` flex  group ${
								!nextSlug ? 'hidden' : 'cursor-pointer'
							}`}
						>
							<Link
								href={`/blogs/${nextSlug}`}
								className='w-full flex gap-4 items-center '
							>
								<span className='text-[#333333] text-[16px] leading-[19.6px] '>
									Next Post
								</span>
								<Image
									src={prevArr}
									width={12}
									height={12}
									className=' md:w-[12px] md:h-[12px]  rotate-180 group-hover:translate-x-5 ease-in-out duration-500'
									alt='Next Arrow icon'
								/>
							</Link>
						</button>
					</div>
				</span>
			</article>
		</div>
	);
}
