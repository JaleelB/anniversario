import '../styles/globals.css';
import localFont from "next/font/local";
import { Inter as FontSans } from "next/font/google"
import Header from '~/components/header';
import Footer from '~/components/footer';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = localFont({
  src: "../fonts/Satoshi-Bold.woff2",
  variable: "--font-heading",
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          `
          min-h-screen font-sans antialiased      
          ${fontSans.variable}
          ${fontHeading.variable}
          `
        }
      >
          <div className='flex w-screen h-screen flex-col'>
            <Header/>
            <main className='flex-1 container max-w-5xl mx-auto'>
              {children}
            </main>
            <Footer/>
          </div>
      </body>
    </html>
  );
}