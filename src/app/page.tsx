import Image from 'next/image';
import { lexend } from '@/lib/fonts';
import Link from 'next/link';
import { cards } from '../components/home/overview-meta';
import styles from '../components/home/styles/home.module.scss';
import { testimonials } from '@/components/home/testimonials';
import { Button } from '@/components/shared/ui/button';

function Home() {
	return (
		<>
			<div className='flex items-center justify-center m-auto max-w-7xl h-[75dvh]'>
				<div className='my-0 mx-auto py-0 px-4'>
					<div className='max-w-[60rem] m-auto text-center'>
						<h1 className='font-medium text-gray-700 dark:text-gray-200 text-4xl md:text-6xl md:leading-[1.25]'>
							Start Your <span className='hero-highlight'>Knowledge</span> Here and Be{' '}
							<span className='hero-highlight'>Wiser</span> in{' '}
							<span className='hero-highlight'>Web Development</span>
						</h1>
						<p className='text-gray-600 dark:text-gray-400 w-[80%] md:w-[60%] text-center m-auto'>
							Explore our comprehensive, free courses designed to fortify your essential skills.
						</p>
					</div>
					<div className='w-max mt-12 mx-auto mb-0'>
						<Button
							variant='outline'
							asChild
						>
							<Link href='/courses'>Explore now</Link>
						</Button>
					</div>
				</div>
			</div>
			<div className='w-full'>
				<Image
					className='mx-auto'
					src='/images/web-banner.jpg'
					alt='web banner'
					width={2200}
					height={150}
				/>
			</div>
			<div className='bg-[#fefaff] dark:bg-[#111113] py-12 my-16 mx-0'>
				<div className='max-w-3xl my-0 mx-auto text-center px-4'>
					<p
						className={`text-3xl text-center font-medium px-4 text-gray-800 dark:text-gray-200 ${lexend.className}`}
					>
						Explore WebWise’s Impact
					</p>
					<p className='text-base text-neutral-400 mb-4 leading-relaxed'>
						Take a peek behind the scenes and see how WebWise changed the game in web development
						education. Since we started in February 2019, we’ve been all about making learning easy
						for everyone. Check out the numbers below to see what we’ve been up to!
					</p>
					<div className='grid md:grid-cols-4 grid-cols-2 my-8 mx-0 gap-4'>
						<div>
							<span className={`${lexend.className} ${styles.grad_text}`}>5000</span>
							<p className='text-base text-gray-700 dark:text-gray-400 leading-relaxed'>
								average daily visits
							</p>
						</div>
						<div>
							<span className={`${lexend.className} ${styles.grad_text}`}>20+</span>
							<p className='text-base text-gray-700 dark:text-gray-400 leading-relaxed'>lessons</p>
						</div>
						<div>
							<span className={`${lexend.className} ${styles.grad_text}`}>30,000+</span>
							<p className='text-base text-gray-700 dark:text-gray-400 leading-relaxed'>
								active learners monthly
							</p>
						</div>
						<div>
							<span className={`${lexend.className} ${styles.grad_text}`}>21,456</span>
							<p className='text-base text-gray-700 dark:text-gray-400 leading-relaxed'>
								Discord community
							</p>
						</div>
					</div>
					<Button
						variant='outline'
						asChild
					>
						<Link href='/about'>Learn more</Link>
					</Button>
				</div>
			</div>
			<p className={`${lexend.className} text-3xl text-center px-4`}>Overview of WebWise lessons</p>
			<div className={styles.gallery_grid}>
				{cards.map((c, i: number) => (
					<Link
						key={i}
						href={`${c.href}`}
						style={{
							gridArea: `${c.grid}`,
							backgroundImage: `linear-gradient(to bottom, #00000000, #5b21b6 ), url(${c.image})`,
						}}
						className={styles.grid_item}
					>
						<div className={styles.item_texts}>
							<h4 className={`${lexend.className} text-violet-50 text-xl`}>{c.header}</h4>
							<span>{c.subheader}</span>
						</div>
					</Link>
				))}
			</div>
			<div className={styles.testimonial_wrapper}>
				<p className={`${styles.subheader} ${lexend.className}`}>WebWise Testimonials</p>
				<div className={`${styles.testimonial_container} flex flex-col md:grid`}>
					{testimonials.map((t, i: number) => (
						<figure key={i}>
							<blockquote>
								<h3>{t.header}</h3>
								<p>{t.qoute}&rdquo;</p>
							</blockquote>
							<figcaption>
								<Image
									width={40}
									height={40}
									src={`/images/avatars/${t.src}.jpg`}
									alt='avatar'
								/>
								<div>
									<p>{t.name}</p>
									<span>{t.school}</span>
								</div>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</>
	);
}

export default Home;
