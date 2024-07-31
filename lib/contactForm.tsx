// Imports
import {render} from "@react-email/components";
import {emailTransporter} from "@/config/nodemailer";
import {IBusinessEmail, ICustomerEmail} from "@/types/email";

// Components
import CustomerEnquiryConfirmationEmail from "@/components/Emails/CustomerEnquiryConfirmationEmail";
import BusinessCustomerEnquiryConfirmationEmail from "@/components/Emails/BusinessCustomerEnquiryConfirmationEmail";
import {IThemesOptionsContent} from "@/types/context";

export const sendContactForm = async (
	values: any,
	themesOptionsContent: IThemesOptionsContent
) => {
	console.log(`

		Send Contact Form:

		email: ${values?.email}
		firstName: ${values?.firstName}
		lastName: ${values?.lastName}
		message: ${values?.message}
		phoneNumber: ${values?.phoneNumber}
		selectedServices: ${values?.selectedServices}
		subject: ${values?.subject}
		themesOptionsContent: ${themesOptionsContent?.email}

		`);

	// If any of these values are undefined
	if (
		!values?.email ||
		!values?.message ||
		!values?.subject ||
		!values?.lastName ||
		!values?.firstName ||
		!values?.phoneNumber ||
		!values?.selectedServices
	) {
		console.log(`Error`);
	}

	try {
		const imagesDirUrl: any = process.env.IMAGE_DIR_URL;

		/* Render React Customer Enquiry 
			Confirmation Email Component*/
		const customerEmailHtml: string = render(
			<CustomerEnquiryConfirmationEmail
				email={`${values?.email}`}
				imagesDirUrl={imagesDirUrl}
				subject={`${values?.subject}`}
				lastName={`${values?.lastName}`}
				phoneNumber={values?.phoneNumber}
				firstName={`${values?.firstName}`}
				themesOptionsContent={themesOptionsContent}
				selectedServices={`${values?.selectedServices}`}
			/>
		);

		/* Render React Business Customer 
			Enquiry Confirmation Email Component*/
		const businessEmailHtml: string = render(
			<BusinessCustomerEnquiryConfirmationEmail
				email={`${values?.email}`}
				imagesDirUrl={imagesDirUrl}
				subject={`${values?.subject}`}
				message={`${values?.message}`}
				lastName={`${values?.lastName}`}
				phoneNumber={values?.phoneNumber}
				firstName={`${values?.firstName}`}
				themesOptionsContent={themesOptionsContent}
				selectedServices={`${values?.selectedServices}`}
			/>
		);

		/* Customer Enquiry Confirmation Email */
		const customerEmail: ICustomerEmail = {
			from: `${themesOptionsContent?.email}`,
			to: `${values?.email}`,
			subject: `Thank You for Contacting DBMX Racing`,
			html: customerEmailHtml,
		};

		/* Business Customer Enquiry Confirmation Email */
		const businessEmail: IBusinessEmail = {
			from: `${themesOptionsContent?.email}`,
			to: `${themesOptionsContent?.email}`,
			subject: `New Website Inquiry: ${values?.subject}`,
			html: businessEmailHtml,
		};

		// await emailTransporter.sendMail({...customerEmail});
		// await emailTransporter.sendMail({...businessEmail});
	} catch (err) {
		console.log(err);
	}
};
