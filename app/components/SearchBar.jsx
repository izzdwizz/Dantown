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

	console.log(active);
	return (
		<>
			<div className='flex flex-row justify-evenly items-center leading-[80px] h-[80px] md:w-full bg-transparent border-b-[3px] border-b-[#AAAAAA4D]'>
				<div className='flex flex-row gap-2 w-[57%] bg-transparent searchbar'>
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
						className='h-[23px] w-[23px] text-[#434343] cursor-pointer'
					/>
				</div>
			</div>
		</>
	);
};

export default SearchBar;
