import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
          <div className='flex w-screen h-screen flex-col'>
            <main className='flex-1 container max-w-5xl mx-auto'>
              {children}
            </main>
          </div>
      </body>
    </html>
  );
}