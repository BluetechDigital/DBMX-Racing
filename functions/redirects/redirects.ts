// Imports
import {isEmpty} from "lodash";

export const getPreviewRedirectUrl = (postType = "", previewPostId = "") => {
	if (isEmpty(postType) || isEmpty(previewPostId)) {
		return "";
	}

	switch (postType) {
		case "post":
			return `/blogs/preview/${previewPostId}/`;
		case "page":
			return `/preview/${previewPostId}/`;
		default:
			return "/";
	}
};

export const getLoginPreviewRedirectUrl = (
	postType = "",
	previewPostId = ""
) => {
	return `/login/?postType=${postType || ""}&previewPostId=${
		previewPostId || ""
	}`;
};
