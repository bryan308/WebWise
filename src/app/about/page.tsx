import { lexend } from '@/lib/fonts';
import PageHeader from '@/components/shared/ui/header';

function AboutPage() {
	return (
		<section className='animate-fadeIn [--fadeIn-delay:0ms] opacity-0 pt-4 px-4 pb-0'>
			<PageHeader>About WebWise</PageHeader>
			<div className='my-0 mx-auto max-w-[50rem]'>
				<article className='pb-8 mt-4 mx-0 mb-12'>
					<p className='text-base dark:text-neutral-400 mb-4 leading-[1.75]'>
						Welcome to WebWise, your ultimate destination for mastering web development! At WebWise,
						we’re committed to empowering individuals with the knowledge and skills necessary to
						thrive in the ever-evolving realm of web development.
					</p>
					<p className='text-base dark:text-neutral-400 mb-4 leading-[1.75]'>
						Our platform offers accessible, comprehensive, and high-quality web development
						education for beginners and aspiring professionals alike. Whether you’re taking your
						first steps into the world of coding or looking to expand your existing skill set,
						WebWise provides a supportive environment where you can learn and grow at your own pace.
					</p>
				</article>
				<article className='pb-8 mt-4 mx-0 mb-12'>
					<p className={`${lexend.className} subheader`}>Overview</p>
					<div className='overview_grid_container'>
						<div
							style={{ gridArea: '1 / 1 / 2 / 2' }}
							className='group grad_text_container flex items-center justify-center flex-col'
						>
							<span className={`${lexend.className} grad_text group-hover:bg-left`}>2019</span>
							<h4 className='dark:text-neutral-300 text-md font-normal'>founded</h4>
						</div>
						<div
							style={{ gridArea: '1 / 2 / 2 / 3' }}
							className='group grad_text_container flex items-center justify-center flex-col'
						>
							<span className={`${lexend.className} grad_text group-hover:bg-left`}>20+</span>
							<h4 className='dark:text-neutral-300 text-md font-normal'>lessons</h4>
						</div>
						<div
							style={{ gridArea: '1 / 3 / 3 / 4' }}
							className='group grad_text_container flex items-center justify-center flex-col'
						>
							<span className={`${lexend.className} grad_text group-hover:bg-left`}>30,000+</span>
							<h4 className='dark:text-neutral-300 text-md font-normal'>active learners monthly</h4>
						</div>
						<div
							style={{ gridArea: '3 / 3 / 6 / 4' }}
							className='group grad_text_container'
						>
							<div className='group'>
								<svg
									className='group-hover:scale-[1.15] dark:group-hover:fill-violet-100 dark:fill-violet-300 w-6 transition-all'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
								>
									<path d='M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z'></path>
								</svg>
							</div>
							<h3 className={`${lexend.className} grid_item_title`}>How it started?</h3>
							<p className='paragraph'>
								WebWise began its journey in 2019, driven by the vision to democratize web
								development education. With over 25 lessons and counting, we’ve grown to become a
								trusted resource for over 30,000 active learners worldwide.
							</p>
						</div>
						<div
							style={{ gridArea: '2 / 1 / 4 / 3' }}
							className='group grad_text_container'
						>
							<div className='group'>
								<svg
									className='group-hover:scale-[1.15] dark:group-hover:fill-violet-100 dark:fill-violet-300 w-6 transition-all'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
								>
									<path
										fillRule='evenodd'
										d='M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z'
										clipRule='evenodd'
									></path>
									<path d='M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z'></path>
								</svg>
							</div>
							<h3 className={`${lexend.className} grid_item_title`}>Mission</h3>
							<p className='paragraph'>
								To provide accessible, comprehensive, and top-quality web development courses
								tailored for beginners and seasoned professionals alike. Whether you’re taking your
								first steps into coding or aiming to enhance your expertise, WebWise offers a
								diverse array of courses to suit your needs.
							</p>
						</div>
						<div
							style={{ gridArea: '4 / 1 / 6 / 3' }}
							className='group grad_text_container'
						>
							<div className='group'>
								<svg
									className='group-hover:scale-[1.15] dark:group-hover:fill-violet-100 dark:fill-violet-300 w-6 transition-all'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
								>
									<path d='M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'></path>
									<path
										fillRule='evenodd'
										d='M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z'
										clipRule='evenodd'
									></path>
								</svg>
							</div>
							<h3 className={`${lexend.className} grid_item_title`}>Vision</h3>
							<p className='paragraph'>
								WebWise envisions a future where learning knows no boundaries. We aspire to be the
								premier international online learning platform, fostering a supportive environment
								where learners of all backgrounds can thrive and succeed.
							</p>
						</div>
					</div>
				</article>
				<article className='pb-8 mt-4 mx-0 mb-12'>
					<p className={`${lexend.className} subheader`}>What WebWise can offer</p>
					<div className='grid md:grid-cols-2 gap-4'>
						<div className='group flex flex-col w-auto h-auto p-4'>
							<div className='group'>
								<svg
									className='group-hover:scale-[1.15] dark:group-hover:fill-violet-100 w-6 h-6 dark:fill-violet-300 transition-all'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
								>
									<path d='M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z'></path>
								</svg>
							</div>
							<div>
								<h3 className={`${lexend.className} grid_item_title`}>Learning made easy</h3>
								<p className='paragraph'>
									Jump into our handpicked courses and resources that make learning web development
									a breeze. Our organized lessons cater to all skill levels, ensuring everyone finds
									their stride.
								</p>
							</div>
						</div>
						<div className='group flex flex-col w-auto h-auto p-4'>
							<div className='group'>
								<svg
									className='group-hover:scale-[1.15] dark:group-hover:fill-violet-100 w-6 h-6 dark:fill-violet-300 transition-all'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
								>
									<path
										fillRule='evenodd'
										d='M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z'
										clipRule='evenodd'
									></path>
									<path d='M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z'></path>
								</svg>
							</div>
							<div>
								<h3 className={`${lexend.className} grid_item_title`}>A Friendly Community</h3>
								<p className='paragraph'>
									Join our lively community of learners, mentors, and enthusiasts. Dive into
									discussions, seek advice, and team up with like-minded individuals who share your
									passion for web development. Here, support and camaraderie thrive.
								</p>
							</div>
						</div>
						<div className='group flex flex-col w-auto h-auto p-4'>
							<div className='group'>
								<svg
									className='group-hover:scale-[1.15] dark:group-hover:fill-violet-100 w-6 h-6 dark:fill-violet-300 transition-all'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
								>
									<path d='M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z'></path>
									<path
										fillRule='evenodd'
										d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z'
										clipRule='evenodd'
									></path>
								</svg>
							</div>
							<div>
								<h3 className={`${lexend.className} grid_item_title`}>Personalized Support</h3>
								<p className='paragraph'>
									Get personalized guidance and mentorship from seasoned pros and industry experts.
									Receive valuable insights, feedback, and advice tailored to your learning journey.
								</p>
							</div>
						</div>
						<div className='group flex flex-col w-auto h-auto p-4'>
							<div className='group'>
								<svg
									className='group-hover:scale-[1.15] dark:group-hover:fill-violet-100 w-6 h-6 dark:fill-violet-300 transition-all'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
								>
									<path
										fillRule='evenodd'
										d='M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z'
										clipRule='evenodd'
									></path>
								</svg>
							</div>
							<div>
								<h3 className={`${lexend.className} grid_item_title`}>Stay in the Loop</h3>
								<p className='paragraph'>
									Stay ahead of the curve with the latest web development trends and technologies.
									Our resources and ongoing support ensure you’re always in the know, keeping your
									skills sharp and competitive.
								</p>
							</div>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
}

export default AboutPage;
