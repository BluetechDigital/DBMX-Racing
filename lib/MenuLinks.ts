import {gql} from "@apollo/client";
import {client} from "../config/apollo";

// Main Menu Links
export async function getMainMenuLinks() {
	try {
		const content: any = gql`
			{
				heroMenuLinks: menuItems(where: {location: PRIMARY}) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return {
			heroMenuLinks: response?.data?.heroMenuLinks?.edges,
		};
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch main menu links content"
		);
	}
}

// Footer Menu Links
export async function getFooterMenuLinks() {
	try {
		const content: any = gql`
			{
				footerMenuLinks: menuItems(where: {location: FOOTER}) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return {
			footerMenuLinks: response?.data?.footerMenuLinks?.edges,
		};
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch footer menu links content"
		);
	}
}
