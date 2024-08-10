import remarkGfm from 'remark-gfm';
import { getAllMdx } from '@/lib/mdx';
import rehypePrism from 'rehype-prism-plus';
import { serialize } from 'next-mdx-remote/serialize';
import FundamentalsLayout from '../fundamentals-layout';
import LessonContent from '@/components/courses/lesson-content';
import { lessonGroupTitles } from '@/components/courses/interface/course';

interface ListProp {
	params: { slug: string };
}

async function fetchLessonData(slug: string) {
	const mdxFiles = getAllMdx();

	const sortedLessons = mdxFiles.sort((a, b) => {
		if (a.frontMatter.lessonGroup === b.frontMatter.lessonGroup) {
			return a.frontMatter.lessonNumber - b.frontMatter.lessonNumber;
		}
		return a.frontMatter.lessonGroup - b.frontMatter.lessonGroup;
	});

	const lessonIndex = sortedLessons.findIndex((p) => p.frontMatter.slug === slug);
	if (lessonIndex === -1) {
		throw new Error('Lesson not found');
	}

	const lesson = sortedLessons[lessonIndex];
	const { frontMatter, content } = lesson;

	const mdxContent = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [remarkGfm],
			rehypePlugins: [rehypePrism],
		},
		scope: frontMatter,
	});

	const next = sortedLessons[lessonIndex + 1]?.frontMatter || null;

	return { frontMatter, mdxContent, next };
}

export default async function Lesson({ params }: ListProp) {
	const { slug } = params;
	const postData = await fetchLessonData(slug);

	const lessonGroup = postData.frontMatter.lessonGroup - 1;

	const breadcrumbs = [
		{
			title: lessonGroupTitles[lessonGroup] || 'Unknown',
			link: `/courses/fundamentals/${lessonGroup + 1}`,
		},
		{
			title: postData.frontMatter.title,
			link: `/courses/fundamentals/${postData.frontMatter.slug}`,
		},
	];

	return (
		<FundamentalsLayout
			breadcrumbs={breadcrumbs}
			pageHeader={postData.frontMatter.title}
		>
			<LessonContent {...postData} />
		</FundamentalsLayout>
	);
}
