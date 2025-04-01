// layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import NavbarServerComponent from "@/components/Theme1/NavberServerComponent";
import Footer from "@/components/Theme1/Footer";
// import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#16192e] overflow-x-hidden">
        <NavbarServerComponent></NavbarServerComponent>
        {children}
       <Footer></Footer>
      </body>
    </html>
  );
}


export async function generateMetadata(): Promise<Metadata> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/settings`, {
      cache: "no-store",
    });

    const data = await response.json();

    let keywordsArray;

    if (data?.success && data?.settings) {
      const keywordsString =
        data?.setting?.client?.meta_keywords || "nextjs, starter, template";
      keywordsArray = keywordsString
        .split(",")
        .map((keyword: string) => keyword.trim());
    }

    return {
      title: {
        template: `${data?.setting?.client?.site_title} | %s`,
        default: data?.setting?.client?.site_title || "Shakil Portfolio",
      },
      description: data?.setting?.client?.meta_description || "An advanced medical center equipped with international standard machinery, located near Dhaka in Savar",
      keywords: keywordsArray,
      icons: {
        icon: data?.setting?.client?.favicon || "https://i.ibb.co.com/Tqty4YKG/DSC-1902-3.jpg",
      },
    };
  } catch (error) {
    console.log(error)
    return {
      title: "Shakil Portfolio",
      description: "An advanced medical center equipped with international standard machinery, located near Dhaka in Savar.",
      icons: {
        icon: "https://i.ibb.co.com/Tqty4YKG/DSC-1902-3.jpg",
      },
    };
  }
}