// Components
export type ICta = {
	title: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IHero = {
	title: string;
	videoUrl: string;
	paragraph: string;
	ctaParagraph: string;
	displayVideo: boolean;
	ctaLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type ILogos = {
	title: string;
	logoGrid: [
		{
			id: string;
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
		}
	];
};
export type ICtaTwo = {
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type IHeroTwo = {
	title: string;
	paragraph: string;
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IContactInfo = {
	title: string;
	paragraph: string;
};
export type IMeetTheTeam = {
	title: string;
	paragraph: string;
	teamGrid: [
		{
			name: string;
			position: string;
			facebookLink: {
				url: string;
				title: string;
				target: string;
			};
			twitterLink: {
				url: string;
				title: string;
				target: string;
			};
			linkedinLink: {
				url: string;
				title: string;
				target: string;
			};
			instagramLink: {
				url: string;
				title: string;
				target: string;
			};
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
};
export type IContactForm = {
	title: string;
};
export type IProductGrid = {
	title: string;
	subtitle: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	productGrid: [
		{
			title: string;
			link: {
				url: string;
				title: string;
				target: string;
			};
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
		}
	];
};
export type IOurServices = {
	title: string;
	subtitle: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	servicesGrid: [
		{
			title: string;
			paragraph: string;
			link: {
				url: string;
				title: string;
				target: string;
			};
			backgroundImage: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
};
export type IGoogleReviews = {
	title: string;
	displaySlider: boolean;
};
export type ITitleParagraph = {
	title: string;
	paragraph: string;
	displayParagraph: boolean;
};
export type ISocialMediaGrid = {
	title: string;
};
export type ITestimonialsGrid = {
	title: string;
	subtitle: string;
	paragraph: string;
};
export type ITestimonialsCard = {
	name: string;
	rating: number;
	position: string;
	paragraph: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type ITitleContentImage = {
	title: string;
	subtitle: string;
	paragraph: string;
	textTitle: string;
	sectionId: string;
	displayContentOption: string;
	displayParagraphColor: string;
	displayBackgroundColor: string;
	displayImageClipPath: boolean;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
	bulletPoints: [
		{
			points: string;
		}
	];
};
export type IGoogleReviewsCard = {
	date: any;
	rating: any;
	name: string;
	textarea: string;
	profilePhoto: string;
};
export type IAboutContentImage = {
	title: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	mainCard: {
		title: string;
		subtitle: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
};
export interface IServicesGrid extends IOurServices {
	mainCard: {
		title: string;
		subtitle: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
}

// Cards
export type IProductCard = {
	title: string;
	link: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};
export type IOurServicesCard = {
	title: string;
	paragraph: string;
	link: {
		url: string;
		title: string;
		target: string;
	};
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IMeetTheTeamCard = {
	name: string;
	position: string;
	facebookLink: {
		url: string;
		title: string;
		target: string;
	};
	twitterLink: {
		url: string;
		title: string;
		target: string;
	};
	linkedinLink: {
		url: string;
		title: string;
		target: string;
	};
	instagramLink: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type ITitleContentImageCard = {
	title: string;
	subtitle: string;
	paragraph: string;
	textTitle: string;
	paragraphColor: string;
	displayContentOption: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	bulletPoints: [
		{
			points: string;
		}
	];
};
export type IServicesGridCard = IOurServicesCard;

// Elements
export type ITitle = {
	content: string;
	tailwindStyling: string;
};
export type ISideMenu = {
	menuActive: boolean;
	setMenuActive: any;
};
export type IParagraph = {
	content: string;
	tailwindStyling: string;
};
export type IFormikForm = {
	title: string;
};
export type IPagination = {
	contentArray: any;
	contentType: string;
	tailwindStyling: string;
	numberOfItemsRenderedPerPage: number;
};
export type IRenderStars = {
	rating: number;
	color: string;
};
export type IBackHoverButton = {
	link: string;
};
