import Modal from "./components/Modal";
import AppProvider from "./context";
import "./globals.css";
export const metadata = {
  title: "Afolabi",
  description: "Afolabi Portfolio site",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppProvider>
        <body className="px-8 mb-8">{children}</body>
        <Modal />
      </AppProvider>
    </html>
  );
}
