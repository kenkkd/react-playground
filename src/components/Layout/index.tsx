import { ReactNode } from "react";
import { Wrapper } from "./style";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => <Wrapper>{props.children}</Wrapper>;

export default Layout;
