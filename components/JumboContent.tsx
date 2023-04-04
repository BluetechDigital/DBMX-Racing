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
			{jumboContentSection.map((keys) => (
				<JumboContentCard
					title={keys?.content?.title}
					image={keys?.content?.image}
					subtitle={keys?.content?.subtitle}
					paragraph={keys?.content?.paragraph}
					buttonLink={keys?.content?.buttonLink}
					imageLocation={keys?.content?.imageLocation}
					key={keys?.content?.id || keys?.content?.title}
					backgroundDisplay={keys?.content?.backgroundDisplay}
				/>
			))}
		</section>
	);
};

export default jumboContent;
