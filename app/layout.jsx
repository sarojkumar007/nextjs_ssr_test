import 'material-symbols/rounded.css';

import '@styles/globals.css';

export const metadata = {
  title: 'Saroj Kumar Sahoo',
  description: 'Web Dev',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
