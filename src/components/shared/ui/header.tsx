import { lexend } from '@/lib/fonts';

function PageHeader({ children }: { children: React.ReactNode }) {
	return (
		<h1
			className={`${lexend.className} text-center text-4xl leading-normal font-semibold bg-gradient-to-b from-neutral-50 to-violet-400 bg-clip-text text-transparent`}
		>
			{children}
		</h1>
	);
}

export default PageHeader;
