import './globals.css';
import './theme-config.css';
import '@radix-ui/themes/styles.css';
import { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { Toaster } from 'sonner';
import AuthProvider from './context/AuthContext';
import Providers from '@/components/shared/providers';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'TasK Manager',
  description: 'productivity app for for quick and easy daily planning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta name='title' content='Task Manager' />
        <meta
          name='description'
          content='Simple productivity app for for quick and easy daily planning'
        />
      </head>
      <body className={nunito.variable}>
        <AuthProvider>
          <Providers>
            {children}
            <Toaster />
          </Providers>
        </AuthProvider>
        <script async src='https://cdn.splitbee.io/sb.js' />
      </body>
    </html>
  );
}
