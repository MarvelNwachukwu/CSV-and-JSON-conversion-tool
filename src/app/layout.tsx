import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Providers } from './providers/chakra';
import { ConversionProvider } from './providers/convert-from-to';
import { CsvProvider } from './providers/csv-provider';
import { JsonProvider } from './providers/json-provider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'JSON to CSV Converter | Online CSV to Excel Converter',
  description:
    'Free online tool to convert JSON to CSV, Excel, or vice versa. Parse JSON arrays, convert JSON files, and more. Easy JSON to Excel conversion.',
  keywords:
    'json to csv, json csv online, convert json to csv excel, json excel converter, parse json to csv, json array to csv, json file to csv, csv to json conversion, CSV conversion tool, Free online CSV converter, CSV to JSON converter, Open-source CSV converter, Convert CSV to JSON, Best CSV conversion tool, Fast CSV converter, CSV format tool, CSV file conversion open-source',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <ConversionProvider>
            <CsvProvider>
              <JsonProvider>
                {children}
              </JsonProvider>
            </CsvProvider>
          </ConversionProvider>
        </Providers>
      </body>
    </html>
  );
}
