import "./globals.css";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "VieHub | Luxury Airport Transfers",
  description:
    "Premium private airport transfers across Europe. Book your ride with VieHub.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* BUILDER SCRIPT */}
        <script async src="https://cdn.builder.io/js/webcomponents"></script>
      </head>

      <body className="bg-black text-white">

        {/* ✅ NAVBAR SIEMPRE ARRIBA */}
        <Navbar/>

        {/* ✅ ESTO ES CLAVE PORQUE EL NAVBAR ES STICKY */}
        <main>
          {children}
          <Footer/>

        </main>

        {/* 🔥 BUILDER SCROLL FIX */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              setTimeout(()=>{
                document.querySelectorAll('[data-builder-block]').forEach(el=>{
                  el.style.opacity = 1;
                  el.style.transform = 'none';
                })
              },600)
            `,
          }}
        />

      </body>
    </html>
  );
}