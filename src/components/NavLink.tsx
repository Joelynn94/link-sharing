import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const NavLink = (props: Props) => {
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (pathname?.startsWith(href)) {
      return "bg-purple-100 text-purple-500";
    } else {
      return "text-gray-500 hover:text-purple-500";
    }
  };

  return <div>NavLink</div>;
};
