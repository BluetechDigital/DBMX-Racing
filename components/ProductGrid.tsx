import {FC} from "react";
import {motion} from "framer-motion";
import Paragraph from "./Elements/Paragraph";
import {fadeIn, stagger} from "../animations/animations";
import ProductCard from "./Cards/ProductCard";

interface IProps {
	title: string;
	subtitle: string;
	paragraph: string;
	productGrid: [
		{
			id: string;
			title: string;
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
		}
	];
}

const ProductGrid: FC<IProps> = ({title, subtitle, paragraph, productGrid}) => {
	return (
		<section className="py-12 bg-pureBlack md:py-24">
			<div className="container px-4 mx-auto">
				<div className="max-w-sm mx-auto md:max-w-xl lg:max-w-none">
					<div className="mb-16">
						<span className="font-bold tracking-wide uppercase text-red text-tiny">
							{subtitle}
						</span>
						<h2 className="max-w-2xl mt-6 mb-2 text-4xl font-bold text-white font-heading">
							{title}
						</h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-3xl mt-4 py-8 text-grey text-left text-medium"
						/>
					</div>
					<div className="grid items-center justify-center gap-10 -mx-4 -mb-8 grid-col sm:grid-cols-2 lg:grid-cols-4 lg:justify-between xl:-mx-8">
						{productGrid?.length > 0 ? (
							productGrid.map((item: any, keys: any) => (
								<ProductCard
									key={keys}
									title={item?.title}
									image={item?.image}
								/>
							))
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductGrid;
