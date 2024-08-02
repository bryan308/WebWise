import Link from 'next/link';
import Support from './support';
import { Logo } from './ui/icons/logo';
import FooterBottom from './footer-bottom';
import { anta, lexend } from '@/lib/fonts';
import { footerItems } from './footer-meta';

export default function Footer() {
	return (
		<>
			<Support />
			<footer className='max-w-7xl w-full p-4 mx-auto my-0'>
				<div>
					<div className='flex items-center mb-6'>
						<Link
							href='/'
							className='flex p-2 items-center no-underline'
						>
							<Logo />
							<span
								className={`dark:text-gray-100 font-semibold underline-none text-2xl text-center truncate ${anta.className}`}
							>
								WebWise
							</span>
						</Link>
					</div>
					<div className='grid grid-cols-3 md:grid-cols-4 gap-8'>
						{footerItems.map((f, i) => (
							<div key={i}>
								<h2
									className={`text-neutral-100text-neutral-100 text-sm uppercase mb-2 font-medium ${lexend.className}`}
								>
									{f.header}
								</h2>
								<ul className='list-none'>
									{f.links.map((l, i) => (
										<li
											key={i}
											className='mb-4'
										>
											<Link
												href={l.href}
												className='text-neutral-600 dark:text-neutral-300 text-sm no-underline mb-2 font-medium dark:hover:text-neutral-200 hover:text-neutral-700'
											>
												{l.text}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
				<hr className='max-w-7xl bg-current border my-4 opacity-25' />
				<FooterBottom />
			</footer>
		</>
	);
}
