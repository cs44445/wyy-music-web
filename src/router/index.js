import { useRoutes } from "react-router";
import Discover from "../pages/Discover";
import Mine from "../pages/Mine";
import Friend from "../pages/Friend";

const routes = [
  { path: '/', element: <Discover /> },
  { path: 'discover', element: <Discover /> },
  { path: 'mine', element: <Mine /> },
  { path: 'friend', element: <Friend /> },
]

export default function Routes() {
  let element = useRoutes(routes)
  return element
}
