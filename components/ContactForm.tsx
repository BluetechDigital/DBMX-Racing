import Image from "next/image";
import {motion} from "framer-motion";
import React, {useState, FC} from "react";
import {sendContactForm} from "../lib/api";
import Paragraph from "./Elements/Paragraph";
import {useFormik, Formik, Field, Form} from "formik";
import {fadeIn, fadeInUp, stagger} from "../animations/animations";

// Styling
import styles from "../styles/components/ContactForm.module.scss";

interface IProps {
	title: string;
	businessHours: {
		content: string;
	};
}

const ContactForm: FC<IProps> = ({title, businessHours}) => {
	const initState: {
		error: string;
		isLoading: boolean;
	} = {isLoading: false, error: " "};
	const [state, setState]: any = useState(initState);
	const {
		isLoading,
		error,
	}: {
		error: string;
		isLoading: boolean;
	} = state;
	// A custom validation function. This must return an object
	// which keys are symmetrical to our values/initialValues
	const validate: any = (values: any) => {
		const errors: any = {};
		if (!values?.firstName) {
			errors.firstName = "Required*";
		} else if (values?.firstName.length >= 16) {
			errors.firstName = "Must be 15 characters or less";
		}

		if (!values.lastName) {
			errors.lastName = "Required*";
		} else if (values.lastName.length >= 21) {
			errors.lastName = "Must be 20 characters or less";
		}

		if (!values?.email) {
			errors.email = "Required*";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values?.email)
		) {
			errors.email = "Invalid email address";
		}

		if (!values?.subject) {
			errors.subject = "Required*";
		} else if (values?.subject.length <= 0) {
			errors.subject = "Please inform us about the topic.";
		}

		if (!values?.message) {
			errors.message = "Required*";
		} else if (values?.message.length <= 0) {
			errors.message = "Please tell us about your enquiry.";
		}

		return errors;
	};

	/* Contact Form Fields
	And Initial Values */
	const formik: any = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			subject: "",
			message: "",
		},
		validate,
		onSubmit: async (values: any) => {
			setState((prev: any) => ({
				...prev,
				isLoading: true,
			}));
			try {
				await sendContactForm(values);
				setState(initState);
			} catch (error) {
				setState((prev: any) => ({
					...prev,
					isLoading: false,
					// error: error.message,
				}));
			}
		},
	});

	return (
		<section
			className="py-20 mx-auto overflow-hidden bg-center bg-no-repeat bg-cover bg-darkerRedTwo"
			style={{
				backgroundImage: `url("/svg/stacked-peaks.svg")`,
			}}
		>
			<div className="container flex flex-col items-center justify-center px-8 mx-auto bg-white lg:p-12 gap-y-20 lg:gap-4 lg:flex-row">
				<div className="w-full lg:w-1/2">
					<Formik
						onSubmit={formik?.onSubmit}
						initialValues={formik?.initialValues}
					>
						<Form className="container mx-auto transition-all ease-in-out duration-[0.5s] md:max-w-xl shadow-12xl">
							<motion.h3
								variants={fadeIn}
								className="mx-auto mb-8 text-xl font-semibold text-center uppercase"
							>
								{title}
							</motion.h3>

							{isLoading ? (
								<motion.div
									variants={fadeIn}
									className="flex items-center justify-center my-4 mb-8 gap-x-2"
								>
									<h4 className="text-lg font-semibold text-center uppercase text-brightGreen">
										Message sent
									</h4>
								</motion.div>
							) : null}

							<motion.div variants={stagger} className="flex flex-col gap-4">
								<motion.div variants={fadeInUp}>
									{formik?.touched?.firstName && formik?.errors?.firstName ? (
										<div>
											<p className="py-1 text-left text-tiny text-darkRed font-[400]">
												{formik?.errors?.firstName}
											</p>
										</div>
									) : null}
									<Field
										id="firstName"
										name="firstName"
										placeholder="First Name"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.firstName}
										className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-darkRed focus:border-darkRed focus:ring-[1px] focus:ring-darkRed"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									{formik?.touched?.lastName && formik?.errors?.lastName ? (
										<div>
											<p className="py-1 text-left text-tiny text-darkRed font-[400]">
												{formik?.errors?.lastName}
											</p>
										</div>
									) : null}
									<Field
										id="lastName"
										name="lastName"
										placeholder="Last Name"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.lastName}
										className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-darkRed focus:border-darkRed focus:ring-[1px] focus:ring-darkRed"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									{formik?.errors?.email ? (
										<div>
											<p className="py-1 text-left text-tiny text-darkRed font-[400]">
												{formik?.errors?.email}
											</p>
										</div>
									) : null}
									<Field
										id="email"
										name="email"
										type="email"
										placeholder="Email Address"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.email}
										className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-darkRed focus:border-darkRed focus:ring-[1px] focus:ring-darkRed"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									{formik?.touched?.subject && formik?.errors?.subject ? (
										<div>
											<p className="py-1 text-left text-tiny text-darkRed font-[400]">
												{formik?.errors?.subject}
											</p>
										</div>
									) : null}
									<Field
										id="subject"
										name="subject"
										type="text"
										placeholder="Subject"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.subject}
										className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-darkRed focus:border-darkRed focus:ring-[1px] focus:ring-darkRed"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									{formik?.touched?.message && formik?.errors?.message ? (
										<div>
											<p className="py-1 text-left text-tiny text-darkRed font-[400]">
												{formik?.errors?.message}
											</p>
										</div>
									) : null}
									<textarea
										rows={5}
										id="message"
										name="message"
										placeholder="Your message"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.message}
										className="p-4 w-full h-48 font-[400] text-darkGrey placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-darkRed focus:border-darkRed resize-none focus:ring-[1px] focus:ring-darkRed"
									/>
								</motion.div>
								<motion.button
									variants={fadeInUp}
									// isLoading={isLoading}
									onClick={formik.handleSubmit}
									disabled={
										!formik?.values?.firstName ||
										!formik?.values?.lastName ||
										!formik?.values?.email ||
										!formik?.values?.subject ||
										!formik?.values?.message
									}
									className="w-full text-white disabled:bg-opacity-50 disabled:cursor-not-allowed"
									type="submit"
								>
									<span className={styles.submitButton}>
										<span className={styles.span}>
											<svg
												width="45px"
												height="15px"
												viewBox="0 0 66 43"
												version="1.1"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g
													id="arrow"
													stroke="none"
													stroke-width="1"
													fill="none"
													fill-rule="evenodd"
												>
													<path
														className={styles.one}
														d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
														fill="#FFFFFF"
													></path>
													<path
														className={styles.two}
														d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
														fill="#FFFFFF"
													></path>
													<path
														className={styles.three}
														d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
														fill="#FFFFFF"
													></path>
												</g>
											</svg>
										</span>
										<h3 className="text-white uppercase text-medium">
											Send Message
										</h3>
									</span>
								</motion.button>
							</motion.div>
						</Form>
					</Formik>
				</div>
				<div className="w-full lg:w-1/2 h-full lg:min-h-[300px] p-3 border border-darkRed">
					<div className="flex flex-col items-center justify-center gap-4 text-center p-11">
						<div className="relative w-16 h-16 mx-auto mb-6 border rounded-full border-darkRed">
							<div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
								<svg
									width="32"
									height="33"
									viewBox="0 0 32 33"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M4 11.1666L14.5208 18.1805C15.4165 18.7776 16.5835 18.7776 17.4792 18.1805L28 11.1666M6.66667 25.8333H25.3333C26.8061 25.8333 28 24.6394 28 23.1666V9.83329C28 8.36053 26.8061 7.16663 25.3333 7.16663H6.66667C5.19391 7.16663 4 8.36053 4 9.83329V23.1666C4 24.6394 5.19391 25.8333 6.66667 25.8333Z"
										stroke="#a70107"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
							</div>
						</div>
						<h3 className="mb-4 text-xl font-bold leading-snug text-darkRed">
							Business Hours
						</h3>
						<Paragraph
							content={businessHours?.content}
							tailwindStyling="font-medium text-base sm:text-medium leading-relaxed text-left text-black"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
