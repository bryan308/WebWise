import Link from 'next/link';
import PageHeader from '@/components/shared/ui/header';

function SignInPage() {
	return (
		<section className='animate-fadeIn [--fadeIn-delay:0ms] opacity-0 pt-4 px-4 pb-0'>
			<PageHeader>Sign In</PageHeader>
			<div className='mt-8 mb-16 mx-0'>
				<form
					action=''
					className='dark:bg-[#16202d] max-w-md p-8 my-0 mx-auto rounded-lg'
				>
					<div className='mb-4'>
						<button
							type='submit'
							className='group w-full text-base mt-0 relative flex justify-center dark:text-neutral-300 font-medium py-2 px-1 border dark:border-gray-600 rounded-[4px] dark:bg-gray-800 dark:hover:bg-gray-700 hover:scale-[1.01] cursor-pointer transition-all duration-300'
						>
							<svg
								className='group-hover:fill-neutral-300 transition-all dark:fill-neutral-500 absolute -translate-x-2/4 left-6 top-3 w-7'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 24 24'
							>
								<path d='M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z'></path>
							</svg>{' '}
							Continue with Google{' '}
						</button>
						<button
							type='submit'
							className='group w-full text-base mt-4 relative flex justify-center dark:text-neutral-300 font-medium py-2 px-1 border dark:border-gray-600 rounded-[4px] dark:bg-gray-800 dark:hover:bg-gray-700 hover:scale-[1.01] cursor-pointer transition-all duration-300'
						>
							<svg
								className='group-hover:fill-neutral-300 transition-all dark:fill-neutral-500 absolute -translate-x-2/4 left-6 top-3 w-7'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 24 24'
							>
								<path d='M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z'></path>
							</svg>{' '}
							Continue with Facebook{' '}
						</button>
						<button
							type='submit'
							className='group w-full text-base mt-4 relative flex justify-center dark:text-neutral-300 font-medium py-2 px-1 border dark:border-gray-600 rounded-[4px] dark:bg-gray-800 dark:hover:bg-gray-700 hover:scale-[1.01] cursor-pointer transition-all duration-300'
						>
							<svg
								className='group-hover:fill-neutral-300 transition-all dark:fill-neutral-500 absolute -translate-x-2/4 left-6 top-3 w-7'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 24 24'
							>
								<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8'></path>
							</svg>{' '}
							Continue with GitHub{' '}
						</button>
					</div>
					<div className='inline-flex items-center justify-center w-full'>
						<hr className='w-full border dark:border-gray-700 my-4 mx-0 opacity-25 bg-current' />
						<span className='py-0 px-2 absolute -translate-x-2/4 left-2/4 dark:text-gray-400 dark:bg-[#16202d]'>
							or
						</span>
					</div>
					<div className='flex flex-col my-4 mx-0'>
						<label
							htmlFor='email'
							className='dark:text-neutral-300 text-sm'
						>
							Email address
						</label>
						<input
							type='email'
							className='dark:text-neutral-200 text-base font-medium bg-transparent py-2 px-4 outline-none border-b-2 dark:border-b-violet-400 dark:hover:border-b-violet-200'
							id='email'
							autoComplete='off'
						/>
					</div>
					<div className='flex flex-col my-4 mx-0'>
						<label
							htmlFor='password'
							className='dark:text-neutral-300 text-sm'
						>
							Password
						</label>
						<input
							type='password'
							className='dark:text-neutral-200 text-base font-medium bg-transparent py-2 px-4 outline-none border-b-2 dark:border-b-violet-400 dark:hover:border-b-violet-200'
							id='password'
							autoComplete='off'
						/>
					</div>
					<div className='flex justify-between my-4 mx-0'>
						<div className='flex items-center'>
							<input
								type='checkbox'
								name='chck1'
								id='remember-chck1'
								className='mr-2'
							/>
							<label
								htmlFor='remember-chck1'
								className='dark:text-neutral-300 text-sm'
							>
								Remember me
							</label>
						</div>
						<div className='flex items-center'>
							<Link
								href=''
								className='text-sm dark:text-neutral-300 no-underline hover:underline'
							>
								Forgot password?
							</Link>
						</div>
					</div>
					<button
						className='flex items-center w-full no-underline justify-center gap-1 dark:text-violet-50 font-normal dark:bg-violet-600 dark:hover:bg-violet-700 dark:active:bg-violet-800 py-3 px-4 rounded-lg transition-all hover:scale-[1.015] active:scale-[.98]'
						type='submit'
					>
						Sign in
					</button>
					<div className='flex justify-center items-center gap-2 dark:text-neutral-300 text-sm mt-4'>
						<span className='dark:text-neutral-300 text-sm'>Don’t have an account? </span>
						<Link
							className='leading-none dark:text-blue-500 underline underline-offset-4 decoration-2 text-sm dark:hover:text-indigo-400 dark:hover:decoration-1'
							href='/signup'
						>
							Create New
						</Link>
					</div>
				</form>
			</div>
		</section>
	);
}

export default SignInPage;
