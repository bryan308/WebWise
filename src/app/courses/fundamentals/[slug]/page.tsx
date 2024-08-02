// app/posts/[slug]/page.tsx

import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from 'rehype-prism-plus';
import { getAllMdx, getMdx } from '@/lib/mdx';
import remarkGfm from 'remark-gfm';
import PostContent from './PostContet';

interface PostProps {
	params: { slug: string };
}

async function fetchPostData(slug: string) {
	const mdxFiles = getAllMdx();
	const postIndex = mdxFiles.findIndex((p) => p.frontMatter.slug === slug);
	const post = mdxFiles[postIndex];
	const { frontMatter, content } = post;
	const mdxContent = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [remarkGfm],
			rehypePlugins: [rehypePrism],
		},
		scope: frontMatter,
	});
	const previous = mdxFiles[postIndex + 1]?.frontMatter || null;
	const next = mdxFiles[postIndex - 1]?.frontMatter || null;

	return { frontMatter, mdxContent, previous, next };
}

export default async function Post({ params }: PostProps) {
	const { slug } = params;
	const postData = await fetchPostData(slug);

	return <PostContent {...postData} />;
}
