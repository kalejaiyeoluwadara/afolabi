import "./globals.css";
export const metadata = {
  title: "Afolabi",
  description: "Afolabi Portfolio site",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-8 mb-8">{children}</body>
    </html>
  );
}
