import type { SiteConfig } from '@/lib/types';
const siteConfig: SiteConfig = {
	avatar: '/avatar.png',
	siteUrl: 'https://nextjs-mdx-blog-theme.vercel.app',
	siteName: 'WebWise',
	siteDescription:
		'Start Your Knowledge Here and Be Wiser in Web Development. Explore our comprehensive, free courses designed to fortify your essential skills.',
	siteThumbnail: '/og-image.png',
	nav: [
		{ label: 'Posts', href: '/posts' },
		{ label: 'About', href: '/about' },
	],
	social: {
		github: 'https://github.com',
	},
};
export default siteConfig;
