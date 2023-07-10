import { useEffect, useState } from 'react';
import songsData from '../../utils/audios';

export const usePortfolioHooks = () => {
  const [animation, setAnimation] = useState('');
  const [animationTwo, setAnimationTwo] = useState('');
  const [contador, setContador] = useState(0);
  const [songs, setSongs] = useState(songsData);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsData[0]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setContador((prevValue) => prevValue + 1);

      if (contador === 3) {
        setAnimation('animate__fadeInRight');
        setAnimationTwo('animate__fadeInLeft');
        setContador(0);
      }
      setTimeout(() => {
        setAnimation('');
        setAnimationTwo('');
        return clearTimeout(timeout);
      }, 2000);
    }, [1000]);
  }, [contador]);

  return [
    animation,
    animationTwo,
    songs,
    setSongs,
    isPlaying,
    setIsPlaying,
    currentSong,
    setCurrentSong,
  ];
};
