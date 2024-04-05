import  { useRef } from 'react';

const AudioPlayer = ({ audioElem, isPlaying, setIsPlaying, currentSong, setCurrentSong, songs }) => {
  const clickRef = useRef();

  const PlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const checkWidth = (e) => {
    const width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const divProgress = (offset / width) * 100;

    // Validar si currentSong.progress es un número válido y está dentro del rango adecuado
    if (
      Number.isFinite(currentSong.progress) &&
      currentSong.progress >= 0 &&
      currentSong.progress <= currentSong.length
    ) {
      audioElem.current.currentTime = (divProgress / 100) * currentSong.length;
    } else {
      // Si currentSong.progress no es un número válido, establecer currentTime en 0
      audioElem.current.currentTime = 0;
    }
  };

  const skipBack = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title);

    if (index == 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }

    audioElem.current.currentTime = 0;
  };

  const skipToNext = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title);

    if (index == songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }

    audioElem.current.currentTime = 0;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center dark:text-white">
      <div className="w-60 rounded-lg border-2 border-solid border-neutral-500 px-4 py-1 dark:border-neutral-400 xs:w-60 375:w-80 md:w-96">
        <div>
          <p className="mb-2 animate-pulse text-center font-Raleway">{currentSong.title}</p>
        </div>
        <div className="w-full">
          <div className="flex justify-between font-victorMonoBold">
            <p className={`${formatTime(currentSong.progress) === 'NaN:NaN' && 'opacity-0'}`}>
              {formatTime(currentSong.progress) === 'NaN:NaN' ? '--:--' : formatTime(audioElem.current.currentTime)}
            </p>
            <p className={`${formatTime(currentSong.progress) === 'NaN:NaN' && 'opacity-0'}`}>
              {formatTime(currentSong.length) === 'NaN:NaN' ? '--:--' : formatTime(currentSong.length)}
            </p>
          </div>
          <div className="h-1 cursor-pointer rounded-lg bg-neutral-500" onClick={checkWidth} ref={clickRef}>
            <div className="h-full w-0 rounded-lg bg-sky-400" style={{ width: `${currentSong.progress + '%'}` }}></div>
          </div>
        </div>

        <div className="my-2 flex justify-center gap-5">
          <span className="material-symbols-outlined cursor-pointer rounded-sm hover:bg-sky-400" onClick={skipBack}>
            skip_previous
          </span>
          {isPlaying ? (
            <span className="material-symbols-outlined cursor-pointer rounded-sm hover:bg-sky-400" onClick={PlayPause}>
              pause
            </span>
          ) : (
            <span className="material-symbols-outlined cursor-pointer rounded-sm hover:bg-sky-400" onClick={PlayPause}>
              play_arrow
            </span>
          )}
          <span className="material-symbols-outlined cursor-pointer rounded-sm hover:bg-sky-400" onClick={skipToNext}>
            skip_next
          </span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
