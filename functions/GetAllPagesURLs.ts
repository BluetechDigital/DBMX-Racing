import {client} from "../config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
};

interface ISlug extends Array<SlugResponse> {}

export const getAllPagesURLs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				pageURLs: pages(where: {status: PUBLISH}) {
					nodes {
						slug
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.pageURLs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error("Something went wrong trying to fetch all pages urls");
	}
};
