// app/courses/fundamentals/page.tsx

import { getAllMdx } from '@/lib/mdx';
import { MDXFrontMatter } from '@/lib/types';
import { Page } from '@/components/courses/Page';
import { PostList } from '@/components/courses/PostList';

export default async function Fundamentals() {
	const mdxFiles = getAllMdx().map((post) => post['frontMatter']);

	return (
		<Page
			title='Fundamentals'
			description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
		>
			<PostList posts={mdxFiles} />
		</Page>
	);
}
