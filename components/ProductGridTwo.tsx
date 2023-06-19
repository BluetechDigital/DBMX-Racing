// Imports
import {FC} from "react";
import {IProductGrid} from "./types";

// Components
import Paragraph from "./Elements/Paragraph";
import ProductCard from "./Cards/ProductCard";

const ProductGrid: FC<IProductGrid> = ({
	title,
	subtitle,
	paragraph,
	productGrid,
}) => {
	return (
		<section className="py-12 bg-pureBlack md:py-24">
			<div className="container px-4 mx-auto">
				<div className="mb-16">
					<span className="font-bold tracking-wide uppercase text-red text-tiny">
						{subtitle}
					</span>
					<h2 className="max-w-2xl mt-6 mb-2 text-lg font-bold text-white sm:text-3xl md:text-4xl font-heading">
						{title}
					</h2>
					<Paragraph
						content={paragraph}
						tailwindStyling="max-w-3xl mt-4 py-8 text-grey text-left text-base"
					/>
				</div>
				<div className="grid items-start justify-center grid-cols-2 gap-4 px-4 sm:items-center sm:-mb-8 sm:gap-10 sm:-mx-4 lg:grid-cols-3 xl:grid-cols-4 lg:justify-between xl:-mx-8">
					{productGrid?.length > 0 ? (
						productGrid.map((item: any, keys: any) => (
							<ProductCard
								key={keys}
								link={item?.link}
								title={item?.title}
								image={item?.image}
							/>
						))
					) : (
						<></>
					)}
				</div>
			</div>
		</section>
	);
};

export default ProductGrid;
