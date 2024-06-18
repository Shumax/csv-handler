'use client'

import { useRef } from "react";

export default function Upload() {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    hiddenFileInput.current?.click();
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const fileUploaded = event.target.files?.[0];

    console.log(fileUploaded)
  };

  return <>
    <form>
      <input
        className="hidden"
        type={"file"}
        accept={".csv"}
        onChange={handleChange}
        ref={hiddenFileInput}
      />
      <button
        className='
          px-5 py-1
          border
          border-solid	
          border-gray-400
          rounded-sm
          text-sm
          flex
          items-center
        '
        onClick={handleClick}
      >
        Upload
      </button>
    </form>
  </>;
}

