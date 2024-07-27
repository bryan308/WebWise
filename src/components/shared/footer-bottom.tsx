import Link from 'next/link';
import { anta } from '@/lib/fonts';
import { FacebookIcon } from './ui/icons/fb';
import { DiscordIcon } from './ui/icons/discord';
import { GitHubIcon } from './ui/icons/github';

function FooterBottom() {
	return (
		<div className='md:flex md:flex-col md:items-start md:justify-start flex items-center justify-between'>
			<span className='text-sm'>
				© 2024{' '}
				<Link
					href='/'
					className={`text-neutral-600 dark:text-neutral-50 no-underline hover:underline ${anta.className}`}
				>
					WebWise
				</Link>
				. All rights reserved.
			</span>
			<div className='flex gap-4 mt-0 md:mt-4'>
				<Link
					href='https://www.facebook.com'
					target='_blank'
					className='text-neutral-600 dark:text-neutral-300'
				>
					<FacebookIcon solid />
				</Link>
				<Link
					href='https://www.discord.com'
					target='_blank'
					className='text-neutral-600 dark:text-neutral-300'
				>
					<DiscordIcon />
				</Link>
				<Link
					target='_blank'
					href='https://www.github.com'
					className='text-neutral-600 dark:text-neutral-300'
				>
					<GitHubIcon />
				</Link>
			</div>
		</div>
	);
}

export default FooterBottom;
