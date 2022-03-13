import { useState } from "react";

interface SearchBoxProps {
  searchClick: (e: any, word: string) => void;
}

export default function SearchBox({ searchClick }: SearchBoxProps) {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <div className="bg-white shadow-lg absolute p-4 w-[80%] mx-auto -top-24 rounded-lg">
      <form>
        <input 
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="bg-white w-full shadow-md px-3 py-2.5 rounded-lg  focus:outline-primary" 
          placeholder="Masukkan kata" />
        <button
          className="mt-4 bg-primary text-white w-full px-3 py-2.5 rounded-lg shadow-md"
          onClick={(e) => searchClick(e, searchValue)}
        >
          Cari
        </button>
      </form>
    </div>
  )
}