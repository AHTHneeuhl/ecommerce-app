import { assets } from "../assets/assets";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-40 text-sm">
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            sunt aperiam, qui iure dolor, recusandae, porro laudantium
            temporibus minus a ullam sequi rem error? Cupiditate!
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 uppercase">Company</p>
          <ul className="flex flex-col gap-1text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 uppercase">Get In Touch</p>
          <ul className="flex flex-col gap-1text-gray-600">
            <li>+1-212-456-987</li>
            <li>Contact@forever.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ forever.com - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
