export default function LemaText({ text }: { text: string }) {
  const lema = text.split(" ")[0];
  const listLemaNumber = lema.match(/\d/g);
  const vocal = text.includes("/") && text.split("/");
  const informalWord = text.includes(":") && text.split(":");

  return (
    <>
      <h1 className="text-2xl font-medium">
        {lema.replace(/[0-9]/g, '')}
        {
          listLemaNumber && <sup>{listLemaNumber}</sup>
        }
        {
          vocal && <span className="text-gray-500 italic"> / {vocal[1]}/</span>
        }
      </h1>
      {
        informalWord && <h5 className="text-gray-500">bentuk tidak baku: {informalWord[1]}</h5>
      }
    </>
  )
}