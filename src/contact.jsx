

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: ""
  });

  const [toast, setToast] = useState(""); 
  const [toastType, setToastType] = useState(""); 
  const form = useRef();

  // Handle input change
  function handleClick(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // Handle form submit
  function handleSubmit(e) {
    e.preventDefault();

    showToast("Sending message...", "loading");

    emailjs.sendForm(
  "service_y6lcxet",     // your Service ID
  "template_41qp13z",    // your Template ID
  form.current,
  "Vf5C8QzFSc588WqTU"   // your Public Key
)
 

      .then(() => {
        showToast("Message sent successfully!", "success");

        // Reset state
        setFormData({
          user_name: "",
          user_email: "",
          subject: "",
          message: ""
        });
      })
      .catch(() => {
        showToast("Failed to send message. Please try again.", "error");
      });
  }

  // Toast function
  function showToast(message, type) {
    setToast(message);
    setToastType(type);

    setTimeout(() => {
      setToast("");
    }, 3000);
  }

  return (
    <div className="relative md:px-8 lg:px-8 max-w-full">
      {toast && (
        <div
          className={`fixed top-5 right-5 px-4 py-3 rounded shadow-lg text-white transition-all duration-300
          ${toastType === "success" ? "bg-green-600" : ""}
          ${toastType === "error" ? "bg-red-600" : ""}
          ${toastType === "loading" ? "bg-blue-600" : ""}`}
        >
          {toast}
        </div>
      )}

      <div className="p-5 mb-5">
        {/* ---------- HEADERS OMITTED FOR BREVITY ---------- */}
        <div className="mb-5 ">
      <h2 className="text-white text-2xl relative inline-block  font-bold ">Contact Me </h2>
        <span className="after:block  after:content-['']
                after:w-20  after:h-0.5 after:bg-orange-600 text-center after:mt-1"></span>
                <span className="after:block after:content-['']
                after:w-12  after:h-0.5 after:bg-orange-600 after:mt-1"></span>
                <span className="after:block  after:content-['']
                after:w-6 after:h-0.5  after:bg-orange-600 after:mt-1"></span>
               
    </div>
    
        <div className="flex flex-col items-center justify-center" >
             <div className="flex flex-col justify-center items-center">
             <p className="text-orange-600 font-bold text-xl md:tracking-wider lg:tracking-wider">Have You Any Questions?</p>
            <p className="text-white font-bold text-sm pt-2">I'M AT YOUR SERVICE</p>
             </div>
            <div className="md:grid md:pb-5 md:pt-5 md:grid-cols-2 md:gap-50 lg:grid lg:pb-5
             lg:pt-5 lg:grid-cols-2 lg:gap-50 sm:grid sm:pb-5 sm:pt-5 sm:grid-cols-2 sm:gap-20">  
            <div className="flex flex-col items-center justify-center ">
            <div className="hover:bg-orange-600 hover:rounded-full p-3 mb-0 
            transition-all duration-300">
            <IoIosCall className="text-orange-600
         hover:text-white text-2xl " />
            </div>
                
                <p className="text-md font-bold">Call us on</p>
                <p className="text-gray-200">+234 903 488 1350</p>
            </div>
            <div className="flex flex-col items-center justify-center " >
            <div className="hover:bg-orange-600 hover:rounded-full p-3 mb-0 
            transition-all duration-300">
             <MdEmail className="text-orange-600
         hover:text-white text-2xl " />
            </div>
               
                <p className="text-md font-bold">Email</p>
                <p className="text-gray-200  ">benedicta45@gmail.com</p>
            </div>
        </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-orange-600 font-bold text-xl text-center mt-6">
            SEND ME AN EMAIL
          </h2>
          <p className="text-white font-bold text-sm text-center mb-5 mt-2">
            I'M VERY RESPONSIVE TO MESSAGE
          </p>

          <form ref={form} onSubmit={handleSubmit} className="gap-5 flex flex-col">
            <div className="gap-5 flex flex-col md:flex md:flex-2 md:flex-row 
            lg:flex lg:flex-2 lg:flex-row sm:flex sm:flex-2 sm:flex-row" >
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleClick}
              placeholder="Name"
              className="bg-zinc-800 pl-5 w-full rounded-2xl p-1.5 outline-0 border-2 border-zinc-700"
              required
            />

            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleClick}
              placeholder="Email"
              className="w-full outline-0 border-2 border-zinc-700 bg-zinc-800 pl-5 rounded-2xl p-1.5"
              required
            />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleClick}
              placeholder="Subject"
              className="w-full outline-0 border-2 border-zinc-700 bg-zinc-800 pl-5 rounded-2xl p-1.5"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleClick}
              placeholder="Message"
              className="bg-zinc-800 h-30 w-full rounded-2xl p-3 outline-0 border-2 border-zinc-700"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-orange-600 text-white font-bold rounded-3xl w-50 p-2 hover:bg-white hover:text-orange-600 transition-all duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
