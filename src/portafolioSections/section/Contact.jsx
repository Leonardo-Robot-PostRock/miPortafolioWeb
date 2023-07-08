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
    <main className="min-w-800 h-screen" id="contact">
      <section className="mx-2 mt-24 min-w-280 text-center">
        <h1 className="font-Raleway text-5xl">Contact</h1>
        <div className="mt-10 flex flex-col place-items-center">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[repeat(2,350px)] md:gap-20">
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
              <form className="grid gap-y-5" ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col gap-2">
                  <label className="font-Kanit">Name</label>
                  <input
                    className="h-10 p-1 text-neutral-950 outline-none dark:bg-neutral-800 dark:text-white"
                    type="text"
                    name="user_name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-Kanit">Email</label>
                  <input
                    className="h-10 p-1 text-neutral-950 outline-none dark:bg-neutral-800 dark:text-white"
                    type="email"
                    name="user_email"
                  />
                </div>
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
