import "./globals.css";

export const metadata = {
  title: "Ghee/ (1 Kg) - সরের ঘি - HoneyMart",
  description: "সম্পূর্ণ ভেজাল মুক্ত সরের ঘি - হাতে পেয়ে খেয়ে তারপরই মূল্য পরিশোধ করবেন",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
