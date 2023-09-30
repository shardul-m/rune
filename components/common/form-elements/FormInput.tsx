'use client'

import { cn } from '@/utils/cn'

import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

interface FormInputProps {
  className?: string
  label: string
  type?: React.HTMLInputTypeAttribute
  name: string
  placeholder?: string
  suffixElement?: React.ReactNode
  optional?: boolean
  disabled?: boolean
}

const FormInput = ({
  className,
  label,
  type = 'text',
  name,
  placeholder,
  suffixElement,
  optional = false,
  disabled = false,
}: FormInputProps): JSX.Element => {
  const { register, getFieldState } = useFormContext()

  const { error } = getFieldState(name)

  return (
    <div className={cn(className)}>
      <label
        htmlFor={name}
        className="flex gap-2 items-center justify-between mb-0 text-base font-normal text-[rgba(30,30,30,1)] dark:text-slate-200"
      >
        <div className="flex gap-2 items-center font-bold text-lg">
          {label}{' '}
        </div>
        {optional && (
          <p className="text-gray-400 text-sm font-medium">(Optional)</p>
        )}
      </label>
      <div className="relative w-full flex items-center">
        <input
          type={type}
          id={name}
          disabled={disabled}
          className={cn(
            'border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[rgba(236,238,239,1)] dark:bg-zinc-700 dark:text-white',
            { 'bg-red-100': !!error }
          )}
          placeholder={placeholder}
          autoComplete="off"
          {...register(name)}
        />
        <div className="absolute right-3">{suffixElement}</div>
      </div>
      <ErrorMessage
        name={name}
        render={({ message }) => (
          <p className="mt-1 text-sm text-red-600">{message}</p>
        )}
      />
    </div>
  )
}

export default FormInput
