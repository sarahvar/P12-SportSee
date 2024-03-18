import './HeaderDashboard.css'

const HeaderDashboard = ({firstName}) => {
  return (
    <header className='headerDashboard'>
        <h1 className='headerDashboard__title'>Bonjour <span className='headerDashboard__name'>{firstName}</span></h1>
        <span className='headerDashboard__felicitation'>Félicitations ! Vous avez explosé vos objectifs hier 👏</span>
    </header>
  )
}
export default HeaderDashboard 