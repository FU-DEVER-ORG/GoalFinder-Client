import Link from "next/link";
type Props = {
    href : string,
    className?: string,
    children ?: React.ReactNode
}
export const LinkHref = (props: Props) => {
    return (
      <Link href={props.href} className={props.className}>
        {props.children}
      </Link>
    );
  };