import AppBar from '../AppBar/AppBar.jsx';

export default function Layout({ children }) {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
}
