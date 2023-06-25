import Head from "next/head";

import style from "./Layout.module.css";

interface LayoutPrompt {
  children: React.ReactNode;
  title: string;
}

const Layout: React.FC<LayoutPrompt> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={style.wrapper}>{children}</main>
    </>
  );
};

export default Layout;
