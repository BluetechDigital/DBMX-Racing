import {FC} from "react";
import JumboContentCard from "./Cards/JumboContentCard";

interface IProps {
	jumboContentSection: [
		{
			content: {
				id: string;
				title: string;
				subtitle: string;
				paragraph: string;
				imageLocation: string;
				backgroundDisplay: string;
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: number;
						width: number;
					};
				};
				buttonLink: {
					url: string;
					title: string;
					target: string;
				};
			};
		}
	];
}

const jumboContent: FC<IProps> = ({jumboContentSection}) => {
	return (
		<section>
			{jumboContentSection?.length > 0 ? (
				jumboContentSection.map((item: any, keys: any) => (
					<JumboContentCard
						key={keys}
						title={item?.content?.title}
						image={item?.content?.image}
						subtitle={item?.content?.subtitle}
						paragraph={item?.content?.paragraph}
						buttonLink={item?.content?.buttonLink}
						imageLocation={item?.content?.imageLocation}
						backgroundDisplay={item?.content?.backgroundDisplay}
					/>
				))
			) : (
				<></>
			)}
		</section>
	);
};

export default jumboContent;
