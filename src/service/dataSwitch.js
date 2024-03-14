export const getData = () => {
    const useMockData = import.meta.env.VITE_USE_MOCK_DATA === 'true';
  
    if (useMockData) {
      return 'mocked'; // Utilisation les données mockées
    } else {
      return 'api'; // Utilisation les données de l'API
    }
  };
  