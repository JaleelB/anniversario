
export default function CountdownLayout({
    children,
}: {
    children: React.ReactNode;
}) {
  
    return (
        <main className='flex-1 container max-w-5xl mx-auto'>
            {children}
        </main>
    );
}