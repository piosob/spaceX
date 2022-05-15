import styles from './Sidebar.module.scss'
export const Sidebar = ({ rockets }) => {
  const names = rockets.map(rocket => (
    <li key={rocket.id}>{rocket.name}</li>
  ))
  return (
    <div>
      <h2 className={styles.heading}>Sidebar - navigation to specific rocket</h2>
      <ul>
        {names}
      </ul>
    </div>
  );
}
