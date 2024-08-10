import type { MDXFrontMatter } from '@/lib/types';
import Link from 'next/link';
import '@/components/courses/styles/styles.scss';
import { lexend } from '@/lib/fonts';

interface LessonListProps {
	lessons: MDXFrontMatter[];
}

export const lessonGroupTitles = [
	'Introduction',
	'Prerequisites',
	'HTML Fundamentals',
	'CSS Fundamentals',
];

export const LessonList = ({ lessons }: LessonListProps) => {
	return (
		<>
			{lessonGroupTitles.map((groupTitle, i: number) => {
				return (
					<div key={i}>
						<h3 className={`${lexend.className} font-semibold text-xl`}>{groupTitle}</h3>
						<div className='lesson_list_items grid grid-cols-1 md:grid-cols-2'>
							{lessons
								.filter((lesson) => lesson.lessonGroup === i + 1)
								.sort((a, b) => a.lessonNumber - b.lessonNumber)
								.map((l, i: number) => (
									<Link
										key={i}
										href={`/courses/fundamentals/${l.slug}`}
										className='topic_item hyperlink'
									>
										<div className='item_content'>
											<div className='item_number'>
												<span className={`${lexend.className} text-xl font-bold`}>
													{l.lessonNumber}
												</span>
											</div>
											<div className='item_text'>
												<h4 className={`${lexend.className} text-neutral-200`}>{l.title}</h4>
												<span className='text-neutral-400 text-xs'>{l.description}</span>
											</div>
										</div>
									</Link>
								))}
						</div>
					</div>
				);
			})}
		</>
	);
};
