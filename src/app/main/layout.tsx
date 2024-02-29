import { Header } from '@app/components'
import { Container } from '@app/components'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-screen h-screen  flex flex-col bg-bgPrimary">
      <Header />
      <Container>{children}</Container>
    </div>
  )
}
