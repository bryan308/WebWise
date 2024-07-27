type ITags = {
	icon: any;
	href: string;
	tooltip: string;
}[];

export interface IMember {
	member: {
		avatar: string;
		name: string;
		role: string;
		description: string;
		tags: ITags;
	};
}

export interface IMemberList {
	member1: {
		avatar: string;
		name: string;
		role: string;
		description: string;
		tags: ITags;
	};
	member2: {
		avatar: string;
		name: string;
		role: string;
		description: string;
		tags: ITags;
	};
	member3: {
		avatar: string;
		name: string;
		role: string;
		description: string;
		tags: ITags;
	};
}
