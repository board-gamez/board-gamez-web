import ProfileSidebar from "@/components/ProfileSidebar";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex gap-3 flex-col md:flex-row">
      <ProfileSidebar />

      <div className="bg-white flex-1">{children}</div>
    </section>
  );
}
