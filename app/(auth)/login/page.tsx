import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function LoginPage() {
  return (
    <>
      <div className='mb-8 text-center'>
        <h1 className='text-3xl font-bold uppercase tracking-tight'>Login</h1>
        <p className='mt-2 text-sm text-muted-foreground'>
          Please enter your credentials to continue.
        </p>
      </div>

      <form className='flex flex-col gap-4'>
        <div>
          <Label
            htmlFor='email'
            className='block text-sm font-bold text-gray-950'
          >
            Email
          </Label>
          <Input
            id='email'
            type='email'
            required
            placeholder='Введите email'
            className='mt-1'
          />
        </div>
        <div>
          <label
            htmlFor='password'
            className='block text-sm font-bold text-gray-950'
          >
            Password
          </label>
          <input
            id='password'
            type='password'
            required
            placeholder='Введите пароль'
            className='mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
          />
        </div>
        <button
          type='submit'
          className='mt-4 w-full rounded-2xl bg-gray-950 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
        >
          Sign In
        </button>
        <div className='mt-4 text-center'>
          <p className='text-sm text-gray-600'>
            Don't have an account?{" "}
            <a
              href='/register'
              className='font-medium text-gray-950 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 underline'
            >
              Sign up
            </a>
          </p>
        </div>
      </form>
    </>
  );
}
