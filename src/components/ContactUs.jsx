import { contactusbg, phone } from "../assets";
import { SendIcon } from "../components/icons";
const ContactUs = () => {
  return (
    <section className="px-[5%]" id="contact-us">
      <div className="flex items-center justify-center gap-2">
        <h3 className="md:text-3xl text-2xl font-bold">
          Contact <span className="text-primary">Me</span>
        </h3>
        <figure className="w-[50px] md:w-[70px] animate-bounce">
          <img src={phone} alt="Skills" />
        </figure>
      </div>

      <div className="mt-5 flex flex-col-reverse md:flex-row-reverse gap-4 justify-around items-center">
        <form className="flex flex-col gap-6 w-[100%] md:w-[40%]">
          <div className="flex flex-col gap-2">
            <label className="text-secondaryBlack" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="p-2 rounded-md border-solid border-[1px] border-secondaryBlack"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-secondaryBlack" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="p-2 rounded-md border-solid border-[1px] border-secondaryBlack"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-secondaryBlack" htmlFor="num">
              Phone Number
            </label>
            <input
              type="number"
              name="num"
              className="p-2 rounded-md border-solid border-[1px] border-secondaryBlack"
              id="num"
              placeholder="Enter your Phone"
              minLength={10}
              maxLength={10}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-secondaryBlack" htmlFor="dis">
              Description
            </label>
            <textarea
              name="dis"
              id="dis"
              className="border-[1px] border-secondaryBlack rounded-md resize-none p-2"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary px-4 py-2 rounded-md text-white flex text-center justify-center gap-3  md:w-fit"
          >
            Submit{" "}
            <span className="block scale-[0.8]">
              <SendIcon />
            </span>
          </button>
        </form>
        <figure className="w-[60%] md:w-[40%]">
          <img src={contactusbg} alt="varun salat" />
        </figure>
      </div>
    </section>
  );
};

export default ContactUs;
