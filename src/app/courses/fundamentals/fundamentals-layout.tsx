import React from 'react';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/shared/ui/breadcrumb';
import PageHeader from '@/components/shared/ui/header';
import Image from 'next/image';

interface BreadcrumbData {
	title: string;
	link: string;
}

interface RootLayoutProps {
	children: React.ReactNode;
	breadcrumbs?: BreadcrumbData[];
	pageHeader?: string;
}

function FundamentalsLayout({
	children,
	breadcrumbs = [],
	pageHeader = 'Fundamentals',
}: RootLayoutProps) {
	return (
		<main className='mx-auto max-w-[50rem] animate-fadeIn [--fadeIn-delay:0ms] opacity-0'>
			<Breadcrumb className='py-4'>
				<BreadcrumbList className='justify-center items-center list-none px-0'>
					<BreadcrumbItem>
						<BreadcrumbLink href='/courses'>Courses</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href='/courses/fundamentals'>Fundamentals</BreadcrumbLink>
					</BreadcrumbItem>
					{breadcrumbs.map((crumb, index) => (
						<React.Fragment key={index}>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage className='min-w-12 truncate'>{crumb.title}</BreadcrumbPage>
							</BreadcrumbItem>
						</React.Fragment>
					))}
				</BreadcrumbList>
			</Breadcrumb>
			<div className='px-4 lg:px-0 mb-4'>
				<Image
					className='mx-auto block'
					src='/images/pngs/book.png'
					alt='course icon'
					width={112}
					height={112}
					priority
				/>
				<PageHeader>{pageHeader}</PageHeader>
			</div>
			<div className='px-4 lg:px-0'>{children}</div>
		</main>
	);
}

export default FundamentalsLayout;
