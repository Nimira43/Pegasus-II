import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginSchema } from '../../lib/schemas/loginSchema'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../../lib/stores/store'
import { users } from '../../lib/data/sampleData'
import { signIn } from './accountSlice'
import { GiPegasus } from 'react-icons/gi'
import TextInput from '../../app/shared/components/TextInput'
import { toast } from 'react-toastify'

export default function LoginForm() {
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })
  const dispatch = useAppDispatch()

  const onSubmit = (data: LoginSchema) => {
    const user = users.find(x => x.email === data.email)

    if (user) {
      dispatch(signIn(user))
      navigate('/events')
    } else {
      toast.error('Invalid email or password')
    }
  }

  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-100px)]'>
      <div className='card bg-grey-5 shadow-md p-6 w-1/2 gap-6'>
        <div className='card-title text-main justify-center'>
          <GiPegasus className='size-10' />
          <h3 className='text-3xl logo'>
            Login to Pegasus II
          </h3>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='space-y-4'
        >
          <TextInput
            label='Email'
            control={control}
            name='email'
            
          />
          <TextInput
            label='Password'
            control={control}
            name='password'
            type='password'
          />
          <button
            className='btn main-btn w-full'
            disabled={!isValid}
            type='submit'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
