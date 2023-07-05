
export default function IndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <main className='flex-1 flex items-center container max-w-5xl mx-auto'>
            {children}
        </main>
    );
}