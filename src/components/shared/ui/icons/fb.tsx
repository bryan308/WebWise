type FacebookIconProps = {
	solid: boolean;
};

export const FacebookIcon = ({ solid }: FacebookIconProps) => (
	<>
		<svg
			role='img'
			viewBox='0 0 16 16'
			className='w-4 h-4'
			fill='currentColor'
			xmlns='http://www.w3.org/2000/svg'
		>
			{solid === false ? (
				<>
					<title>Facebook</title>
					<path d='M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z' />
				</>
			) : (
				<>
					<title>Facebook</title>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z'
					></path>
				</>
			)}
		</svg>
	</>
);
