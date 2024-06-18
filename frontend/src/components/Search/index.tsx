
import Upload from "./components/Upload";

export default function Search() {
  return <>
    <section
      className='w-full'
    >
      <nav
        className='
            px-4
            py-2  
            flex
            justify-between
          '
      >
        <input placeholder='Search'
          className='
              px-3 py-1
              border
              border-solid	
              border-gray-400
              rounded-sm
            '
        ></input>

        <Upload />
      </nav>

      <div
        className="
            w-full h-px bg-gray-300
            tab:h-[28px]
            mob:hidden
          "
      />
    </section>
  </>;
};
