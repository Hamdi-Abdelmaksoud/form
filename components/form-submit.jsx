'use client';
import { useFormStatus } from "react-dom";

export default function FormSubmit(){
  const status =useFormStatus();
  if(status.pending)//submited
  {
    return <p> Creating post...</p>
  }
  return <><button type="reset">Reset</button>
          <button>Create Post</button></>
}