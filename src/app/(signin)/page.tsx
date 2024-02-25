import { Form, Info } from './components'

export function SignIn() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-primaryBlue ">
      <div className="w-2/5 flex flex-col items-center justify-center">
        <Info />
        <Form />
      </div>
    </div>
  )
}
