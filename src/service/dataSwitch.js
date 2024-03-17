export const getData = () => {
  const useMockData = import.meta.env.VITE_USE_MOCK_DATA === 'true';

  if (useMockData) {
    return 'mocked'; // Utilisation des données mockées
  } else {
    return 'api'; // Utilisation des données de l'API
  }
};
