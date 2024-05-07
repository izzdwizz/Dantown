import Image from 'next/image';
import SearchBar from './components/SearchBar';
import Popular from './components/Popular';
import BlogCard from './components/BlogCard';
import LatestBlog from './components/LatestBlog';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center py-24'>
			<div className='px-24 w-full'>
				<SearchBar />
			</div>
			<Popular />
			<BlogCard />
			<LatestBlog />
		</main>
	);
}
