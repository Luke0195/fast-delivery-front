import {
  Sheet,
  SheetTrigger,
  SheetHeader,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '@app/_widgets/ui'
import { FiMenu } from 'react-icons/fi'

export default function Home() {
  return (
    <Sheet>
      <SheetTrigger>
        <FiMenu size={20} color="#ccc" />{' '}
      </SheetTrigger>
      <SheetContent side="left" style={{ width: 280 }}>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
