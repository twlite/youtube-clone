import "../styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { AppProps } from "next/app";
import Nav from "@/components/nav/nav";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Nav />
        <main className="container">
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </div>
  );
}
