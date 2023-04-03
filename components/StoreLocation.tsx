import {motion} from "framer-motion";
import {FC} from "react";
import {fadeInUp} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

interface IProps {
	title: string;
	paragraph: string;
}

const StoreLocation: FC<IProps> = ({title, paragraph}) => {
	return (
		<section className="bg-white ">
			<div className="container p-4 mx-auto">
				<motion.div variants={fadeInUp} className="flex flex-col py-28">
					<h2 className="text-black text-center tracking-normal leading-[2.75rem] font-[600] text-3xl md:text-4xl">
						{title}
					</h2>
					<Paragraph
						content={paragraph}
						tailwindStyling="w-full lg:max-w-[75rem] mx-auto mt-4 py-8 text-black text-center text-medium"
					/>
				</motion.div>
			</div>
			<div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9856.637550903768!2d-2.258922530224609!3d51.85804619999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48710608e9a52937%3A0x9fea1f9a17a943ac!2sDBMX%20Racing!5e0!3m2!1sen!2suk!4v1680470705431!5m2!1sen!2suk"
					width="100%"
					height="650"
					loading="lazy"
					style={{border: "0"}}
					allowFullScreen={true}
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</section>
	);
};

export default StoreLocation;
