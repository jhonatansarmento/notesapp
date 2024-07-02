import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registro';
import { GlobalStyle } from '@/styles/global.styles';
import ClientAuthProvider from '@/providers/ClientAuthProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <ClientAuthProvider>{children}</ClientAuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
