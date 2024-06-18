
import Filter from "./components/Filter";
import Upload from "./components/Upload";

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function Search({ searchTerm, setSearchTerm }: SearchProps) {
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
        <Filter  searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

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
