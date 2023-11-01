// Imports
import {FC} from "react";
import Link from "next/link";
import {useGlobalContext} from "@/context/Global";
import {IContactInfo} from "@/types/components/index";

// Styling
import styles from "../styles/components/ContactInfo.module.scss";

// Components
import Paragraph from "../components/Elements/Paragraph";

const ContactInfo: FC<IContactInfo> = ({title, paragraph}) => {
	const globalContext = useGlobalContext();
	return (
		<>
			<div className={styles.contactInfo}>
				<div className="container relative z-10 px-8 mx-auto">
					<h2 className="mb-10 text-lg font-bold leading-none text-center text-black sm:text-3xl md:text-4xl tracking-px-n">
						{title}
					</h2>
					<Paragraph
						content={paragraph}
						tailwindStyling="mb-20 text-base text-black text-center leading-normal md:max-w-3xl mx-auto"
					/>
					<div className="flex flex-col items-center justify-center gap-4 lg:grid lg:grid-cols-3">
						<div className="w-full h-full lg:min-h-[300px] p-3 border border-darkRed">
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
								<h3 className="mb-4 text-lg font-bold leading-snug sm:text-xl text-darkRed">
									Send Email
								</h3>
								<div className="flex flex-col items-center justify-center">
									<Link
										href={`mailto:${globalContext?.themesOptionsContent?.email}`}
										className="text-base font-medium leading-relaxed text-black transition-all duration-500 ease-in-out sm:text-medium hover:text-darkRed "
									>
										{globalContext?.themesOptionsContent?.email}
									</Link>
								</div>
							</div>
						</div>
						<div className="w-full h-full lg:min-h-[300px] p-3 border border-darkRed">
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
												d="M4 7.16667C4 5.69391 5.19391 4.5 6.66667 4.5H11.039C11.6129 4.5 12.1224 4.86724 12.3039 5.4117L14.301 11.4029C14.5108 12.0324 14.2258 12.7204 13.6324 13.0172L10.6227 14.522C12.0923 17.7816 14.7184 20.4077 17.978 21.8773L19.4828 18.8676C19.7796 18.2742 20.4676 17.9892 21.0971 18.199L27.0883 20.1961C27.6328 20.3776 28 20.8871 28 21.461V25.8333C28 27.3061 26.8061 28.5 25.3333 28.5H24C12.9543 28.5 4 19.5457 4 8.5V7.16667Z"
												stroke="#a70107"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</svg>
									</div>
								</div>
								<h3 className="mb-4 text-lg font-bold leading-snug sm:text-xl text-darkRed">
									Call Us
								</h3>
								<div className="flex flex-col items-center justify-center gap-4 sm:gap-2">
									<span className="flex flex-col gap-4 font-medium text-center text-black sm:flex-row text-medium lg:text-left">
										Tel:
										<Link
											href={`tel:${globalContext?.themesOptionsContent?.phoneNumber}`}
											className="ml-2 text-base leading-relaxed text-black transition-all duration-500 ease-in-out sm:text-medium hover:text-darkRed "
										>
											{globalContext?.themesOptionsContent?.phoneNumber}
										</Link>
									</span>
									<span className="flex flex-col gap-4 font-medium text-center text-black sm:flex-row text-medium lg:text-left">
										Phone:
										<Link
											href={`tel:${globalContext?.themesOptionsContent?.phoneNumberTwo}`}
											className="ml-2 text-base leading-relaxed text-black transition-all duration-500 ease-in-out sm:text-medium hover:text-darkRed "
										>
											{globalContext?.themesOptionsContent?.phoneNumberTwo}
										</Link>
									</span>
								</div>
							</div>
						</div>
						<div className="w-full h-full lg:min-h-[300px] p-3 border border-darkRed">
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
												d="M23.5431 22.7091C22.1797 24.0725 19.192 27.0602 17.4133 28.8389C16.6323 29.62 15.3693 29.6203 14.5883 28.8392C12.8393 27.0903 9.91373 24.1647 8.45818 22.7091C4.29259 18.5435 4.29259 11.7898 8.45818 7.62419C12.6238 3.4586 19.3775 3.4586 23.5431 7.62419C27.7087 11.7898 27.7087 18.5435 23.5431 22.7091Z"
												stroke="#a70107"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
											<path
												d="M20.0007 15.1667C20.0007 17.3758 18.2098 19.1667 16.0007 19.1667C13.7915 19.1667 12.0007 17.3758 12.0007 15.1667C12.0007 12.9575 13.7915 11.1667 16.0007 11.1667C18.2098 11.1667 20.0007 12.9575 20.0007 15.1667Z"
												stroke="#a70107"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</svg>
									</div>
								</div>
								<h3 className="mb-4 text-lg font-bold leading-snug sm:text-xl text-darkRed">
									Address
								</h3>
								<Paragraph
									content={globalContext?.themesOptionsContent?.address}
									tailwindStyling="font-medium text-base sm:text-medium leading-relaxed text-black"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactInfo;
