import clsx from 'clsx'
import { useMemo, useState } from 'react'
import {
  useController,
  type FieldValues,
  type UseControllerProps
} from 'react-hook-form'
import type { Suggestion } from '../../../lib/types'
import { debounce } from '../../../lib/util/util'

type Props<T extends FieldValues> = {
  type?: string
  label: string
} & UseControllerProps<T>

export default function PlaceInput<T extends FieldValues>(
  props: Props<T>
) {
  const {field, fieldState} = useController({...props})
  const [loading, setLoading] = useState(false)
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  
  // const locationUrl = '<REPLACE-WITH-KEY-IN-CODE-SNIPPET-NOTES>'
  
  const locationUrl = 'https://api.locationiq.com/v1/autocomplete?dedupe=1&limit=6&key=pk.f0cd0db28ea15d3062b77c527870d4db'

  const fetchSuggestions = useMemo(() => debounce(async (query: string) => {
    if (!query || query.length < 3) {
      setSuggestions([])
      return
    }
    setLoading(true)

    try {
      const res = await fetch(`${locationUrl}&q=${query}`)
      const data = await res.json()
      setSuggestions(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, 1000), [locationUrl])

  const handleChange = async (value: string) => {
    field.onChange(value)
    await fetchSuggestions(value)
  }
  return (
    <label className='floating-label text-left'>
      <span>{props.label}</span>
      <input 
        {...field}
        value={field.value ?? ''}
        onChange={e => handleChange(e.target.value)}
        type={props.type} 
        className={
          clsx('event-form-input', {
            'border-red-500': !!fieldState.error,
            'border-green-500': !fieldState.error && fieldState.isDirty
          })
        }
        placeholder={props.label}
      />
      {loading && <div>Loading...</div>}
      {suggestions.length > 0 && (
        <ul className='list rounded-box p-1'>
          {suggestions.map(suggestion => (
            <li
              key={suggestion.place_id}
              onClick={
                () => field.onChange(suggestion.display_name)
              }
              className='list-row p-1 cursor-pointer hover:text-main transiitioning'
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}
      {fieldState.error && (
        <div className='text-red-500'>
          {fieldState.error.message}
        </div>
      )}
    </label>
  )
}