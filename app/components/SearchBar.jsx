'use client';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import iconSearch from '../../public/assets/images/btnSearch.svg';

const SearchBar = () => {
	const [active, setActive] = useState(1);

	const toggleActive = (index) => {
		setActive(index);
	};

	return (
		<>
			<div className='flex flex-row justify-evenly items-center text-[12px] md:text-[20px] leading-[50px] md:leading-[80px] md:h-[80px] md:w-full bg-transparent border-b-[3px] border-b-[#AAAAAA4D]'>
				<div className='flex flex-row gap-6 md:gap-x-12 w-full md:w-[57%] bg-transparent searchbar'>
					<li className={`list-none cursor-pointer `}>
						<a
							className={`text-[#333] ${
								active === 1 && 'active'
							} inline-block transition-all ease-in-out duration-500 cursor-pointer`}
							onClick={() => toggleActive(1)}
						>
							Popular
						</a>
					</li>
					<li className={`list-none cursor-pointer`}>
						<a
							className={`text-[#333] ${
								active === 2 && 'active'
							} inline-block transition-all ease-in-out duration-500 cursor-pointer`}
							onClick={() => toggleActive(2)}
						>
							Cryptocurrency
						</a>
					</li>
					<li className={`list-none cursor-pointer `}>
						<a
							className={`text-[#333] ${
								active === 3 && 'active'
							} inline-block transition-all ease-in-out duration-500 cursor-pointer min-w-max`}
							onClick={() => toggleActive(3)}
						>
							Virtual Card
						</a>
					</li>
					<li className={`list-none cursor-pointer`}>
						<a
							className={`text-[#333] ${
								active === 4 ? 'active' : ''
							} inline-block transition-all ease-in-out duration-500 cursor-pointer`}
							onClick={() => toggleActive(4)}
						>
							Investment
						</a>
					</li>
				</div>
				<div className='w-full flex justify-end'>
					<Image
						src={iconSearch}
						alt='search icon'
						className='h-[16px] w-[16px] md:h-[23px] md:w-[23px] text-[#434343] cursor-pointer'
					/>
				</div>
			</div>
		</>
	);
};

export default SearchBar;
