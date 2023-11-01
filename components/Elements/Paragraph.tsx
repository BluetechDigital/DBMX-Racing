// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {IParagraphProps} from "@/types/components/index";
import {fadeInUp, initial} from "../../animations/animations";

const Paragraph: FC<IParagraphProps> = ({content, tailwindStyling}) => {
	/* Sanitize the WYSIWYG paragraph content */
	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<motion.div
			initial={initial}
			whileInView={fadeInUp}
			viewport={{once: true}}
			className={content ? `block ${tailwindStyling}` : `hidden`}
			dangerouslySetInnerHTML={createParagraphMarkup(content)}
		/>
	);
};

export default Paragraph;
