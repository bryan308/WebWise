export interface ICourse {
	fundamentals: ICourseMeta;
	intermidiate: ICourseMeta;
}

export interface ICourseParam {
	course: ICourseMeta;
}

interface ICourseMeta {
	title: string;
	description: string;
	thumbnail: string;
	link: string;
	tags: TTags;
}

type TTags = {
	text: string;
	href: string;
}[];

export interface IChildren {
	children: React.ReactNode;
}

export interface NoteProps extends IChildren {
	emoji?: string;
}

export interface TagProps {
	href: string;
	children: string;
}

export interface ILink extends IChildren {
	href: string;
}

export interface ICard extends IChildren {
	variant?: 'notes' | 'warning' | 'tips' | null | undefined;
	className?: string;
	header?: string;
}