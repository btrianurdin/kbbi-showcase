import { useCallback, useState } from "react";
import { IApiResponse, IKbbiData } from "../interface";
import Items from "./Items";
import Loading from "./Loading";
import SearchBox from "./SearchBox";

const API_ENDPOINT = `${process.env.REACT_APP_API_BASEURL}/cari`;

export default function MainContent() {
  const [result, setResult] = useState<IKbbiData[] | null>(null);
  const [loading, setLoading] = useState(false);

  const searchClickHandler = useCallback(async (e: any, _word: string) => {
    e.preventDefault();
    
    if (_word.length > 0) {
      setLoading(true);
      const getData = await fetch(`${API_ENDPOINT}/${_word}`);
      const response: IApiResponse = await getData.json();
      if (response.status) {
        setResult(response.data);
      } else {
        setResult(null);
      }
      setLoading(false);
    }
  }, []);

  return (
    <div className="flex-1 bg-white relative flex justify-center">
      <div className="absolute bg-white w-full h-14 -top-14 rounded-tl-[60px] rounded-tr-[60px]" />
      <SearchBox 
        searchClick={searchClickHandler} />
      <div 
        className="mt-16 p-5 w-full"
      >
        {
          loading 
          ? <div className="text-gray-400 w-full text-center mt-20"><Loading /></div>
          : result 
            ? <Items results={result} />
            : <p className="text-gray-400 w-full text-center mt-20">Tidak ada hasil!</p>
        }
      </div>
    </div>
  )
}