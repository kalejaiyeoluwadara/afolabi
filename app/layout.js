import "./globals.css";
import Nav from "./components/Nav";
import Foot from "./Hero/Foot";
export const metadata = {
  title: "Afolabi",
  description: "Afolabi Portfolio site",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-8 mb-8">
        <Nav />
        {children}
        <Foot />
      </body>
    </html>
  );
}
