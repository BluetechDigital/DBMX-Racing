// Imports
import {FC} from "react";
import {IRenderStars} from "@/types/components";

const RenderStars: FC<IRenderStars> = ({rating, color}) => {
	let starsColor;

	switch (color) {
		case "White":
			starsColor = "#ffffff";
			break;
		case "Yellow":
			starsColor = "#f7a500";
			break;
		default:
			starsColor = "#f7a500";
			break;
	}

	const renderStars = () => {
		const stars = [];
		if (rating && typeof rating === "number" && rating > 0) {
			for (let i = 0; i < rating; i++) {
				stars.push(
					<svg
						key={i}
						width="19"
						height="18"
						fill="none"
						viewBox="0 0 19 18"
						className="mr-1 w-4 h-4"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
							fill={starsColor}
						></path>
					</svg>
				);
			}
		}
		return stars;
	};

	return <>{renderStars()}</>;
};

export default RenderStars;
