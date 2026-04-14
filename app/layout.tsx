import type { ReactNode } from "react";

export const metadata = {
  title: "Safety Up",
  description: "Safety Management Application"
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
