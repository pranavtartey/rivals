import Image from "next/image";
import MailLogo from "@/assets/mail-signup-logo.png";
import { IconPhoneRinging, IconMail } from "@tabler/icons-react";
import { FC } from "react";

const Footer: FC = () => {
  const email = "sachin_meghani@rivals.co.in";
  const subject = "Impressive Lounge";
  const body = `
    Dear Rivals Team,

I hope this message finds you well!

I would like to:

Make an inquiry regarding your gaming services.
Provide feedback about my recent experience.
Book a session.
Please let me know how I can proceed. Looking forward to hearing from you!

Thank you,
Website visitor
  `;

  return (
    <footer className="bg-black text-neutral-300">
      <div className="container py-[72px]">
        {/* <p className="text-center text-lg text-neutral-400">
          That&apos;s it folks!!
        </p> */}
        <div className="">
          <div className="flex items-center justify-center gap-6">
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(body)}`}
            >
              <IconMail />
            </a>
            <a href="tel:9889426501">
              <IconPhoneRinging />
            </a>
          </div>
          <p className="text-center text-xl my-4">Address</p>
          <p className="text-center text-sm tracking-wide text-neutral-400 max-w-lg mx-auto">
            Ground Floor, Radha Tower, Allahabad Bank Chauraha, below Grand Slam
            Gym, next to Patanjli Store, Civil Lines, Jhansi, Uttar Pradesh
            284001
          </p>
          <p className="text-center text-xl my-4">Phone No.</p>
          <div className="w-fit mx-auto">
            <a href="tel:9889426501">+91 9889426501</a>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center py-4">
        Made with ❤️ by&nbsp;
        <a target="_blank" href="https://www.pranavtartey.com/" className="underline underline-offset-2">Pranav Tartey</a>
      </p>
    </footer>
  );
};

export default Footer;
