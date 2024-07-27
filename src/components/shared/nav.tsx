'use client';

import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { anta } from '@/lib/fonts';
import SidebarLink from './links';
import { Logo } from '@/components/shared/ui/icons/logo';
import { Button } from './ui/button';

function Nav() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<div>
			<div
				id='nav-wrapper'
				className='sticky top-0 flex justify-center z-40'
			>
				{/* Mobile */}
				<div
					className={`${
						sidebarOpen ? 'left-0' : 'left-[-21rem]'
					} md:hidden flex fixed h-full z-40 transition-all duration-300`}
				>
					<div className='relative block h-max w-80 max-w-[80%] m-4 rounded-lg dark:bg-[#38383833] border border-violet-300 dark:border-violet-950 backdrop-blur-sm z-50'>
						<button
							type='button'
							onClick={toggleSidebar}
							className={`${
								sidebarOpen ? '' : 'hidden'
							} absolute -right-12 top-4 justify-center items-center bg-none rounded-full p-2 cursor-pointer text-gray-200 hover:bg-neutral-800/50 darkhover:bg-neutral-800`}
						>
							<svg
								className='w-6 h-6'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth='2'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</button>
						<div className='flex items-center p-4 min-h-[74px]'>
							<Link
								href='/'
								onClick={toggleSidebar}
								className='flex underline-none items-center'
							>
								<Logo />
								<span
									className={`${anta.className} dark:text-gray-100 font-semibold underline-none text-2xl text-center truncate`}
								>
									WebWise
								</span>
							</Link>
						</div>
						<div className='px-4 pt-0 pb-12'>
							{SidebarLink.map((link, index) => {
								return (
									<Link
										key={index}
										href={link.href}
										onClick={toggleSidebar}
										className='group underline-none text-gray-100 flex items-center font-normal rounded-lg my-2 mx-0 p-2 transition-all hover:bg-[#cccccc1a]'
									>
										<svg
											className='mr-4 w-6 h-6 transition-colors group-hover:text-violet-300 group-focus:text-violet-300 group-active:text-violet-300'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											strokeWidth='2'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d={link.path}
											/>
										</svg>
										{link.name}
									</Link>
								);
							})}
						</div>
					</div>
				</div>
				{/* OVERLAY  */}
				<div
					onClick={toggleSidebar}
					className={`${
						sidebarOpen ? 'block opacity-[.7]' : 'hidden opacity-0'
					} md:hidden md:opacity-0 fixed w-full h-full bg-slate-800 dark:bg-black duration-700 delay-700 z-30`}
				></div>
				{/* Desktop view */}
				<nav className='flex items-center w-full border border-violet-950 min-h-16 m-4 rounded-lg max-w-7xl backdrop-blur-sm bg-[#dbdbdb33] dark:bg-[#38383833]'>
					<div className='flex items-center justify-between w-full p-4 mx-auto my-0 flex-wrap'>
						<Link
							href='/'
							className='dark:text-gray-50 flex items-center no-underline '
						>
							<Logo />
							<span
								className={`${anta.className} dark:text-gray-100 font-semibold underline-none text-2xl text-center truncate`}
							>
								WebWise
							</span>
						</Link>
						<div className='hidden md:block'>
							<div className='flex items-center gap-6'>
								{SidebarLink.map((link, index) => {
									return (
										<Link
											key={index}
											href={link.href}
											onClick={toggleSidebar}
											className={cn(
												'text-gray-700 dark:text-gray-200 text-base leading-5 no-underline',
												'hover:text-violet-700 active:text-violet-500 dark:hover:text-violet-400 dark:active:text-violet-300',
												index === 4 && 'hidden'
											)}
										>
											{index == 4 ? '' : link.name}
										</Link>
									);
								})}
							</div>
						</div>
						<div className='hidden md:block min-w-[135px]'>
							<Button
								variant='default'
								asChild
							>
								<Link href='/signup'>Get Started</Link>
							</Button>
						</div>
						<button
							type='button'
							onClick={toggleSidebar}
							className='md:hidden transition-all dark:text-gray-200 bg-none border-0 rounded-full p-2 dark:hover:text-gray-50 dark:active:scale-[.97] dark:hover:bg-neutral-800'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-6 h-6'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='2'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12'
								/>
							</svg>
						</button>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Nav;
