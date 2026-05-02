import clsx from 'clsx'
import {
  useController,
  type FieldValues,
  type UseControllerProps
} from 'react-hook-form'

type Props<T extends FieldValues> = {
  rows?: number
  label: string
} & UseControllerProps<T>

export default function TextArea<T extends FieldValues>(
  props: Props<T>
) {
  const {field, fieldState} = useController({...props})

  return (
    <label className='floating-label text-left'>
      <span>{props.label}</span>
      <textarea 
        {...field}
        value={field.value ?? ''} 
        rows={props.rows}
        className={
          clsx('event-form-textarea', {
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