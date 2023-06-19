import {FC} from "react";
import Link from "next/link";
import {INavbarMenuLinks} from "@/components/types";

const NavbarMenuLinks: FC<INavbarMenuLinks> = ({
	url,
	label,
	tailwindStyling,
}) => {
	return (
		<Link className={tailwindStyling} href={url}>
			{label}
		</Link>
	);
};

export default NavbarMenuLinks;
