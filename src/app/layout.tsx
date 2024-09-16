import "./globals.css";
import DefaultLayout from "@/components/defaultLaoyout/defaultLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DefaultLayout>{"fdsfkajsdklfsajdklfj"}</DefaultLayout>
      </body>
    </html>
  );
}
