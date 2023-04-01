import {FC} from "react";

interface ILayout {
	children: React.ReactNode;
}

const Layout: FC<ILayout> = ({children}) => {
	return (
		<div>
			<div>{children}</div>
		</div>
	);
};

export default Layout;
