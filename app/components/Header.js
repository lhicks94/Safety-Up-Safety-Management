export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
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
    alignItems: "center"
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#0a3da9"
  }
};
