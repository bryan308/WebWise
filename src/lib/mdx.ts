import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { MDXFrontMatter } from '@/lib/types';

const root = process.cwd();

export const lessonsPath = path.join(root, 'lessons');

export const getMdx = (fileName: string) => {
	const fullPath = path.join(lessonsPath, fileName);
	const docSource = fs.readFileSync(fullPath, 'utf-8');

	const { data, content } = matter(docSource);

	return {
		frontMatter: {
			...data,
			slug: fileName.replace('.mdx', ''),
		} as MDXFrontMatter,
		content,
	};
};

export const getAllMdx = () => {
	const items = fs.readdirSync(lessonsPath).map((item) => getMdx(item));
	return items.sort(
		(a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
	);
};
