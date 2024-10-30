import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/utils/theme";

export const metadata = {
  title: "Q & A",
  description: "Questions & Answers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ display: "flex", height: "100vh", flexDirection: "column", justifyContent: "space-between" }}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
