// Imports
import {FC} from "react";
import {IJumboContent} from "./types";

// Components
import JumboContentCard from "./Cards/JumboContentCard";

const jumboContent: FC<IJumboContent> = ({jumboContentSection}) => {
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
