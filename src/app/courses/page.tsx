import { ICourse, ICourseParam } from '@/components/courses/interface/course';
import PageHeader from '@/components/shared/ui/header';
import Image from 'next/image';
import Link from 'next/link';

const CourseData: ICourse = {
	fundamentals: {
		title: 'Fundamentals Course',
		description:
			'Welcome to the Fundamentals of Web Development course, where you will dive deep into essential concepts like HTML, CSS, and webpage structure. Gain practical skills to create engaging web experience from scratch.',
		thumbnail: '/images/svgs/fundamentals.svg',
		link: '/courses/fundamentals/',
		tags: [
			{ text: 'Introduction', href: '/pages/courses/c1#c1l1' },
			{ text: 'Prerequisites', href: '/pages/courses/c1#c1l2' },
			{ text: 'HTML', href: '/pages/courses/c1#c1l3' },
			{ text: 'CSS', href: '/pages/courses/c1#c1l4' },
			{ text: 'JavaScript', href: '/pages/courses/c1#c1l5' },
		],
	},
	intermidiate: {
		title: 'Intermidiate Course',
		description:
			'Level up your web development skills with our Intermidiate course. By mastering these key topics, you’ll be equipped to tackle complex web design projects confidently and efficiently.',
		thumbnail: '/images/Intermidiate.jpg',
		link: '/courses/intermidiate/',
		tags: [
			{ text: 'Intermidiate HTML', href: '/pages/courses/c2#c2l1' },
			{ text: 'Intermidiate CSS', href: '/pages/courses/c2#c2l2' },
			{ text: 'Forms', href: '/pages/courses/c2#c2l3' },
			{ text: 'Grid', href: '/pages/courses/c2#c2l4' },
		],
	},
};

function CourseCard({ course }: ICourseParam) {
	return (
		<article className='mt-4 mb-12 mx-0'>
			<div className='relative border border-violet-600 dark:border-violet-950 rounded-lg mb-24 overflow-hidden '>
				<div className='flex flex-col md:flex-row w-full'>
					<div className='w-full md:w-[35%] h-52 md:h-full'>
						<Image
							src={course.thumbnail}
							alt='course thumbnail'
							width={280}
							height={300}
							loading='eager'
							className='object-cover w-full h-full'
						/>
					</div>
					<div className='p-4 w-full md:w-[65%]'>
						<h2 className='text-2xl mb-2 text-neutral-700 dark:text-neutral-200 lexend font-semibold'>
							{course.title}
						</h2>
						<p className='text-base font-normal text-neutral-600 dark:text-neutral-400 leading-[1.75]'>
							{course.description}
						</p>
						<div className='flex flex-wrap gap-2 p-2'>
							{course.tags.map((tag, index) => {
								return (
									<Link
										key={index}
										href={tag.href}
										className='select-none cursor-pointer flex items-center font-normal text-xs text-neutral-700 dark:text-neutral-200 no-underline w-max py-[.15rem] px-[.3rem] border border-violet-600 dark:border-violet-950 rounded-lg transition-all hover:scale-[1.015] hover:bg-[#d4a9ff] dark:hover:bg-[#250c3e] dark:hover:border-violet-700'
									>
										<Image
											src='/images/svgs/hash.svg'
											alt='hashtag icon'
											width={12}
											height={12}
											className='invert dark:invert-0'
										/>{' '}
										{tag.text}
									</Link>
								);
							})}
						</div>
						<div className='flex mt-2 justify-center float-none md:float-right'>
							<Link
								className='flex items-center no-underline justify-center gap-1 text-violet-50 text-sm font-normal bg-violet-500 dark:bg-violet-600 hover:bg-violet-600 active:bg-violet-700 dark:hover:bg-violet-700 dark:active:bg-violet-800 py-3 px-4 rounded-lg transition-all hover:scale-[1.015] active:scale-[.98]'
								href={course.link}
							>
								Select Course
							</Link>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}

export default function Courses() {
	return (
		<section className='my-0 mx-auto pt-4 px-4 pb-0'>
			<div className='my-0 mx-auto max-w-[50rem]'>
				<PageHeader>Courses</PageHeader>
				<CourseCard course={CourseData.fundamentals} />
				<CourseCard course={CourseData.intermidiate} />
			</div>
		</section>
	);
}
