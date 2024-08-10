'use client';

import { lexend } from '@/lib/fonts';
import Image from 'next/image';
import React from 'react';

function NotFound() {
	return (
		<>
			<div className='mb-40'>
				<Image
					style={{ display: 'block', margin: 'auto', maxWidth: '350px' }}
					src='/images/svgs/404.svg'
					alt='404 image'
					width={350}
					height={327}
				/>
				<h3 className={`${lexend.className} font-bold text-violet-400 text-center`}>404 not found</h3>
				<h2 className={`${lexend.className} font-bold text-xl text-violet-50 text-center mb-4`}>Whoops! That page doesn&apos;t exist.</h2>
			</div>
		</>
	);
}

export default NotFound;
