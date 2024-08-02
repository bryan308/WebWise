import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from 'rehype-prism-plus';
import { getAllMdx, getMdx } from '@/lib/mdx';
import remarkGfm from 'remark-gfm';
import LessonContent from './lesson-content';

interface ListProp {
	params: { slug: string };
}

async function fetchLessonData(slug: string) {
	const mdxFiles = getAllMdx();
	const lessonIndex = mdxFiles.findIndex((p) => p.frontMatter.slug === slug);
	const lesson = mdxFiles[lessonIndex];
	const { frontMatter, content } = lesson;
	const mdxContent = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [remarkGfm],
			rehypePlugins: [rehypePrism],
		},
		scope: frontMatter,
	});
	const previous = mdxFiles[lessonIndex + 1]?.frontMatter || null;
	const next = mdxFiles[lessonIndex - 1]?.frontMatter || null;

	return { frontMatter, mdxContent, previous, next };
}

export default async function Lesson({ params }: ListProp) {
	const { slug } = params;
	const postData = await fetchLessonData(slug);

	return (
		<div className='space-x-4'>
			<LessonContent {...postData} />
		</div>
	);
}
