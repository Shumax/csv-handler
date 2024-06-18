import '@/styles/globals.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <section
        className='
          w-full
          
        '
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
          >
            Upload
          </button>
        </nav>

        <div
          className="
            w-full h-px bg-gray-300
            tab:h-[28px]
            mob:hidden
          "
        />
      </section>

      <section
        className='
          grid
          grid-cols-4	
          max-md:grid-cols-2	
          max-sm:grid-cols-1
          gap-8
          lg:gap-8

          p-4
          w-full
          h-full
        '
      >
        {
          Array.from({ length: 12 }, (_, index) => (
            <div
              key={index}
              className='
                border
                border-solid	
                border-gray-400
                rounded-lg	
                p-4
                h-32

                flex
                items-center
                justify-center

                lg:w-4/5
                w-full
                mx-auto
                my-0

              '
            >
              Card
            </div>
          ))
        }
      </section>

    </main>
  );
}
