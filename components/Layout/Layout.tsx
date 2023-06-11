// Import
import {FC} from "react";

// Components
import Footer from "../Footer";
import MetaTag from "../Meta/MetaTag";

interface ILayout {
	children: React.ReactNode;
}

const Layout: FC<ILayout> = ({children}) => {
	return (
		<>
			<MetaTag />

			<>{children}</>

			<Footer />
		</>
	);
};

export default Layout;
