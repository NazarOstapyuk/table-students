import {Suspense} from 'react'
import {AppRouter} from "./providers/router";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {SkeletonData} from "../shared/ui/SkeletonData";

function App() {

  return (
          <Suspense fallback={<SkeletonData columns={3} rows={10} />}>
              <AppRouter />
              <ToastContainer
                  position="top-right"
                  autoClose={2000}
                  newestOnTop={false}
                  closeOnClick
                  pauseOnHover
                  theme="light"
              />
          </Suspense>
  )
}

export default App
