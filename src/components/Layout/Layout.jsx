import { PageHeader } from '../PageHeader/PageHeader';
import styles from './Layout.module.scss';

export const Layout = ({ children }) => {
  return (
    <>
      <PageHeader />
      <main className={styles.mainContent}>{children}</main>
    </>
  );
};
