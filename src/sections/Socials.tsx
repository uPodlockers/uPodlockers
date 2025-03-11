

import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
export const SocialLinks = () => {
  return (
    <>
      {/* Socials Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 dark:text-black">
            Reach us out
          </h2>
          <div className="flex justify-center space-x-3">
            {/* <a
          href="https://www.facebook.com"
          className="text-3xl text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
        >
          <SocialX className="cursor-pointer" />
        </a> */}
            <a
              href="https://www.instagram.com"
              className="text-3xl text-gray-600 hover:text-pink-900 dark:text-gray-400 dark:hover:text-pink-400 transition-colors duration-300"
            >
              <SocialInsta className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-3xl text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <SocialLinkedIn className="cursor-pointer" />
            </a>
            {/* <a
          href="https://www.youtube.com"
          className="text-3xl text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
        >
          <SocialYoutube className="cursor-pointer" />
        </a> */}
          </div>
        </div>
      </section>
    </>
  );
};
