// Imports
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PREVIEW POSTS SLUGS (URLS) */
/* Fetch Preview posy slugs) */
export const getPreviewPostSlugs = async (id: number, authToken: string) => {
	try {
		const content: DocumentNode = gql`
			query getPreviewPostSlug($id: ID!) {
				post(idType: DATABASE_ID, id: $id) {
					id
					title
					content
					slug
					uri
					status
				}
			}
		`;

		const {data, errors}: any = await client.query({
			query: content,
			variables: {
				id: id,
			},
			context: {
				headers: {
					authorization: authToken ? `Bearer ${authToken}` : "",
				},
			},
		});

		return {
			data: data?.post,
			errors: errors,
		};
	} catch (error) {
		console.log(error);
		throw new Error("Something went wrong trying to get preview post slug");
	}
};
