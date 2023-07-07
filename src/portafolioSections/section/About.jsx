import React, { useState } from 'react';

import eloquentJsImage from '../../assets/images/books/eloquentJs.jpg';
import pythonAfondoImage from '../../assets/images/books/pythonAfondo.jpg';
import leonardoCv from '../../assets/cv/LeonardoGabrielPueblaCV.pdf';

export const About = () => {
  const programmingBooks = [
    {
      title: 'Eloquent JavaScript',
      author: 'Marjin Haverbeke',
      image: eloquentJsImage,
      pag: 'estoy en el capítulo 3',
    },
    {
      title: 'Python a fondo',
      author: 'Óscar Ramirez Jiménez',
      image: pythonAfondoImage,
      pag: 'estoy en la página 58',
    },
  ];

  const personalData = {
    name: 'Leonardo Gabriel Puebla',
    fechaDeNacimiento: '22/06/1994',
    email: 'leonardo38361@gmail.com',
    phone: '+549-2612589352',
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [bookAnimation, setBookAnimation] = useState('');

  const handleSlideChange = (increment) => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide + increment + programmingBooks.length) %
        programmingBooks.length
    );
    const animationClass =
      increment === -1 ? 'animate__fadeInLeft' : 'animate__fadeInRight';
    if (bookAnimation !== `animate__animated ${animationClass}`) {
      setBookAnimation(`animate__animated ${animationClass}`);
      setTimeout(() => {
        setBookAnimation('');
      }, 1000);
    }
  };

  const handlePrevSlide = () => {
    handleSlideChange(-1);
  };

  const handleNextSlide = () => {
    handleSlideChange(1);
  };

  return (
    <main
      className="flex h-max min-w-280 place-content-center items-center text-black dark:bg-neutral-900 dark:text-white md:mb-6 md:h-max xl:h-max 2xl:h-screen"
      id="about">
      <section className="my-20 flex w-screen min-w-280 flex-col rounded-lg dark:bg-inherit md:mt-0 md:w-max 2xl:my-0">
        <h2 className="mb-1 text-center font-Raleway text-3xl md:mt-24 md:text-5xl xl:mt-24 2xl:my-5 2xl:mb-5 2xl:text-6xl">
          About me
        </h2>
        <div className="grid place-content-center overflow-hidden bg-neutral-200 p-4 dark:bg-neutral-950 md:grid md:grid-cols-2 md:gap-24 md:rounded-md xl:gap-x-36">
          <div className="col-span-1 w-72 leading-6 md:w-72 xl:w-96">
            <h3 className="p-1 text-center font-Kanit text-2xl md:text-center 2xl:text-4xl">
              Estudios y experiencia:
            </h3>
            <div className="my-2 flex flex-col p-1 md:w-full">
              <p className="mx-2 mt-2 whitespace-break-spaces p-1 font-victorMono text-sm md:tracking-wide md:mx-0 md:text-base 2xl:text-lg">
                Comencé mis estudios con Java en el curso 111 Mil Programadores
                entre el año 2016 y 2017. Luego, reforcé conocimientos en POO.
                En 2019 ingresé a la UTN y estudié durante todo el año. En 2021,
                me uní a plataformas como Platzi y Udemy, donde estudié
                JavaScript y React. Actualmente, estoy estudiando Desarrollo de
                Software en ies-9008 Manuel Belgrano.
              </p>
              <p className="mx-2 mt-1 whitespace-break-spaces p-1 font-victorMonoBold text-sm md:mx-0 md:text-base 2xl:text-lg">
                Tengo 2 años de experiencia laboral como programador freelance.
              </p>
            </div>
            <div className="my-2 border-b-2 border-neutral-950 dark:border-white md:hidden"></div>
            <div className="flex flex-col place-items-center">
              <h1 className="mb-3 text-center font-Kanit text-2xl tracking-widest 2xl:mb-4 2xl:text-4xl">
                Curriculum
              </h1>
              <button className="flex w-max items-center rounded-lg border-2 border-sky-400 p-2 font-victorMonoBold text-sky-400 transition-colors duration-500 hover:bg-sky-400 hover:text-white hover:transition-colors hover:duration-500 dark:border-white dark:text-white hover:dark:border-sky-400">
                <span className="material-symbols-outlined px-1 text-base font-bold">
                  download
                </span>
                <a
                  className="px-1 text-base 2xl:text-lg"
                  href={leonardoCv}
                  download>
                  Download Curriculum
                </a>
              </button>
            </div>
          </div>
          <div className="col-span-1 w-72 md:w-72 xl:w-96">
            <div className="mx-5 my-2 border-b-2 border-neutral-950 dark:border-white md:hidden"></div>
            <h3 className="p-1 text-center font-Kanit text-2xl 2xl:text-4xl">
              📚Books I read:
            </h3>
            <div
              className={`relative mx-auto my-2 flex w-56 min-w-280 justify-center p-1 md:mx-auto md:w-full md:overflow-visible 2xl:w-full`}>
              <button
                className="absolute xs:left-5 -left-2 top-1/2 z-10 flex -translate-y-1/2 transform rounded-full bg-neutral-950 bg-opacity-50 p-2 text-white md:hover:bg-sky-400 md:hover:transition md:hover:duration-500 dark:md:hover:bg-sky-400 dark:md:hover:bg-opacity-50 xl:left-10 2xl:left-0"
                onClick={handlePrevSlide}>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <figure
                className={`z-0 m-2 rounded-xl border-2 border-neutral-950 dark:border-white ${bookAnimation}`}>
                <img
                  src={programmingBooks[currentSlide].image}
                  alt={programmingBooks[currentSlide].title}
                  className="h-64 rounded-t-lg xl:h-52 2xl:h-64"
                />
                <p className="mt-2 text-center font-Raleway text-sm 2xl:text-lg">
                  {programmingBooks[currentSlide].title}
                </p>
                <p className="2xl:text-md text-center font-Raleway text-xs">
                  {programmingBooks[currentSlide].author}
                </p>
                <p className="2xl:text-md text-center font-Kanit text-xs">
                  {programmingBooks[currentSlide].pag}
                </p>
              </figure>
              <button
                className="absolute xs:right-5 -right-2 top-1/2 flex -translate-y-1/2 transform rounded-full bg-neutral-950 bg-opacity-50 p-2 text-white md:hover:bg-sky-400 md:hover:transition md:hover:duration-500 dark:md:hover:bg-sky-400 dark:md:hover:bg-opacity-50 xl:right-10 2xl:right-0"
                onClick={handleNextSlide}>
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            <div className="mx-5 my-2 border-b-2 border-neutral-950 dark:border-white md:hidden"></div>
            <div className="mx-5 flex flex-col place-items-center md:mx-2">
              <h2 className="mb-4 text-center font-Kanit text-2xl 2xl:mt-5 2xl:text-4xl">
                Personal Information
              </h2>
              <div className="flex w-64 flex-col rounded-lg border-2 border-dotted border-sky-400 p-2 dark:border-white sm:align-middle md:w-full 2xl:p-4">
                <p className="font-victorMono text-sm md:text-base 2xl:text-lg">
                  Name: {personalData.name}
                </p>
                <p className="font-victorMono text-sm md:text-base 2xl:text-lg">
                  Nacimiento: {personalData.fechaDeNacimiento}
                </p>
                <p className="font-victorMono text-sm md:text-base 2xl:text-lg">
                  Email: {personalData.email}
                </p>
                <p className="font-victorMono text-sm md:text-base tracking-widest 2xl:text-lg">
                  Phone: {personalData.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
