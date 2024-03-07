import { Routes, Route } from 'react-router-dom'
import Error from '../src/pages/Error/Error.jsx'


const Router = () => {
  return (
    <Routes>
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default Router;