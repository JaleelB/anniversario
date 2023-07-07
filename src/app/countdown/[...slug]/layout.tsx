
export default function CountdownLayout({
    children,
}: {
    children: React.ReactNode;
}) {
  
    return (
        <main className='flex-1 flex items-center justify-center container max-w-6xl mx-auto'>
            {children}
        </main>
    );
}