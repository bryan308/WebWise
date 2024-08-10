import Link from 'next/link';
import { lexend } from '@/lib/fonts';
import { MDXFrontMatter } from '@/lib/types';

interface LessonItem {
	lesson: MDXFrontMatter;
}

const LessonItem: React.FC<LessonItem> = ({ lesson }) => {
	return (
		<Link
			href={`/courses/fundamentals/${lesson.slug}`}
			className='topic_item hyperlink'
		>
			<div className='item_content'>
				<div className='item_number'>
					<span className={`${lexend.className} text-xl font-bold`}>{lesson.lessonNumber}</span>
				</div>
				<div className='item_text'>
					<h4 className={`${lexend.className} text-neutral-200`}>{lesson.title}</h4>
					<span className='text-neutral-400 text-xs'>{lesson.description}</span>
				</div>
			</div>
		</Link>
	);
};

export default LessonItem;
