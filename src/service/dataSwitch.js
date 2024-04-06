
export const getData = () => {
  const useMockData = import.meta.env.VITE_USE_MOCK_DATA === 'true';

  if (useMockData) {
    console.log("Utilisation des données mockées");
    return 'mocked'; // Utilisation des données mockées
  } else {
    console.log("Utilisation des données de l'API");
    return 'api'; // Utilisation des données de l'API
  }
};

