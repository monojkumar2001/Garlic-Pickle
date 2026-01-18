import "./globals.css";
import FacebookPixel from '@/components/FacebookPixel';

export const metadata = {
  title: "Ghee/ (1 Kg) - সরের ঘি - HoneyMart",
  description: "সম্পূর্ণ ভেজাল মুক্ত সরের ঘি - হাতে পেয়ে খেয়ে তারপরই মূল্য পরিশোধ করবেন",
};

export default function RootLayout({ children }) {
  // Facebook Pixel ID - Replace with your actual Pixel ID
  // You can also set it directly: const FACEBOOK_PIXEL_ID = 'YOUR_PIXEL_ID';
  const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '';

  return (
    <html lang="bn">
      <body>
        {FACEBOOK_PIXEL_ID && <FacebookPixel pixelId={FACEBOOK_PIXEL_ID} />}
        {children}
      </body>
    </html>
  );
}
