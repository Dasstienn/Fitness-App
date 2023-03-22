import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            SPARTA provides specialized classes focused
            on combat training. The
            classes are high-intensity and designed to improve overall fitness
            and self-defense skills. Joining the SPARTA community offers an
            opportunity to reach your fitness goals and unleash your potential.
          </p>
          <p>© SPARTA All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Follow us on Social Media</p>
          <p className="my-5">Share with friends</p>
          <p>Leave your feedback</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">384 Spartan Ave, CA 92667</p>
          <p>(123) 456-7891</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
