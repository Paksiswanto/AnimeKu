const API_BASE_URL = 'https://api.jikan.moe/v4';
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const GetDataJikan = async (endpoint: string) => {
   const chaceKey = `AK${endpoint}`;
   const cachedData = localStorage.getItem(chaceKey);

   if (cachedData) {
    console.log(`Mengambil Data dari ${endpoint} dari cache`);
    return JSON.parse(cachedData);
   }

   try {
    await delay(1500); // Simulate network delay
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    const data = await response.json();
    localStorage.setItem(chaceKey, JSON.stringify(data));
    return data;
   } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
   }
};