import { useRoutes } from "react-router";
import Mine from "../pages/Mine";
import Friend from "../pages/Friend";

const routes = [
  { path: 'mine', element: <Mine /> },
  { path: 'friend', element: <Friend /> },
]

export default function Routes() {
  let element = useRoutes(routes)
  return element
}



