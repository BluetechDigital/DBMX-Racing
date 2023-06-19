import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	postType: string;
	previewPostId: string;
};

interface ISlug extends Array<SlugResponse> {}

export const getPreviewRedirectUrl = async (
	postType: string,
	previewPostId: string
) => {
	try {
		if (postType == null || undefined || previewPostId == null || undefined) {
			return "";
		}

		switch (postType) {
			case "post":
				return `/blogs/preview/${previewPostId}/`;
			case "page":
				return `/pages/preview/${previewPostId}/`;
			default:
				return "/";
		}
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to get postType & previewPostId slugs"
		);
	}
};
