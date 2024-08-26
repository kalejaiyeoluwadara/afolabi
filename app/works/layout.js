import Foot from "../Hero/Foot";
import NavBar from "./NavBar";
export const metadata = {
  title: "Afolabi Works",
  description: "Afolabi Works",
};
export default function RootLayout({ children }) {
  return (
    <body>
      <main className="px-4">
        <NavBar />
        {children}
        <Foot />
      </main>
    </body>
  );
}
