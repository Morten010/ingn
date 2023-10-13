import { SignUp } from "@clerk/clerk-react";

export default function Login() {

  

  return (
    <div
    className='px-3 py-8 max-w-screen-lg mx-auto'
    >
        <div
        className='bg-brand-white min-h-[60vh] py-8 px-3 grid place-content-center'
        >
          <SignUp />
        </div>
    </div>
  )
}
