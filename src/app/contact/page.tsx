import { Button } from '@/components/shared/ui/button';
import PageHeader from '@/components/shared/ui/header';

function Contact() {
	return (
		<>
			<div className='pt-4 px-4 pb-0'>
				<section className='animate-fadeIn [--fadeIn-delay:0ms] opacity-0'>
					<div className='my-0 mx-auto mb-16 max-w-[50rem]'>
						<PageHeader className='max-w-[40rem] mx-auto'>
							Connect with Us and Elevate Your Web Development Journey
						</PageHeader>
						<p className='max-w-[30rem] text-center mx-auto text-base dark:text-neutral-400 leading-[1.75]'>
							Your questions matter. Expect a response within 24 hours. Reach out, and let’s elevate
							your web development journey together!
						</p>
						<div className='max-w-[30rem] my-0 mx-auto'>
							<form
								action=''
								className='p-4'
							>
								<div className='flex flex-col my-8 mx-0'>
									<label className='dark:text-neutral-300'>Name</label>
									<input
										type='text'
										maxLength={12}
										autoComplete='off'
										className='dark:text-violet-50 outline-none py-1 px-2 bg-transparent border-b-2 dark:border-b-violet-400 dark:hover:border-b-violet-200 transition-all'
									/>
								</div>
								<div className='flex flex-col my-8 mx-0'>
									<label className='dark:text-neutral-300'>Email</label>
									<input
										type='email'
										autoComplete='off'
										className='dark:text-violet-50 outline-none py-1 px-2 bg-transparent border-b-2 dark:border-b-violet-400 dark:hover:border-b-violet-200 transition-all'
									/>
								</div>
								<div className='flex flex-col my-8 mx-0'>
									<label className='dark:text-neutral-300'>Message</label>
									<textarea
										name='message'
										cols={30}
										rows={5}
										maxLength={250}
										className='dark:text-violet-50 outline-none py-1 px-2 bg-transparent border-b-2 dark:border-b-violet-400 dark:hover:border-b-violet-200 transition-all'
									></textarea>
								</div>
								<Button variant='default'>
									Send Message
									<svg
										className='ml-2 w-4 h-4'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth='2'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
										></path>
									</svg>
								</Button>
							</form>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default Contact;
