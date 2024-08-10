import Link from 'next/link';
import React from 'react';
import { Button } from '../shared/ui/button';
import { BookOpen, CircleArrowRight } from 'lucide-react';
import { MDXFrontMatter } from '@/lib/types';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../shared/ui/tooltip';

function BottomNav({ next }: { next: MDXFrontMatter | null }) {
	return (
		<div className='flex md:flex-row flex-col gap-4 justify-between py-10'>
			<TooltipProvider>
				<Button
					variant='outline'
					asChild
				>
					<Link href='/courses/fundamentals'>
						<BookOpen className='size-6 mr-2' />
						Back to Course
					</Link>
				</Button>

				<Tooltip>
					<TooltipTrigger asChild>
						<Button asChild>
							<Link
								className='min-h-12'
								href='/signin'
							>
								Track progress
							</Link>
						</Button>
					</TooltipTrigger>
					<TooltipContent>Sign in</TooltipContent>
				</Tooltip>
				{next && (
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant='outline'
								asChild
							>
								<Link
									href={next.slug}
									className='sec-btn'
								>
									<CircleArrowRight className='size-6 mr-2' />
									Next Topic
								</Link>
							</Button>
						</TooltipTrigger>
						<TooltipContent>{next.slug}</TooltipContent>
					</Tooltip>
				)}
			</TooltipProvider>
		</div>
	);
}

export default BottomNav;
