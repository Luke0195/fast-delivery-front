import Image from 'next/image'
import logo from '@app/assets/imgs/logo.svg'

export function Logo() {
  return (
    <Image
      src={logo}
      width={120}
      height={40}
      alt="Logo do fast feet"
      className="my-1"
    />
  )
}
