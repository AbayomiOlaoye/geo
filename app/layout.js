import "./globals.css";
import Navigation from "@/components/Nav/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: 'Godsent Evangelical Outreach',
  },
  description: 'Godsent Evangelical Outreach is a Christian organization dedicated to spreading the message of Jesus Christ and serving communities in need.',
  keywords: [
    'Christian organization',
    'Gospel outreach',
    'community service',
    'evangelism',
    'charity work',
    'community development',
    'spreading hope',
    'faith-based initiatives',
    'serving communities',
    'transforming lives',
    'empowering individuals',
    'spiritual growth',
    'Christian charity',
    'community engagement',
    'volunteer opportunities',
    'making a difference',
    'helping others',
    'sharing the Gospel',
    'Christian mission',
    'faith in action',
    'building community',
    'Christian outreach',
    'community support',
    'faith-based charity',
    'Christian values',
    'helping hands',
    'spreading love',
    'community transformation',
    'Donations',
    'volunteer work',
    'community projects',
  ],
  authors: [{ name: 'Ebor Ehima' }],
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
  },
  themeColor: '#9f6a4b',
  icons: {
    icon: [
      { url: '/logo-geo.jpg', type: 'image/jpg' },
    ],
    apple: [{ url: '/logo-geo.jpg', sizes: 'any', type: 'image/jpg' }],
    shortcut: [{ url: '/logo-geo.jpg', type: 'image/jpg' }],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-verification-code',
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
