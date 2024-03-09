import Link from "next/link";
import nav from "../data/nav";

const Navigation = () => {
  return (
    <nav>
      {nav.map((nav) => (
        <Link href={nav.link} key={nav.title} className="mr-5">
          {nav.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
