import { useParams } from 'react-router-dom';
import { USER_MAIN_DATA } from './../../../mocks/data/informations'; // Assurez-vous de fournir le bon chemin

const HeaderDashboard = () => {
  // Utilisez useParams pour obtenir les paramètres de l'URL, y compris userId
  const { userId } = useParams();

  // Utilisez userId pour récupérer les informations de l'utilisateur à partir de USER_MAIN_DATA
  const user = USER_MAIN_DATA.find(user => user.id === parseInt(userId));

  // Si aucun utilisateur correspondant n'est trouvé, affichez un message d'erreur
  if (!user) {
    return <div>Utilisateur non trouvé</div>;
  }

  // Affichez le prénom de l'utilisateur dans le composant HeaderDashboard
  return (
    <header className='headerDashboard'>
      <h1 className='headerDashboard__title'>Bonjour <span className='headerDashboard__name'>{user.userInfos.firstName}</span></h1>
      <span className='headerDashboard__felicitation'>Félicitations ! Vous avez explosé vos objectifs hier 👏</span>
    </header>
  );
}

export default HeaderDashboard;
