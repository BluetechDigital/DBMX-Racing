import {client} from "@/config/apollo";
import {DocumentNode, gql, useMutation} from "@apollo/client";

export const getAllDraftPostsSlugs = async () => {
	try {
		const draftPostsSlugs: DocumentNode = gql`
			{
				login(
					input: {
						username: "toddmin"
						password: "D3NHtD(NXh2hf7$vSst@QlyE"
						clientMutationId: "uniqueId"
					}
				) {
					user {
						posts(where: {status: DRAFT}) {
							nodes {
								slug
								modified
							}
						}
					}
				}
			}
		`;

		const [mutateFunction, {data, loading, error}] =
			useMutation(draftPostsSlugs);

		const response: any = await client.query({
			mutation: draftPostsSlugs,
		});

		return {
			data,
			error,
			loading,
			mutateFunction,
		};
	} catch (error) {
		console.log(error);
		throw new Error("Something went wrong trying to get all draft posts slugs");
	}
};
