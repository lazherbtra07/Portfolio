import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export const Contact = () => {
  return (
    <section id="Contact" className=" container ">
      <h1 className="text-center text-4xl font-bold text-white mt-4 mb-8">
        Contact Us
      </h1>
      <div className="grid md:grid-cols-2  md:my-12 pb-10 gap-4">
        <div>
          <h5 className=" text-xl font-bold text-white my-2">let's Contect</h5>
          <p className="text-[#adb7be] mb-4 max-w-md">
            I'm currently looking for new opportunities, my inbox is always
            open, whether you have a question or jest you want to say hi, I'll
            try my best to get back to you.
          </p>
          <div className=" socials flex flex-row gap-2">
            <Link href="https://github.com/lazherbtra07">
              <FaGithub className=" w-20 h-20" />
            </Link>
            <Link href="https://linkedin.com/in/lazherbtr">
              <FaLinkedin className=" w-20 h-20" />
            </Link>
          </div>
        </div>
        <div>
          <form className=" flex flex-col gap-4">
            <div className=" ">
              <label htmlFor="email" className="text-white">
                Your email
              </label>
              <input
                className=" bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2"
                type="email"
                id="email"
                required
                placeholder="jacob@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-white">
                Subject
              </label>
              <input
                className=" bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2"
                type="text "
                id="subject"
                required
                placeholder="Just saying hi"
              />
            </div>
            <div>
              <label
                className=" text-white block text-sm mb-2 font-medium"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Let's talk about... "
                className=" bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2"
              />
            </div>
            <button
              type="submit"
              className=" bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-5 rounded-lg w-full cursor-pointer"
            >
              Send Massage
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
