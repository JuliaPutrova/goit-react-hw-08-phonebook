import { useSelector } from 'react-redux';

import { isLoading } from '../redux/contacts/contact-selectors';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function HomePage() {
  const loader = useSelector(isLoading);
  return (
    <div style={styles.container}>
      {!loader && <h2 style={styles.title}>Welcome to phonebook</h2>}
    </div>
  );
}
