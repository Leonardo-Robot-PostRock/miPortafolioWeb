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
    <main className="min-w-800 h-screen" id="contact">
      <section className="mx-2 mt-24 min-w-280 text-center">
        <h1 className="font-Raleway text-5xl">Contact</h1>
        <div className="mt-10 flex flex-col place-items-center">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[repeat(2,350px)] md:gap-20">
            {/* box 1 */}
            <div className="col-span-1">
              <BoxInfo materialSymbols="call" info="+549 2612589352" />
              <BoxInfo materialSymbols="mail" info="leonardo38361@gmail.com" />
              <BoxInfo
                materialSymbols="location_on"
                info="Argentina, Mendoza"
              />
            </div>
            {/* box 2 */}
            <div className="col-span-1">
              <form className="grid gap-y-5" ref={form} onSubmit={sendEmail}>
                <Input label="Name" type="text" name="name" />
                <Input label="Email" type="email" name="email" />
                <div className="flex flex-col">
                  <label className="font-Kanit">Message</label>
                  <textarea
                    className="resize-none p-1 text-neutral-950 outline-none dark:bg-neutral-800 dark:text-white"
                    rows="7"
                    name="message"
                  />
                </div>
                <input
                  className="mt-2 h-8 w-28 cursor-pointer rounded-md border-2 font-victorMonoBold"
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
