import type { ActionFunction, LoaderFunction } from "react-router-dom"

export const IndexRoute = () => {
  return (
    <>
      <h1>Index_VIEW</h1>
    </>
  )
}

export const IndexRouteAction: ActionFunction = async ({ params, request }) => {
  
  // let formData = await request.formData();
  console.log("request", request)
  
  return {}

}

export const IndexRouteLoader: LoaderFunction = () => {
  return {}
}