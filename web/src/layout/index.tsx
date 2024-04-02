import type { FC, ReactNode } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { WalletButton } from "../components/Context";
import "./index.less";

const Layout: FC<{
  children: ReactNode;
  title: string;
  headerClass?: string;
  showBack?:boolean
}> = ({ children, title, headerClass,showBack = true }) => {
  return (
    <div className="layout-wrap">
      <div className={`layout-wrap-header ${headerClass || ""}`}>
        { showBack &&  <div className="icon-wrap">
          <LeftOutlined
            style={{ fontSize: "0.2rem" }}
            onClick={() => history.back()}
          />
        </div>}
        <span className="title">{title || "对战"}</span>
        <div className="wallet-wrap">
          <WalletButton />
        </div>
      </div>
      <div className="layout-wrap-content">{children}</div>
    </div>
  );
};

export default Layout;
