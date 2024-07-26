// Imports
import React, {FC} from "react";
import {IContactForm} from "@/types/components";

// Components
import FormikForm from "@/components/Elements/FormikForm";

const ContactForm: FC<IContactForm> = ({title}) => {
	return (
		<>
			<div
				className="relative pt-2 pc-0 bg-white flex flex-col gap-14 bg-center bg-no-repeat bg-cover"
				style={{
					backgroundImage: `linear-gradient(
						0deg,
						rgba(255, 255, 255, 0.80),
						rgba(255, 255, 255, 0.85),
						rgba(255, 255, 255, 0.95),
						rgba(255, 255, 255, 1)
					),url("/svg/background/grid-background-06.svg")`,
				}}
			>
				<FormikForm title={title} />
				<div className="lg:mt-[-200px]">
					<iframe
						width="100%"
						height="450"
						loading="lazy"
						style={{border: "0"}}
						allowFullScreen={true}
						referrerPolicy="no-referrer-when-downgrade"
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9856.637550903768!2d-2.258922530224609!3d51.85804619999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48710608e9a52937%3A0x9fea1f9a17a943ac!2sDBMX%20Racing!5e0!3m2!1sen!2suk!4v1680470705431!5m2!1sen!2suk"
					/>
				</div>
			</div>
		</>
	);
};

export default ContactForm;
