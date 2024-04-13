import Link from "next/link";

type PropsLinkHref = {
  href: string;
  children: React.ReactNode;
  className?: string;
};
 const LinkHref = (props: PropsLinkHref) => (
  <Link className={props.className} href={props.href}>
    {props.children}
  </Link>
);
export default LinkHref;