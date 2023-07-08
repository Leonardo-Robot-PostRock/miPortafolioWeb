import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main className="h-screen min-w-280 " id="contact">
      <section className="mt-24 text-center">
        <h1 className="font-Raleway text-5xl">Contact</h1>
        <div className="flex flex-col place-items-center">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[repeat(2,300px)] md:gap-20">
            {/* box 1 */}
            <div className="col-span-1">
              <div>
                <span className="material-symbols-outlined">call</span>
                <p>+549 2612589352</p>
              </div>
              <div>
                <span className="material-symbols-outlined">mail</span>
                <p>leonardo38361@gmail.com</p>
              </div>
              <div>
                <span className="material-symbols-outlined">location_on</span>
                <p>Argentina, Mendoza</p>
              </div>
            </div>
            {/* box 2 */}
            <div className="col-span-1">
              <form className="flex flex-col text-neutral-950" ref={form} onSubmit={sendEmail}>
                <div className="grid grid-rows-2">
                  <label className="row-span-1">Name</label>
                  <input className="row-span-1" type="text" name="user_name" />
                </div>
                <div className="grid grid-rows-2">
                  <label className="row-span-1">Email</label>
                  <input
                    className="row-span-1"
                    type="email"
                    name="user_email"
                  />
                </div>
                <div className="grid grid-rows-2">
                  <label className="row-span-1">Message</label>
                  <textarea className="row-span-1" name="message" />
                </div>
                <input className="cursor-pointer" type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
