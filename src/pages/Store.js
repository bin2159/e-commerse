import { useLoaderData } from "react-router-dom"
import Merch from "../components/Main/Content/Merch"
import Music from "../components/Main/Content/Music"


const Store = () => {
  const data=useLoaderData()
  console.log(data)
  return (
    <>
    <Music/>
    <Merch/>
    </>
  )
}

export default Store