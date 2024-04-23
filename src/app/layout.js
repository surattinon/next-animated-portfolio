import { Quicksand } from "next/font/google";
import "./globals.css";
import TransitionPage from "@/components/transitionPages";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "info >_ofBas",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <TransitionPage>{children}</TransitionPage>
      </body>
    </html>
  );
}
