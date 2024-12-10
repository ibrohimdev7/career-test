"use client";

import { Link } from "react-scroll";
import { ReactScrollLinkProps } from "react-scroll/modules/components/Link";

interface CommonSmoothLinkProps extends ReactScrollLinkProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

const CommonSmoothLink = ({
  className,
  to,
  href,
  children,
  ...props
}: CommonSmoothLinkProps) => {
  return (
    <Link className={className} href={href} to={to} {...props}>
      {children}
    </Link>
  );
};

export default CommonSmoothLink;
