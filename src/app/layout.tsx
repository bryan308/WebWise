import './globals.css';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { poppins } from '@/lib/fonts';
import Providers from '@/components/shared/theme-provider';
import Nav from '@/components/shared/nav';
// import Footer from '@/components/shared/footer/footer';

export const metadata: Metadata = {
	title: {
		default: 'WebWise',
		template: 'WebWise | %s',
	},
	metadataBase: new URL('https://webwisee.vercel.app'),
	description: 'Start Your Knowledge Here and Be Wiser in Web Development.',
	openGraph: {
		title: 'WebWise | Learn Web',
		description: 'Start Your Knowledge Here and Be Wiser in Web Development.',
		images: [`https://webwisee.vercel.app`],
	},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body
				className={cn(
					'text-gray-950 dark:text-gray-200 bg-[#f5f5f5] dark:bg-[#0e0e10] transition-all',
					poppins.className
				)}
			>
				<Providers>
					<Nav />
					<main>{children}</main>
					{/* <Footer /> */}
				</Providers>
			</body>
		</html>
	);
}
