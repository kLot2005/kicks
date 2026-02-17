import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function RegisterPage() {
  return (
    <>
      <div className='mb-8 text-center'>
        <h1 className='text-3xl font-bold uppercase tracking-tight'>
          Register
        </h1>
        <p className='mt-2 text-sm text-muted-foreground'>
          Please fill in the form to create an account.
        </p>
      </div>
      <form className='flex flex-col gap-4'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <Label htmlFor='firstName'>Имя</Label>
            <Input
              id='firstName'
              required
              placeholder='Иван'
              className='mt-1'
            />
          </div>
          <div>
            <Label htmlFor='lastName'>Фамилия</Label>
            <Input
              id='lastName'
              required
              placeholder='Иванов'
              className='mt-1'
            />
          </div>
        </div>

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
          <Label
            htmlFor='password'
            className='block text-sm font-bold text-gray-950'
          >
            Password
          </Label>
          <Input
            id='password'
            type='password'
            required
            placeholder='Введите пароль'
            className='mt-1'
          />
        </div>
        <div>
          <Label htmlFor='confirmPassword'>Подтвердите пароль</Label>
          <Input
            id='confirmPassword'
            type='password'
            required
            placeholder='Повторите пароль'
            className='mt-1'
          />
        </div>
        <button
          type='submit'
          className='mt-4 w-full rounded-2xl bg-gray-950 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
        >
          Sign Up
        </button>
        <div className='mt-4 text-center'>
          <p className='text-sm text-gray-600'>
            Already have an account?{" "}
            <a
              href='/login'
              className='font-medium text-gray-950 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 underline'
            >
              Sign in
            </a>
          </p>
        </div>
      </form>
    </>
  );
}
