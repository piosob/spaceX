import { PageHeader } from "../PageHeader/PageHeader";
import styles from "./Layout.module.scss";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <PageHeader />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </>
  );
};
