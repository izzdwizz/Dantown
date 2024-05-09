import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Image from 'next/image';
import bg_image from '../public/assets/images/bg.png';
import { AppWrapper } from './context';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Dantow',
	description: 'Everything Bitcoin',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AppWrapper>
					{' '}
					<Image
						src={bg_image}
						alt='Background Image'
						layout='fill'
						priority
						className='-z-10 bg-repeat object-cover inset-0 h-screen'
					/>
					<Navbar />
					<div className='md:px-24 px-[2rem] w-full pt-16 md:pt-24'>
						<SearchBar />
					</div>
					{children}
					<Footer />
				</AppWrapper>
			</body>
		</html>
	);
}
