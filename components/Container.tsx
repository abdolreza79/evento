export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col max-w-7xl bg-white/[2%] mx-auto min-h-screen">
      {children}
    </div>
  );
}
