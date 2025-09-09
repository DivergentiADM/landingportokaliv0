import type { Metadata } from "next";
import "./globals.css"; // opcional, si usas estilos globales

export const metadata: Metadata = {
  title: "Portokali - Alma Mediterránea",
  description: "Café de especialidad & gastronomía mediterránea",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head />
      <body>{children}</body>
    </html>
  );
}