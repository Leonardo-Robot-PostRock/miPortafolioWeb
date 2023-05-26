import React, { useState } from 'react';
import eloquentJsImage from '../../assets/images/eloquentJs.jpg';
import pythonAfondoImage from '../../assets/images/pythonAfondo.jpg';

export const About = () => {
  const programmingBooks = [
    {
      title: 'Eloquent JavaScript',
      author: 'Marjin Haverbeke',
      image: eloquentJsImage,
      pag: 'estoy en el capítulo 3'
    },
    {
      title: 'Python a fondo',
      author: 'Óscar Ramirez Jiménez',
      image: pythonAfondoImage,
      pag: 'estoy en la página 58'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [bookAnimation, setBookAnimation] = useState('');

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? programmingBooks.length - 1 : prevSlide - 1));
    console.log(bookAnimation);
    if (bookAnimation !== 'animate__animated animate__fadeInLeft') {
      setBookAnimation('animate__animated animate__fadeInLeft');
      setTimeout(() => {
        setBookAnimation('');
      }, [1000]);
    }
  };

  const handleNextSlide = () => {
    console.log(bookAnimation);
    setCurrentSlide((prevSlide) => (prevSlide === programmingBooks.length - 1 ? 0 : prevSlide + 1));
    if (bookAnimation !== 'animate__animated animate__fadeInRight') {
      setBookAnimation('animate__animated animate__fadeInRight');
      setTimeout(() => {
        setBookAnimation('');
      }, [1000]);
    }
  };

  return (
    <main
      className="flex h-max min-w-280 place-content-center items-center dark:bg-neutral-900 dark:text-slate-200 md:mx-28 md:h-max xl:h-max"
      id="about">
      <section className="display mt-20 flex flex-col rounded-lg p-2 dark:bg-inherit md:mt-0">
        <h2 className="mb-5 text-center font-Raleway text-3xl md:mt-24 xl:mt-24">About me</h2>
        <div className="xl:grid xl:grid-cols-2 xl:gap-x-36">
          <div className="mx-5 leading-6 md:w-96">
            <p className="2xl:text-1xl p-1 text-sm tracking-normal">
              Comencé mis estudios con Java en el curso 111MilProgramadores entre 2016 y 2017. Luego, reforcé
              conocimientos en POO. En 2019 ingresé a la UTN y estudié durante todo el año. En 2021, me uní a
              plataformas como Platzi y Udemy, donde estudié JavaScript y React. Actualmente, estoy estudiando
              Desarrollo de Software en ies-9008 Manuel Belgrano.
            </p>
            <div className="my-2 border-b-2 border-neutral-950 dark:border-white"></div>
            <p className="2xl:text-1xl mt-2 font-victorMono text-sm">
              Tengo 1 año de experiencia laboral como programador freelance. Trabajé en un proyecto con otro programador
              y un diseñador, utilizando Angular.
            </p>
          </div>

          {/* Sección de lectura */}

          <div className="m-1 flex flex-col">
            <h3 className="text-center font-Kanit text-2xl">📚Libros que leo:</h3>
            <div className={`relative mt-4 flex min-w-280 justify-center`}>
              {' '}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-neutral-950 bg-opacity-50 p-2 text-white dark:bg-sky-500 xl:left-10"
                onClick={handlePrevSlide}>
                {'<'}
              </button>
              <figure className={`m-2 rounded-lg border-2 border-neutral-950 p-1 dark:border-white ${bookAnimation}`}>
                <img
                  src={programmingBooks[currentSlide].image}
                  alt={programmingBooks[currentSlide].title}
                  className="h-52 rounded-lg"
                />
                <p className="mt-2 text-center font-Raleway text-sm">{programmingBooks[currentSlide].title}</p>
                <p className="text-center font-Raleway text-xs">{programmingBooks[currentSlide].author}</p>
                <p className="text-center font-Kanit text-xs">{programmingBooks[currentSlide].pag}</p>
              </figure>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-neutral-950 bg-opacity-50 p-2 text-white dark:bg-sky-500 xl:right-10"
                onClick={handleNextSlide}>
                {'>'}
              </button>
              <div className=""></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
