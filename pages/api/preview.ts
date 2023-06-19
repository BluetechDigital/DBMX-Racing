import {getPreviewRedirectUrl} from "@/functions/graphql/Queries/GetAllPreviewPages&Posts";

export default async function preview(req: any, res: any) {
	const {postType, postId} = res.query;

	const previewUrl = getPreviewRedirectUrl(postType, postId);
	// res.writeHead(307, {Location: previewUrl});

	req.end();
}
