import { cn, slugify } from '@/lib/utils';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import ImageRender, { TImageRender } from '../shared/image-render';
import { Lightbulb, Loader, StickyNote, TriangleAlert } from 'lucide-react';
import { lexend } from '@/lib/fonts';
import { cva } from 'class-variance-authority';
import { ICard, IChildren, ILink, NoteProps, TagProps } from './interface/course';

const cardVariants = cva('relative bg-[#141414] border-l border-l-8 p-4 my-4 rounded-md', {
	variants: {
		variant: {
			notes: 'border-yellow-500',
			tips: 'border-blue-500',
			warning: 'border-orange-500',
		},
	},
	defaultVariants: {
		variant: 'notes',
	},
});

const CardHeader = ({ children }: { children?: React.ReactNode }) => {
	return (
		<h4 className={cn(lexend.className, 'text-xl font-semibold leading-normal ml-8 mb-4')}>
			{children}
		</h4>
	);
};
CardHeader.displayName = 'CardHeader';

const Card = ({ header, children, variant }: ICard) => {
	return (
		<div
			card-type={`${variant}`}
			className={cn(cardVariants({ variant }))}
		>
			{variant == 'notes' ? (
				<StickyNote className='text-yellow-500 absolute left-4 top-5' />
			) : variant == 'tips' ? (
				<Lightbulb className='text-blue-500 absolute left-4 top-5' />
			) : variant == 'warning' ? (
				<TriangleAlert className='text-orange-500 absolute left-4 top-5' />
			) : (
				<Loader />
			)}
			<CardHeader>{header}</CardHeader>
			{children}
		</div>
	);
};
Card.displayName = 'Card';

const MDXLink = ({ href, children }: ILink) => (
	<Link
		href={`${href}`}
		className='leading-none text-blue-500 text-base underline decoration-blue-500 underline-offset-4 decoration-2 visited:text-violet-500 transition-all hover:text-indigo-400 hover:decoration-[1.5px] focus:text-indigo-400 focus:decoration-[1.5px] active:text-red-500'
		target='_blank'
	>
		{children}
	</Link>
);
MDXLink.displayName = 'MDXLink';

const PImage = ({ ...props }: TImageRender) => {
	return (
		<ImageRender
			className='float-left p-3 max-w-[100px]'
			{...props}
		/>
	);
};
PImage.displayName = 'PImage';

const MDXImage = ({ className, source, ...props }: TImageRender) => {
	return (
		<div className={cn(source === '' || source === undefined ? '' : 'mb-4')}>
			<ImageRender
				{...props}
				className={cn(className, 'mx-auto rounded-lg max-w-[50%]')}
			/>
			{source === '' || source === undefined ? (
				<></>
			) : (
				<p className='max-w-[50%] mx-auto whitespace-nowrap overflow-hidden text-ellipsis text-center'>
					Source:{' '}
					<Link
						href={`${source}`}
						className='text-sm text-neutral-400'
					>
						{source}
					</Link>
				</p>
			)}
		</div>
	);
};

const Section = ({ children }: IChildren) => <section className='mt-4 mb-12'>{children}</section>;
Section.displayName = 'Section';

const Note: NextPage<NoteProps> = ({ emoji, children }) => {
	return (
		<aside
			className={cn(
				'p-4 flex gap-4 border rounded-md',
				'bg-gray-100',
				'dark:bg-gray-800 dark:border-gray-700'
			)}
		>
			{emoji ? <span>{emoji}</span> : null}
			{children}
		</aside>
	);
};
Note.displayName = 'Note';

const Tag: NextPage<TagProps> = ({ href, children }) => {
	return (
		<Link
			href={href}
			className={cn(
				'inline-block text-sm py-0.5 px-2.5 rounded-full border hover:underline',
				'bg-gray-100 border-gray-200',
				'dark:bg-gray-800 dark:border-gray-700'
			)}
		>
			#{slugify(children)}
		</Link>
	);
};
Tag.displayName = 'Tag';

export { Card, Section, MDXImage, MDXLink, Note, PImage, Tag };
