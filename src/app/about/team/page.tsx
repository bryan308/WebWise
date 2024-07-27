import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { IMember, IMemberList } from '@/components/about/team/interface/member-list';
import TeamHeader from '@/components/about/team/header';

const memberList: IMemberList = {
	member1: {
		avatar: '/images/avatars/avatar2.jpg',
		name: 'Cedric Angulo',
		role: 'Full-Stack Curriculum Developer (Founder)',
		description:
			'Hey there! I’m the one bringing WebWise’s educational content to life. From designing engaging lessons to making sure everything runs smoothly behind the scenes, I’m all about creating awesome learning experiences for you. Let’s learn together and make the web a smarter place!',
		tags: [
			{ icon: faGithub, href: 'https://github.com/bryan308' },
			{ icon: faFacebook, href: 'https://www.facebook.com/bryan.19.hp' },
			{ icon: faFacebookMessenger, href: 'https://m.me/bryan.19.hp' },
			{ icon: faEnvelope, href: 'mailto:cdrcangulo@gmail.com' },
		],
	},
	member2: {
		avatar: '/images/avatars/avatar1.jpg',
		name: 'Bernard Domingo',
		role: 'Marketing Specialist',
		description:
			'Greetings! I’m the marketing aficionado at WebWise. My role is to get the word out about our platform through strategic campaigns and engaging content. Let’s make some noise and spread the word about WebWise’s awesomeness!',
		tags: [
			{ icon: faFacebook, href: 'https://www.facebook.com/bernard071103' },
			{ icon: faFacebookMessenger, href: 'https://m.me/bernard071103' },
			{ icon: faEnvelope, href: 'mailto:domingobernard0711@gmail.com' },
		],
	},
	member3: {
		avatar: '/images/avatars/avatar7.jpg',
		name: 'Rainiel Sevilla',
		role: 'Content Writer',
		description:
			'I’m the content craftsman behind WebWise’s educational materials. From blog post to lesson plans, I ensure our content is informative, engaging, and impactful. Let’s dive into the world of learning together!',
		tags: [
			{ icon: faGithub, href: 'https://github.com/CallMeSevilla' },
			{ icon: faFacebook, href: 'https://www.facebook.com/rainiel.sevilla.507?mibextid=ZbWKwL' },
			{ icon: faFacebookMessenger, href: 'https://m.me/rainiel.sevilla.507' },
			{ icon: faEnvelope, href: 'mailto:rainielsevilla200@gmail.com' },
		],
	},
};

function TeamMember({ member }: IMember) {
	return (
		<div className='flex flex-col md:flex-row gap-4 p-4 m-4 last:border-none border-b dark:border-b-purple-950'>
			<div className='w-40 min-w-40 aspect-square'>
				<Image
					src={member.avatar}
					alt={`${member.name} Avatar`}
					width={160}
					height={160}
					className='rounded-full'
				/>
			</div>
			<div>
				<h4 className='dark:text-neutral-200 text-xl'>{member.name}</h4>
				<p className='dark:text-neutral-300 font-medium'>{member.role}</p>
				<p className='my-4 mx-0 leading-[1.75] text-base dark:text-neutral-400'>
					{member.description}
				</p>
				<div className='inline-flex gap-4 text-base'>
					{member.tags.map((tag, index) => (
						<Link
							key={index}
							href={tag.href}
							target='_blank'
							rel='noreferrer'
							className='dark:text-violet-300 dark:hover:text-violet-100 hover:scale-[1.05] active:scale-[.99] transition-all'
						>
							<FontAwesomeIcon icon={tag.icon} />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default function Team() {
	return (
		<main>
			<div className='pt-4 px-4 pb-0'>
				<TeamHeader />
				<section>
					<div className='my-0 mx-auto max-w-[50rem]'>
						<p className='text-base dark:text-neutral-400 mb-4 leading-[1.75]'>
							Meet the dedicated individuals behind WebWise, passionate about revolutionizing web
							development education. With a shared commitment to accessibility and innovation, our
							team strives to empower learners worldwide.
						</p>
						<div className='my-12 mx-0 border-l-2 border-b-2 dark:border-l-purple-950 border-b-purple-950 rounded-bl-[32px]'>
							{Object.values(memberList).map((member, index) => (
								<TeamMember
									key={index}
									member={member}
								/>
							))}
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
