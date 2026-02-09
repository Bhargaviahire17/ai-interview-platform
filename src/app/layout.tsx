import "./globals.css";
import ThemeScript from "@/components/ThemeScript";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>

      <body className="bg-base-100 text-base-content">
        {children}
      </body>
    </html>
  );
}
