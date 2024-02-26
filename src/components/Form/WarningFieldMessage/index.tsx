import { AiOutlineWarning } from 'react-icons/ai'
type Props = {
  message: string
}

export function WarningFieldMessage({ message }: Props) {
  return (
    <div className="w-full p-2 rounded-sm flex items-center justify-center bg-red-300 gap-x-2 my-2">
      <span className="text-red-700">{message}</span>
      <AiOutlineWarning size={18} color="red" />
    </div>
  )
}
