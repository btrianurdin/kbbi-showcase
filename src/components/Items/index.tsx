import { IKbbiData } from "../../interface"
import LemaText from "./LemaText";

interface ItemsProps {
  results: IKbbiData[];
}

export default function Items({ results }: ItemsProps) {
  return (
    <div>
      {
        results.map((data) => (
          <div key={data.lema} className="mb-3">
            <LemaText text={data.lema} />
            <div className="ml-4">
              {
                data.arti.map((arti, i) => (
                  <div key={arti.kelas_kata + i} className={`${(i+1) !== data.arti.length && 'border-b'} border-gray-200 py-2`}>
                    <p>
                      <span className="italic text-red-600">
                        {arti.kelas_kata.replace(/\[[^\][]*]/g, ' ')}
                      </span>
                      {arti.deskripsi}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}