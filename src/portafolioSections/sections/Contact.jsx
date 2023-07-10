import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { Input } from '../../ui/components/Input';
import { BoxInfo } from '../../ui/components/BoxInfo';

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <main
      className="min-w-800 mb-3 h-screen xs:h-max 2xl:mb-20 xl:h-max"
      id="contact">
      <section className="mt-24 h-full min-w-280 text-center md:mx-2">
        <h1 className="font-Raleway text-5xl 2xl:mb-20">Contact</h1>
        <div className="mx-2 my-5 2xl:mt-10 flex flex-col place-items-center xl:h-full">
          <div className="grid grid-cols-1 mb-4 md:mb-0 gap-6 xs:grid-cols-[repeat(1,250px)] 375:grid-cols-[repeat(1,300px)] sm:grid-cols-[repeat(1,330px)] md:grid-cols-[repeat(2,330px)] md:gap-20 xl:grid-cols-[repeat(2,400px)] 2xl:grid-cols-[repeat(2,minmax(470px,_300px))] 2xl:gap-32">
            {/* box 1 */}
            <div className="col-span-1 flex flex-col place-content-center place-items-center">
              <BoxInfo materialSymbols="call" info="+549 2612589352" />
              <BoxInfo materialSymbols="mail" info="leonardo38361@gmail.com" />
              <BoxInfo
                materialSymbols="location_on"
                info="Argentina, Mendoza"
              />
            </div>
            {/* box 2 */}
            <div className="col-span-1">
              <form className="grid gap-y-5 xl:gap-y-2 2xl:gap-y-5" ref={form} onSubmit={sendEmail}>
                <Input label="Name" type="text" name="name" />
                <Input label="Email" type="email" name="email" />
                <div className="flex flex-col">
                  <label className="font-Kanit xl:mb-2 2xl:mb-5 xl:text-lg">Message</label>
                  <textarea
                    className="resize-none 2xl:h-64 rounded-sm border-2 border-solid border-neutral-200 p-2 text-neutral-950 outline-none dark:border-none dark:bg-neutral-800 dark:text-white"
                    rows="6"
                    name="message"
                  />
                </div>
                <input
                  className="mt-2 h-8 w-28 cursor-pointer xl:text-lg xl:w-36 xl:h-10 transition-colors duration-500 hover:border-none border-cyan-400 text-cyan-400 hover:text-white hover:bg-green-500 rounded-md border-2 font-victorMonoBold"
                  type="submit"
                  value="Send"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
