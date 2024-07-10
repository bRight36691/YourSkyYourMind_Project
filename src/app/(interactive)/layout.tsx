import InteractiveBackground from "../../component/interactive-background";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overscroll-none">
      <InteractiveBackground />
      {children}
    </div>
  );
}
