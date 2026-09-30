import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elite Academic & Career Dashboard',
  description: 'M.Tech CSE & SDE Intern Tracking Ecosystem',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0f172a', color: '#f8fafc' }}>
        {children}
      </body>
    </html>
  );
}
