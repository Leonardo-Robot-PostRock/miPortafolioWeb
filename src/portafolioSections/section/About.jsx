import React, { useState } from 'react';

//imagenes

import eloquentJsImage from '../../assets/images/eloquentJs.jpg';
import pythonAfondoImage from '../../assets/images/pythonAfondo.jpg';

//cv

import leonardoCv from '../../assets/cv/LeonardoGabrielPueblaCV.pdf';

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

  const personalData = {
    name: 'Leonardo Gabriel Puebla',
    age: 28,
    email: 'leonardo38361@gmail.com',
    phone: '+549-2612589352'
  };

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
      className="flex h-max min-w-280 place-content-center items-center dark:bg-neutral-900 dark:text-slate-200 md:mx-28 md:h-max xl:h-max 2xl:h-screen"
      id="about">
      <section className="my-20 flex w-screen min-w-280 flex-col rounded-lg dark:bg-inherit md:mt-0 md:w-max 2xl:my-0">
        <h2 className="mb-5 text-center font-Raleway text-3xl md:mt-24 xl:mt-24 2xl:my-5 2xl:text-6xl">About me</h2>
        <div className="md:grid md:grid-cols-2 md:gap-24 xl:grid xl:grid-cols-2 xl:gap-x-36">
          <div className="mx-5 leading-6 md:w-72 2xl:w-96">
            <p className="p-1 text-sm tracking-normal 2xl:text-lg">
              Comencé mis estudios con Java en el curso 111MilProgramadores entre 2016 y 2017. Luego, reforcé
              conocimientos en POO. En 2019 ingresé a la UTN y estudié durante todo el año. En 2021, me uní a
              plataformas como Platzi y Udemy, donde estudié JavaScript y React. Actualmente, estoy estudiando
              Desarrollo de Software en ies-9008 Manuel Belgrano.
            </p>
            <p className="mt-2 p-1 font-victorMonoBold text-sm 2xl:text-lg">
              Tengo 2 años de experiencia laboral como programador freelance.
            </p>
            <div className="my-2 border-b-2 border-neutral-950 dark:border-white md:hidden"></div>
            {/* Sección descargar curriculum */}

            <div className="divide m-3 flex flex-col place-items-center md:mt-16 2xl:mt-16">
              <h1 className="mb-4 text-center font-Kanit text-2xl tracking-wider 2xl:mb-4 2xl:text-4xl">Curriculum</h1>
              <button className="flex w-max justify-self-center rounded-lg border-2 border-sky-400 p-2 align-middle font-victorMonoBold text-sky-400 hover:bg-sky-400 hover:text-white dark:border-white dark:text-white hover:dark:border-sky-400">
                <span class="material-symbols-outlined px-1">download</span>
                <a className="text-md px-1 2xl:text-lg" href={leonardoCv} download>
                  Download Curriculum
                </a>
              </button>
            </div>
          </div>

          {/* Sección de lectura */}

          <div className="mb-2 flex flex-col md:w-72 xl:w-96">
            <div className="mx-5 my-2 border-b-2 border-neutral-950 dark:border-white md:hidden"></div>
            <h3 className="text-center font-Kanit text-2xl 2xl:text-4xl">📚Books I read:</h3>
            <div
              className={`relative mx-auto mb-2 mt-4 flex w-56 min-w-280 justify-center md:mx-auto md:w-full 2xl:w-full`}>
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-neutral-950 bg-opacity-50 p-2 text-white dark:bg-sky-500 xl:left-10 2xl:left-0 2xl:text-3xl"
                onClick={handlePrevSlide}>
                {'<'}
              </button>
              <figure className={`m-2 rounded-lg border-2 border-neutral-950 p-1 dark:border-white ${bookAnimation}`}>
                <img
                  src={programmingBooks[currentSlide].image}
                  alt={programmingBooks[currentSlide].title}
                  className="h-52 rounded-lg 2xl:h-64"
                />
                <p className="mt-2 text-center font-Raleway text-sm 2xl:text-lg">
                  {programmingBooks[currentSlide].title}
                </p>
                <p className="2xl:text-md text-center font-Raleway text-xs">{programmingBooks[currentSlide].author}</p>
                <p className="2xl:text-md text-center font-Kanit text-xs">{programmingBooks[currentSlide].pag}</p>
              </figure>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-neutral-950 bg-opacity-50 p-2 text-white dark:bg-sky-500 xl:right-10 2xl:right-0 2xl:text-3xl"
                onClick={handleNextSlide}>
                {'>'}
              </button>
            </div>
            <div className="mx-5 my-2 border-b-2 border-neutral-950 dark:border-white md:hidden"></div>
            <div className="mx-5 flex flex-col place-items-center md:mx-2">
              <h2 className="font-kanit mb-4 text-center text-2xl 2xl:mt-5 2xl:text-3xl">Personal Information</h2>
              <div className="flex w-64 flex-col rounded-lg border-2 border-dotted border-sky-400 p-2 dark:border-white sm:align-middle md:w-full 2xl:p-4">
                <p className="text-sm 2xl:text-lg">Name: {personalData.name}</p>
                <p className="text-sm 2xl:text-lg">Age: {personalData.age}</p>
                <p className="text-sm 2xl:text-lg">Email: {personalData.email}</p>
                <p className="text-sm tracking-widest 2xl:text-lg">Phone: {personalData.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
