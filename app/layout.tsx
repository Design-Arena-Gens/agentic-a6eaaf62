import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Plano de Crescimento - Agnus Sound',
  description: 'Análise completa e estratégia de monetização para canal de música worship instrumental',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
