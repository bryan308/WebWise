import { lexend } from '@/lib/fonts';
import { getAllMdx } from '@/lib/mdx';
import { LessonList } from '@/components/courses/lessons-list';
import FundamentalsLayout from './fundamentals-layout';

export default async function Fundamentals() {
	const mdxFiles = getAllMdx().map((post) => post['frontMatter']);

	return (
		<FundamentalsLayout>
			<div className='mt-4 mb-12'>
				<h3 className={`${lexend.className} text-neutral-200 font-semibold text-xl`}>Overview</h3>
				<p className='text-neutral-400 mb-4 leading-[1.75]'>
					Welcome to the Fundamentals of Web Development course, where you will dive deep into
					essential concepts like HTML, CSS, and webpage structure. Gain practical skills to create
					engaging web experience from scratch.
				</p>
			</div>
			<div className='mb-20'>
				<LessonList lessons={mdxFiles} />
			</div>
		</FundamentalsLayout>
	);
}
