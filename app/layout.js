import Modal from "./components/Modal";
import AppProvider from "./context";
import "../public/ClashDisplay_Complete/ClashDisplay_Complete/Fonts/WEB/css/clash-display.css";
import "./globals.css";
import Hire from "./hireme/Hire";
export const metadata = {
  title: "Afolabi",
  description: "Afolabi Portfolio site",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppProvider>
        <body className=" mb-8">{children}</body>
        <Hire />
        <Modal />
      </AppProvider>
    </html>
  );
}
