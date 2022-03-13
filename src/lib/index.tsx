export default function lemaConvert(text: string) {
  const lema = text.split(" ")[0];
  const listLemaNumber = lema.match(/\d/g); 
  return (
    <>
      {lema.replace(/[0-9]/g, '')}
      <sup>{listLemaNumber}</sup>
    </>
  )
}