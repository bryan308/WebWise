import { getAllMdx } from '@/lib/mdx';
import { MDXFrontMatter } from '@/lib/types';
import { Page } from '@/components/courses/Page';
import { LessonList } from '@/components/courses/lessons-list';

export default async function Fundamentals() {
	const mdxFiles = getAllMdx().map((post) => post['frontMatter']);

	return (
		<Page
			title='Fundamentals'
			description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
		>
			<LessonList posts={mdxFiles} />
		</Page>
	);
}
