import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./app/home"
import Contact from "./app/contact"
import RootLayout from "./layouts/rootLayout"
import Mission from "./app/abouts/mission"
import Teams from "./app/abouts/teams"
import Consultancy from "./app/services/consultancy"
import Events from "./app/services/events"
import Prospection from "./app/services/prospection"
import News from "./app/medias/news"
import Photo from "./app/medias/photo"
import Video from "./app/medias/video"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/about-us/our-mission",
          element: <Mission />
        },
        {
          path: "/about-us/our-teams",
          element: <Teams />
        },
        {
          path: "/services/consultancy-service",
          element: <Consultancy />
        },
        {
          path: "/services/venture-konect's-events",
          element: <Events />
        },
        {
          path: "/services/corporate-excecute-prospection",
          element: <Prospection />
        },
        {
          path: "/media/news",
          element: <News />
        },
        {
          path: "/media/photo-gallery",
          element: <Photo />
        },
        {
          path: "/media/video-gallery",
          element: <Video />
        },

      ]
    },
  ])

  return <RouterProvider router={router} />
}

export default App
