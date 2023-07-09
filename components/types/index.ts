// Components Cards
export interface IBlogsCard {
	uri: string;
	date: string;
	title: string;
	paragraph: string;
	featuredImage: {
		node: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
}

export interface IFourImageGridCard {
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

export interface IJumboContentCard {
	title: string;
	subtitle: string;
	paragraph: string;
	imageLocation: string;
	backgroundDisplay: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
}

export interface ILogoCard {
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

export interface IProductCard {
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

// Elements
export interface IBackHoverButton {
	link: string;
}

export interface INavbarMenuLinks {
	url: string;
	label: string;
	tailwindStyling: string;
}

export interface IParagraphProps {
	content: string;
	tailwindStyling: string;
}

export interface ISideMenu {
	menuActive: boolean;
}

// layout
export interface ILayout {
	children: React.ReactNode;
}

// Components
export interface IContactBanner {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
}

export interface IContactForm {
	title: string;
}

export interface IContactInfo {
	title: string;
	paragraph: string;
}

export interface IContentSection {
	title: string;
	subtitle: string;
	bottomContent: {
		title: string;
		titleTwo: string;
		paragraph: string;
		mainContent: string;
		paragraphTwo: string;
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				height: number;
				width: number;
			};
		};
	};
}

export interface IContentSlider {
	content: {
		tag: string;
		title: string;
		paragraph: string;
		publishedDate: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		backgroundVideoUrl: string;
		backgroundImageOrVideo: string;
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	contentTwo: {
		tag: string;
		title: string;
		paragraph: string;
		publishedDate: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		backgroundVideoUrl: string;
		backgroundImageOrVideo: string;
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	contentThree: {
		tag: string;
		title: string;
		paragraph: string;
		publishedDate: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		backgroundVideoUrl: string;
		backgroundImageOrVideo: string;
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

export interface IContentStats {
	title: string;
	paragraph: string;
	statsOne: {
		title: string;
		subtitle: string;
		paragraph: string;
	};
	statsTwo: {
		title: string;
		subtitle: string;
		paragraph: string;
	};
}

export interface IErrorPage {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
}

export interface IFourImageGrid {
	title: string;
	servicesGrid: [
		{
			id: string;
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
}

export interface IHero {
	title: string;
	paragraph: string;
	backgroundImage: string;
	backgroundVideoUrl: string;
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
}

export interface IHeroThree {
	title: string;
	paragraph: string;
	backgroundVideoUrl: string;
	backgroundImageOrVideo: string;
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
}

export interface IHeroTwo {
	title: string;
	paragraph: string;
	backgroundImage: string;
}

export interface IJumboContent {
	jumboContentSection: [
		{
			content: {
				id: string;
				title: string;
				subtitle: string;
				paragraph: string;
				imageLocation: string;
				backgroundDisplay: string;
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: number;
						width: number;
					};
				};
				buttonLink: {
					url: string;
					title: string;
					target: string;
				};
			};
		}
	];
}

export interface ILogos {
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
}

export interface IMaintenance {
	title: string;
	paragraph: string;
	backgroundVideoUrl: string;
	backgroundImageOrVideo: string;
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
}

export interface IProductGrid {
	title: string;
	subtitle: string;
	paragraph: string;
	productGrid: [
		{
			id: string;
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
}

export interface IStoreLocation {
	title: string;
	paragraph: string;
}

export interface ITitleParagraph {
	title: string;
	paragraph: string;
}
