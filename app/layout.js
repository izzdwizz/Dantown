import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Image from 'next/image';
import bg_image from '../public/assets/images/bg.png';
import { AppWrapper } from './context';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Guzy Visual',
	description: 'Immerse Yourself in a World of Art',
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
						objectFit='cover'
						priority
						className='-z-10 bg-repeat inset-0 h-screen'
					/>
					<Navbar />
					{children}
				</AppWrapper>
			</body>
		</html>
	);
}
