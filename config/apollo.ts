// Add Apollo Client
import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client: any = new ApolloClient({
	uri: `${process.env.WORDPRESS_API_URL}`,
	cache: new InMemoryCache(),
});

export const getClient = () => {
	try {
		if (process.env.WORDPRESS_AUTH_LOGIN_MUTATION_REFRESH_TOKEN) {
			const client: any = new ApolloClient({
				uri: `${process.env.WORDPRESS_API_URL}`,
				cache: new InMemoryCache(),
			});
			return client;
		} else {
			throw new Error("Wordpress JWT Authentication not authenticated.");
		}
	} catch (error) {
		console.log(error);
		throw new Error("Something went wrong with Wordpress JWT Authentication");
	}
};
