import React from 'react'
import { useFormStatus } from 'react-dom';

const FormButton = () => {
    const status = useFormStatus();
  return (
    <button className="rounded border border-transparent w-full px-4 py-3 block bg-purple-50 cursor-pointer bg-primary hover:border-primary hover:text-primary hover:bg-transparent text-black " disabled={status.pending}>{ status.pending ? 'Loading....' : 'Submit' }</button>
  )
}

export default FormButton