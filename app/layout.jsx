import "./globals.css";

export const metadata = {
  title: "Garlic Pickle (রসুনের আচার) 400gm - HoneyMart",
  description: "Premium Garlic Pickle with tamarind - Natural and organic product",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
