'use client';

import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { MDXFrontMatter } from '@/lib/types';
import { Page } from '@/components/courses/Page';
import { cn } from '@/lib/utils';
import { components } from '@/components/courses/MDX';
import '@/components/courses/styles/mdx.css';

interface ILessonContentProp {
	frontMatter: MDXFrontMatter;
	mdxContent: any;
	previous: MDXFrontMatter | null;
	next: MDXFrontMatter | null;
}

export default function LessonContent({
	frontMatter,
	mdxContent,
	previous,
	next,
}: ILessonContentProp) {
	return (
		<Page {...frontMatter}>
			{/* <Prose> */}
			<MDXRemote
				{...mdxContent}
				components={components}
			/>
			{/* </Prose> */}
			{previous || next ? (
				<nav
					className={cn(
						'mt-8 pt-8 grid grid-cols-2 gap-8 border-t',
						'border-gray-200',
						'dark:border-gray-700'
					)}
				>
					{previous ? (
						<div>
							<p
								className={cn(
									'mb-2 uppercase tracking-wider text-sm',
									'text-gray-500',
									'dark:text-gray-400'
								)}
							>
								Previous
							</p>
							<Link
								href={`/courses/fundamentals/${previous?.slug}`}
								className='font-bold'
							>
								{previous?.title}
							</Link>
						</div>
					) : null}
					{next ? (
						<div className='col-start-2 text-right'>
							<p
								className={cn(
									'mb-2 uppercase tracking-wider text-sm',
									'text-gray-500',
									'dark:text-gray-400'
								)}
							>
								Next
							</p>
							<Link
								href={`/courses/fundamentals/${next?.slug}`}
								className='font-bold'
							>
								{next?.title}
							</Link>
						</div>
					) : null}
				</nav>
			) : null}
		</Page>
	);
}
