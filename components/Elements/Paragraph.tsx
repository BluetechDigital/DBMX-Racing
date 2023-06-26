// Import
import {FC} from "react";
import {motion} from "framer-motion";
import {IParagraphProps} from "../types";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn} from "../../animations/animations";

const Paragraph: FC<IParagraphProps> = ({content, tailwindStyling}) => {
	/* Sanitize the WYSIWYG paragraph content */
	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<motion.div
			variants={fadeIn}
			className={content ? `block ${tailwindStyling}` : `hidden`}
			dangerouslySetInnerHTML={createParagraphMarkup(content)}
		/>
	);
};

export default Paragraph;
