import Link from 'next/link';
import { formatDate } from '@/lib/formatDate';
import type { MDXFrontMatter } from '@/lib/types';
// import { Prose } from "@/components/Prose";
import { cn, slugify } from '@/lib/utils';
import { Tag } from './elements/Tag';
import { NextPage } from 'next';

interface PostListProps {
	posts: Array<MDXFrontMatter>;
}

export const LessonList: NextPage<PostListProps> = ({ posts }) => {
	return (
		<ul className={cn('divide-y -my-8', 'divide-gray-200', 'dark:divide-gray-700')}>
			{posts.map((post, index) => {
				return (
					<li
						className='py-8'
						key={index}
					>
						<article>
							<time className={cn('block mb-2', 'text-gray-500', 'dark:text-gray-400')}>
								{formatDate(post.date)}
							</time>
							<h2 className='font-bold text-xl'>
								<Link href={`/courses/fundamentals/${post.slug}`}>{post.title}</Link>
							</h2>
							{post.description ? (
								<div className='mt-3'>
									{/* <Prose> */}
									<p>{post.description}</p>
									{/* </Prose> */}
								</div>
							) : null}
						</article>
					</li>
				);
			})}
		</ul>
	);
};
