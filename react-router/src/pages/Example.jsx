import {  createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from 'react-router-dom'
import HomeComponent from "./HomeComponent"
import DetailsComponent from "./DetailsComponent"

function Example() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<HomeComponent />} />
        <Route path="about" element={<div>About Component</div>} />
        <Route path="learn" element={<div>Learn Component<Outlet/></div>}>
          {/* Dynamic Routing */}
          <Route path=":id" element={<div>Learn Details Component</div>} />
        </Route>
        {/*Not Found on Parent level*/}
        <Route path="*" element={<div>Parent Component Not Found</div>} />
         {/* Nested Routing */}
        <Route path='contact' element={<DetailsComponent/>}>
           <Route path="details" element={<div>Contact details Component</div>} />
           <Route path="form" element={<div>Contact Form Component</div>} />
            {/*Not Found on Child level*/}
           <Route path="*" element={<div>Nested Component Not Found</div>} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Example