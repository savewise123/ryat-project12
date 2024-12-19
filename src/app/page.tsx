"use client"



export default function RotationPage() {
const {data : items, isLoading} = useQuery ({
querykey : ["rotation"],
queryFn : async () => {
const res = await fetch("/api/rotation")
const data : ChampionRotation 

)
})
console.log("items",items);

if(isLoading) <>Loading</>

return (
<main>
  <h1>챔피언 로테이션
  
  </h1>
  
  </main>



)





}