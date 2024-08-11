import InteractiveBackground from "../../component/interactive-background";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <div className="relative min-h-screen max-h-[200px] overscroll-none overflow-hidden">
    //   <InteractiveBackground />
    //   {children}
    // </div>
  <div className="overflow-hidden">
    <InteractiveBackground />
    {children}
  </div>
  );
}
