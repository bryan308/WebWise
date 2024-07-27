type TFooterItem = { header: string; links: TFooterLink }[];

type TFooterLink = { href: string; text: string }[];

export const footerItems: TFooterItem = [
	{
		header: 'About Us',
		links: [
			{
				text: 'About',
				href: '/about',
			},
			{
				text: 'Team',
				href: '/about/team',
			},
		],
	},
	{
		header: 'Support',
		links: [
			{
				text: 'FAQ',
				href: '/not-found',
			},
			{
				text: 'Contact',
				href: '/contact',
			},
			{
				text: 'Donate',
				href: '/not-found',
			},
		],
	},
	{
		header: 'Legal',
		links: [
			{
				text: 'Terms',
				href: '/not-found',
			},
			{
				text: 'Privacy',
				href: '/not-found',
			},
		],
	},
];
