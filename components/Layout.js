// app/layout.js

import Link from 'next/link';
import './globals.css'; // Możesz dodać globalne style

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          {/* Panel boczny */}
          <div style={{
            width: '250px',
            backgroundColor: '#343a40',
            color: 'white',
            padding: '20px',
            boxSizing: 'border-box'
          }}>
            <h2>Panel boczny</h2>
            <nav>
              
            </nav>
          </div>

          {/* Główna zawartość */}
          <div style={{ flex: 1, padding: '20px' }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
