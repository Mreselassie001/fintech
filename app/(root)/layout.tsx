export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Elikem", lastName: "ENS" };
  return (
    <main className="flex h-screen w-full font-inter">
      {/*<Sidebar user={loggedIn} />*/}

      {/*{children}*/}
    </main>
  );
}
