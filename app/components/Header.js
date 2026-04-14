import Link from "next/link";

export default function Header() {
  return (
    <header style={headerStyle}>
      <div style={leftStyle}>
        <img src="/logo.png" alt="Safety Up Logo" style={logoStyle} />
        <span style={titleStyle}>Safety Up</span>
      </div>

      <nav style={navStyle}>
        <Link href="/">Home</Link>
        <Link href="/checklists">Checklists</Link>
        <Link href="/admin">Admin</Link>
      </nav>
    </header>
  );
}

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 16px",
  height: "64px",
  borderBottom: "1px solid #e5e7eb",
  backgroundColor: "#ffffff"
};

const leftStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px"
};

const logoStyle = {
  height: "36px"
};

const titleStyle = {
  fontSize: "20px",
  fontWeight: 600,
  color: "#0a3da9"
};

const navStyle = {
  display: "flex",
  gap: "16px",
  fontSize: "16px"
};
``
