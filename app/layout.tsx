export const metadata = {
    title: "Portokali - Alma Mediterránea",
    description: "Café de especialidad & gastronomía mediterránea"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}