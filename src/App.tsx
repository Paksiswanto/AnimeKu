import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Anime from './components/anime';
import { GetDataJikan } from './services/api';


const App: React.FC = () => {

  const [loading, setLoading] = useState(true);
  const [animes, setAnimes] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const animeData = await GetDataJikan('top/anime');
        setAnimes(animeData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);




  if (loading) return <div className="bg-black h-screen flex items-center justify-center text-white">Loading...</div>;

  return (
    <main className="bg-[#0f0f0f] min-h-screen">
      <Navbar />
      <Hero />
      <div className="py-10">
        <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="w-2 h-8 bg-red-600 rounded-full"></span>
          Top Recommendations
        </h2>
        <Anime data={animes} />
      </div>
      <div>
        <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="w-2 h-8 bg-red-600 rounded-full"></span>
          Top Manga
        </h2>
      </div>
    </main>
  );
};

export default App;