export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <img
          src="/logo.png"
          alt="Safety Up Logo"
          style={styles.logo}
        />
        <span style={styles.title}>Safety Up</span>
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
    alignItems: "center",
    padding: "0 16px",
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
  }
};
