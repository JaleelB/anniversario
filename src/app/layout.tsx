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

export const metadata = {
  title: {
    default: 'Anniversario',
    template: `%s | Anniversario`,
  },
  description: "Anniversario is a beautifully designed birthday countdown app that keeps you excited about your upcoming birthdays.",
  keywords: [
    "Birthday Countdown",
    "Personalized Countdown",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Date Tracker",
    "Special Occasions",
    "User-Friendly",
    "Customizable",
    "Birthday Celebration"
  ],
  authors: [
    {
      name: "JaleelB",
      url: "https://github.com/JaleelB",
    },
  ],
  creator: "JaleelB",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: 'https://anniversario.jaleelbennett.com',
    title: 'Anniversario',
    description: "Anniversario is a beautifully designed birthday countdown app that keeps you excited about your upcoming birthdays.",
    siteName: 'Aniversario',
  },
  twitter: {
    card: "summary_large_image",
    title: 'Anniversario',
    description: "Anniversario is a beautifully designed birthday countdown app that keeps you excited about your upcoming birthdays.",
    images: [`https://anniversario.jaleelbennett.com/og.jpg`],
    creator: "@jal_eelll",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `https://anniversario.jaleelbennett.com/site.webmanifest`,
}

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
          <div className='flex w-screen min-h-screen flex-col'>
            <Header/>
            {children}
            <Footer/>
          </div>
      </body>
    </html>
  );
}