import { Routes, Route } from 'react-router-dom'
import Error from '../../pages/Error/Error'


const Router = () => {
  return (
    <Routes>
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default Router;