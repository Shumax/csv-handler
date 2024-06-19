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

    if (fileUploaded) {
      const formData = new FormData();
      formData.append("file", fileUploaded);

      fetch('http://localhost:3000/api/files', {
        method: "POST",
        body: formData,
      })
        .then(async response => console.log(await response.json()))
        .catch(error => console.log(error));

      event.target.value = '';
    }
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
        data-testid="upload-button"
        onClick={handleClick}
      >
        Upload
      </button>
    </form>
  </>;
}

