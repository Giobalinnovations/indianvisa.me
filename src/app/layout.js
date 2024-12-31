import Footer from '@/components/india/common/Footer';
import Header from '@/components/india/common/Header';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import { FormProvider } from '@/context/formContext';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Plus_Jakarta_Sans, Poppins } from 'next/font/google';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Home',
  description: 'Visa Application',
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN_URL),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} flex flex-col min-h-screen antialiased bg-background`}
      >
        <FormProvider>
          <ReactQueryProvider>
            <div className="min-h-screen flex flex-col">
              <div className="bg-gradient-to-r from-primary via-secondary to-accent">
                <div className="bg-white/10 backdrop-blur-sm">
                  <Header />
                </div>
              </div>
              <main className="flex-1 relative">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
                  <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-accent/10 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-secondary/10 to-transparent"></div>
                </div>
                <div className="relative container mx-auto px-4 py-6">
                  <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl border border-white/20">
                    {children}
                  </div>
                </div>
              </main>
              <Footer />
            </div>
            <ToastContainer
              position="bottom-center"
              autoClose={4000}
              hideProgressBar={false}
              closeOnClick
              pauseOnHover
              theme="colored"
              toastClassName="rounded-lg shadow-lg"
            />
          </ReactQueryProvider>
        </FormProvider>
        <GoogleTagManager gtmId="G-LC9MZM89N4" />
        <GoogleAnalytics gaId="G-LC9MZM89N4" />
      </body>
    </html>
  );
}
