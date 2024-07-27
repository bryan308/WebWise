import Link from 'next/link';
import { Button } from './ui/button';

function Support() {
	return (
		<div className='mt-4 bg-[#fefaff] dark:bg-[#111113]'>
			<div className='max-w-[50rem] my-0 mx-auto p-4 pb-8 text-center'>
				<div>
					<h1 className='text-gray-800 dark:text-neutral-200 text-[2rem] font-bold'>Support Us</h1>
					<p className='text-sm text-gray-600 dark:text-neutral-400 mb-4 leading-[1.75]'>
						Help us keep WebWise free for all. Every donation fuels our mission to provide
						accessible web development education. Join us in empowering learners worldwise!
					</p>
				</div>
				<div className='flex justify-center mt-4 gap-4'>
					<Button
						variant='outline'
						asChild
					>
						<Link href='/support'>Learn more</Link>
					</Button>
					<Button
						variant='default'
						asChild
					>
						<Link href='/donate'>
							Donate Now
							<svg
								className='ml-2 w-5 h-5'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth='2'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M17 8l4 4m0 0l-4 4m4-4H3'
								></path>
							</svg>
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Support;
