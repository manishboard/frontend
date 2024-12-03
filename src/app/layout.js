import "assets/styles/style.css"

export const metadata = {
  title: 'Dashboard',
  description: 'Admin Dashboard for my Personal Use',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}