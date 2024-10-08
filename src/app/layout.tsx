import * as React from 'react';
import AppHeader from '@/components/header/app.header'
import AppFooter from '@/components/footer/app.footer'
import ThemeRegistry from '@/components/theme-registry/theme.registry';





export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
            <AppHeader></AppHeader>
            {children}
            <AppFooter></AppFooter>
        </ThemeRegistry>
      </body>
    </html>
  );
}
