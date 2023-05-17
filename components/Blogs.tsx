// Import
import {FC} from "react";
import {motion} from "framer-motion";
import BlogsCard from "./Cards/BlogsCard";
import {fadeInUp, stagger} from "../animations/animations";

interface IProps {
	blogs: [
		{
			node: {
				id: string;
				uri: string;
				date: string;
				title: string;
				singleBlogPost: {
					titleParagraph: {
						paragraph: string;
					};
				};
				featuredImage: {
					node: {
						altText: string;
						sourceUrl: string;
						mediaDetails: {
							width: number;
							height: number;
						};
					};
				};
			};
		}
	];
}

const Blogs: FC<IProps> = ({blogs}) => {
	return (
		<section className="px-4 py-24 bg-white">
			<div className="container px-4 mx-auto">
				<motion.div
					variants={stagger}
					className="grid gap-4 mb-16 -m-4 sm:gap-y-2 sm:gap-x-0 lg:gap-4 grid-col md:grid-cols-2 lg:grid-cols-3"
				>
					{blogs?.length > 0 ? (
						blogs.map((keys: any) => (
							<BlogsCard
								key={keys?.node?.id}
								uri={keys?.node?.uri}
								date={keys?.node?.date}
								title={keys?.node?.title}
								featuredImage={keys?.node?.featuredImage}
								paragraph={
									keys?.node?.singleBlogPost?.titleParagraph?.paragraph
								}
							/>
						))
					) : (
						<h2 className="mx-auto text-3xl text-center text-black md:text-4xl">
							Sorry No posts
						</h2>
					)}
				</motion.div>
				{/* <motion.div variants={fadeInUp} className="text-center">
					<button className="px-8 py-5 text-base font-bold leading-normal tracking-wider text-white uppercase bg-red hover:bg-darkRed">
						Load more articles
					</button>
				</motion.div> */}
			</div>
		</section>
	);
};

export default Blogs;
