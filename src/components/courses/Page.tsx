import Head from 'next/head';
import { onlyText } from 'react-children-utilities';
import { formatDate } from '@/lib/formatDate';
import siteConfig from '@/data/siteConfig';
import { cn } from '@/lib/utils';
import { NextPage } from 'next';
// import { Prose } from '@/components/shared/Prose';

interface PageProps {
	date?: string;
	title: string | React.ReactNode;
	description?: string | React.ReactNode;
	thumbnail?: string;
	children?: React.ReactNode;
}

export const Page: NextPage<PageProps> = ({ date, title, description, thumbnail, children }) => {
	const metaTitle = onlyText(title);
	const metaDescription = description ? onlyText(description) : siteConfig.siteDescription;
	const metaThumbnail = thumbnail ? thumbnail : siteConfig.siteThumbnail;
	// fixed https://github.com/vercel/next.js/discussions/38256
	const customTitle = `${metaTitle} - ${siteConfig.siteName}`;
	return (
		<>
			{/* <Head>
				<title>{customTitle}</title>
				<meta
					name='og:url'
					content={siteConfig.siteUrl}
				/>
				<meta
					property='og:title'
					content={metaTitle}
				/>
				<meta
					name='description'
					content={metaDescription}
				/>
				<meta
					name='og:description'
					content={metaDescription}
				/>
				<meta
					property='og:image'
					content={`${siteConfig.siteUrl}${metaThumbnail}`}
				/>
			</Head> */}
			<main className='max-w-[50rem] mx-auto'>
				<header className={cn('mb-8 pb-8 border-b', 'border-gray-200', 'dark:border-gray-700')}>
					{date ? (
						<time className={cn('block mb-2', 'text-gray-500', 'dark:text-gray-400')}>
							{formatDate(date)}
						</time>
					) : null}
					<h1 className='font-bold text-3xl'>{title}</h1>
					{description ? (
						<div className='mt-4'>
							<p>{description}</p>
							{/* <Prose>{typeof description === 'string' ? <p>{description}</p> : description}</Prose> */}
						</div>
					) : null}
				</header>
				{children}
			</main>
		</>
	);
};
