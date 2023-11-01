import {FC} from "react";
import Link from "next/link";
import {INavbarMenuLinks} from "@/types/components/index";

const NavbarMenuLinks: FC<INavbarMenuLinks> = ({
	url,
	label,
	tailwindStyling,
}) => {
	return (
		<Link className={tailwindStyling} href={url ? url : "/"}>
			{label}
		</Link>
	);
};

export default NavbarMenuLinks;
