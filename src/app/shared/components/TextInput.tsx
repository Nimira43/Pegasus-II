import clsx from 'clsx'
import {
  useController,
  type FieldValues,
  type UseControllerProps
} from 'react-hook-form'

type Props<T extends FieldValues> = {
  type?: string
  label: string
} & UseControllerProps<T>

export default function TextInput<T extends FieldValues>(
  props: Props<T>
) {
  const {field, fieldState} = useController({...props})

  return (
    <label className='floating-label text-left'>
      <span>{props.label}</span>
      <input 
        {...field}
        value={field.value ?? ''}
        type={props.type} 
        className={
          clsx('event-form-input', {
            'border-red-500': !!fieldState.error,
            'border-green-500': !fieldState.error && fieldState.isDirty
          })
        }
        placeholder={props.label}
      />
      {fieldState.error && (
        <div className='text-red-500'>
          {fieldState.error.message}
        </div>
      )}
    </label>
  )
}