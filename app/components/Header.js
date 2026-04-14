import Link from "next/link";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.left}>
          <img
            src="/logo.png"
            alt="Safety Up Logo"
            style={styles.logo}
          />
          <span style={styles.title}>Safety Up</span>
        </div>

        <nav style={styles.nav}>
          <Link href="/" style={styles.link}>Home</Link>
          <Link href="/checklists" style={styles.link}>Checklists</Link>
          <Link href="/admin" style={styles.link}>Admin</Link>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    height: "64px",
    width: "100%",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    alignItems: "center"
  },
  container: {
    width: "100%",
    padding: "0 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box"
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },
  logo: {
    height: "36px",
    width: "auto"
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#0a3da9"
  },
  nav: {
    display: "flex",
    gap: "16px"
  },
  link: {
    textDecoration: "none",
    color: "#374151",
    fontSize: "16px",
    fontWeight: "500"
  }
};
``
