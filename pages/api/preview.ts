import {getAllDraftPostsSlugs} from "@/functions/graphql/Queries/GetAllPreviewPages&Posts";

export default async function preview(req: any, res: any) {
	const {postType, postId} = res.query;

	req.end();
}
