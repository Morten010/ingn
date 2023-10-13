import { useForm } from "react-hook-form";
import type {FieldValues} from "react-hook-form"
import FormError from '../components/FormError';
import { useState } from "react";
import { useSignIn } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [customError, setCustomError] = useState("")
  const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const { 
    handleSubmit, 
    register, 
    formState: { errors, isSubmitting },
    getValues
  } = useForm();

  // start the sign In process.
  const onSubmit = async (values: FieldValues) => {
    // reset errors
    setCustomError("")

    if (!isLoaded) {
      return;
    }
 
    try {
      const result = await signIn.create({
        identifier: getValues("email"),
        password: getValues("password"),
      });
 
      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId });

        // ! redirect
      }
      else {
        /*Investigate why the login hasn't completed */
        console.log("RESULT: ", result);
      }
 
    } catch (err: any) {
      console.error("error", err.errors[0].longMessage)
      setCustomError(err.errors[0].longMessage)
    }

  };
  

  return (
    <div
    className='px-3 py-8 max-w-screen-lg mx-auto'
    >
        <div
        className='bg-brand-white min-h-[60vh] relative'
        >
          <Link 
          to="/signup"
          className='mt-6 border-2 border-brand-red py-2 px-8 hover:bg-brand-red/10 transition-colors absolute top-0 right-3' 
          >
            Sign up
          </Link>
          <form 
          onSubmit={handleSubmit(onSubmit)}
          className='max-w-[80%] mx-auto pt-20'
          >
            <h1
            className='text-3xl mb-8'
            >
              Login
            </h1>
            <label
            className='flex flex-col gap-0.5 mb-3'
            >
              <span className='text-sm'>Email</span>
              <input 
              type="text"
              className='border-2 text-lg border-brand-red p-1' 
              { ...register("email", {
                required: "Krævet",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address"
                }
              })}
              />
              <FormError error={errors.email} />
            </label>
            
            <label
            className='flex flex-col gap-0.5'
            >
              <span className='text-sm'>Password</span>
              <input 
              type="text"
              className='border-2 text-lg border-brand-red p-1' 
              { ...register("password", {
                required: "Required",
                minLength:{
                  value: 2,
                  message: "Skal mindst være 2 karaktere lang."
                },
                maxLength: {
                  value: 20,
                  message: "Må højest være 20 karaktere lang."
                },
              })}
              />
              <FormError error={errors.password} />
            </label>
            <button
            disabled={isSubmitting}
            className='mt-6 border-2 border-brand-red py-2 px-8 hover:bg-brand-red/10 transition-colors'
            >
              {isSubmitting ? "Checking..." : "Log in"}
            </button>
            {customError && (
              <p
              className="text-brand-red pt-3"
              >
                {customError}
              </p>
            )}
          </form>
        </div>
    </div>
  )
}
