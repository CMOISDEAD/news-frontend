// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	interface PostType {
		id?: number;
		user_id: number;
		title: string;
		description: string;
		url: string;
		comments: [];
	}
	interface CommentType {
		id: number;
		user_id: number;
		content: string;
		kids: CommentType[];
	}
	interface UserType {
		id: number;
		username: string;
		email: string;
		password: string;
	}
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export { };
