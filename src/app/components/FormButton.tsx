import React from 'react'
import { useFormStatus } from 'react-dom';

const FormButton = () => {
    const status = useFormStatus();
  return (
    <button className="rounded-md py-[10px] px-[16px] w-full font-medium text-white bg-primary" disabled={status.pending}>{ status.pending ? 'Loading....' : 'Submit' }</button>
  )
}

export default FormButton