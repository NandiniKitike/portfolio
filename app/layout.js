
// import { Outfit, Ovo } from 'next/font/google'
// import './globals.css'

// const outfit = Outfit({
//   subsets: ['latin'],
//   variable: '--font-outfit',
// })

// const ovo = Ovo({
//   weight: '400',
//   subsets: ['latin'],
//   variable: '--font-ovo',
//   display: 'swap', // Add this for better performance
// })

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className="scroll-smooth dark">
//       <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>{children}</body>
//     </html>
//   )
// }
import { Outfit, Ovo } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

const ovo = Ovo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ovo',
  display: 'swap',
})

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`scroll-smooth dark ${outfit.variable} ${ovo.variable}`}>
//       <body className="font-Outfit antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white">
//         {children}
//       </body>
//     </html> 
//   )
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth dark ${outfit.variable} ${ovo.variable}`}>
      <body className="font-Outfit antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white">
        {children}
      </body>
    </html> 
  )
}