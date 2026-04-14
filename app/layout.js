import Header from "./components/Header";

export const metadata = {
  title: "Safety Up",
  description: "Safety Management Application"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={styles.body}>
        <Header />
        <main style={styles.main}>
          {children}
        </main>
      </body>
    </html>
  );
}

const styles = {
  body: {
    margin: 0,
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9fafb"
  },
  main: {
    padding: "16px"
  }
};
