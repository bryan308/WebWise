'use client';

import { MDXRemote } from 'next-mdx-remote';
import { MDXFrontMatter } from '@/lib/types';
import { components } from '@/components/courses/MDX';
import '@/components/courses/styles/mdx.css';
import BottomNav from './lesson-content-nav';

interface ILessonContentProp {
	mdxContent: any;
	next: MDXFrontMatter | null;
}

export default function LessonContent({ mdxContent, next }: ILessonContentProp) {
	return (
		<>
			<MDXRemote
				{...mdxContent}
				components={components}
			/>
			<hr className='opacity-25' />
			<BottomNav next={next} />
		</>
	);
}
