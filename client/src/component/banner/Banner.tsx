import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const Banner: React.FC = () => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 8,
      autoplay: {
        delay: 8000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 1,
        },
      },
    });
  }, []);

  return (
    <div
      className="bg-no-repeat bg-cover bg-center relative"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1606938704652-3e588c2c9fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80)',
      }}
    >
      <div className="absolute bg-gradient-to-r from-gray-900 to-gray-900 opacity-75 inset-0 z-0"></div>
      <div className="min-h-screen flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center z-10">
          <div className="max-w-lg text-center sm:text-left">
            <h2 className="text-4xl font-bold text-gray-100 tracking-tight">
              A smile <br className="hidden sm:block lg:hidden" /> is an inexpensive way to change your looks
            </h2>
            <p className="mt-4 text-gray-300">Goals are just dreams with deadlines</p>
            <div className="flex flex-row items-center space-x-3 mt-5">
              <a
                href="https://www.behance.net/ajeeshmon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-blue-600 hover:drop-shadow-lg cursor-pointer transition ease-in duration-300"
              >
                <svg className="w-4 fill-gray-100" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.072 9.301s1.892-.147 1.892-2.459c0-2.315-1.548-3.441-3.51-3.441H0v12.926h6.454s3.941.129 3.941-3.816c-.001-.001.171-3.21-2.323-3.21zM2.844 5.697h3.61s.878 0 .878 1.344c0 1.346-.516 1.541-1.102 1.541H2.844V5.697zm3.427 8.332H2.844v-3.455h3.61s1.308-.018 1.308 1.775c0 1.512-.977 1.669-1.491 1.68zm9.378-7.341c-4.771 0-4.767 4.967-4.767 4.967s-.326 4.941 4.767 4.941c0 0 4.243.254 4.243-3.437H17.71s.072 1.391-1.988 1.391c0 0-2.184.152-2.184-2.25h6.423c.001-.001.709-5.612-4.312-5.612zm1.941 3.886h-4.074s.266-1.992 2.182-1.992 1.892 1.992 1.892 1.992zm.507-6.414H12.98v1.594h5.117V4.16z" />
                </svg>
              </a>
              <a
                href="https://codepen.io/uidesignhub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-gray-900 hover:drop-shadow-lg cursor-pointer transition ease-in duration-300"
              >
                <svg className="h-5 fill-gray-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 15.047a.846.846 0 0 1-.008.112l-.006.037-.016.072c-.003.015-.008.028-.013.042l-.022.063-.02.042c-.008.02-.018.038-.028.057l-.025.04a.769.769 0 0 1-.108.135l-.035.034a.812.812 0 0 1-.049.04l-.038.03c-.005.003-.01.008-.015.01l-9.14 6.095a.858.858 0 0 1-.954 0l-9.14-6.094-.014-.01a.807.807 0 0 1-.088-.071c-.012-.01-.023-.022-.034-.034-.015-.015-.03-.03-.043-.046a.707.707 0 0 1-.066-.09 1.038 1.038 0 0 1-.054-.096l-.019-.042a.868.868 0 0 1-.022-.063c-.005-.014-.01-.027-.013-.042-.007-.023-.01-.048-.015-.072l-.007-.037A.847.847 0 0 1 2 15.047V8.953c0-.038.003-.075.008-.112l.007-.037c.004-.024.008-.049.015-.072a.774.774 0 0 1 .145-.295.978.978 0 0 1 .029-.038l.043-.046.034-.034a.834.834 0 0 1 .088-.07c.005-.003.009-.008.014-.01l9.14-6.095a.86.86 0 0 1 .954 0l9.14 6.094c.005.003.01.008.015.01l.038.03a.839.839 0 0 1 .05.041l.034.034a.735.735 0 0 1 .108.136l.025.04.029.056.019.042.022.063c.005.014.01.027.013.042.007.023.011.048.016.072l.006.037a.834.834 0 0 1 .008.112v6.094ZM3.719 10.562v2.876L5.869 12l-2.15-1.438Zm7.422-2.088V4.465l-6.734 4.49 3.008 2.011 3.726-2.492Zm8.452.48L12.86 4.465v4.009l3.726 2.492 3.007-2.012ZM4.407 15.046l6.734 4.489v-4.009l-3.726-2.492-3.008 2.012Zm8.453.48v4.009l6.733-4.49-3.007-2.01-3.726 2.491ZM12 9.966 8.96 12 12 14.033 15.04 12 12 9.967Zm8.281 3.472v-2.876L18.131 12l2.15 1.438Z" fill="" fillRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://twitter.com/ajeemon?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 items-center justify-center inline-flex rounded-2xl font-bold text-lg text-white bg-blue-400 hover:drop-shadow-lg cursor-pointer transition ease-in duration-300"
              >
                <img
                  className="w-3"
                  src="https://ridenest.vercel.app/assets/Bi-1-BE2a-gpc.png"
                  alt="Twitter"
                />
              </a>
              <a
                href="https://in.linkedin.com/in/ajeeshmon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 items-center justify-center inline-flex rounded-2xl font-bold text-lg text-white bg-blue-500 hover:drop-shadow-lg cursor-pointer transition ease-in duration-300"
              >
                <img
                  src="https://ridenest.vercel.app/assets/Bi-1-BE2a-gpc.png"
                  className="w-3"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>

          <div className="mx-0 max-w-xl flex rounded-2xl bg-indigo-700">
            <div className="swiper-container flex-col flex self-center">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <blockquote className="text-left">
                    <div className="relative">
                      <div className="relative">
                        <img
                          src="https://ridenest.vercel.app/assets/Bi-1-BE2a-gpc.png"
                          alt="aji"
                          className="object-cover w-full h-60 mx-auto rounded-t-2xl"
                        />
                        <div className="rounded-t-2xl absolute bg-gradient-to-t from-gray-800 opacity-75 inset-0 z-0"></div>
                      </div>
                    </div>

                    <div className="relative m-5 p-5">
                      <svg className="absolute left-0 w-6 fill-indigo-500" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
                      </svg>
                      <p className="text-gray-100 text-xl px-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda officiis sit amet itaque eveniet accusantium corporis tempora.
                      </p>
                      <svg className="absolute right-0 w-6 fill-indigo-500" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                      </svg>
                      <div className="text-sm mt-5 mx-5">
                        <p className="font-medium text-white">Ajimon</p>
                        <p className="mt-1 text-gray-300">CEO Of Marketing</p>
                      </div>
                    </div>
                  </blockquote>
                </div>

                <div className="swiper-slide">
                  <blockquote className="text-left">
                    <div className="">
                      <div className="relative">
                        <img
                          src="https://scontent.fccj2-2.fna.fbcdn.net/v/t39.30808-6/293672501_5357602044279252_6369958249008578770_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bdzc8jxe0kYAX83O5hJ&_nc_ht=scontent.fccj2-2.fna&oh=00_AT8kbjMW_DqEcrXGcCTesn5pdVLgQReb2NlaF3OduMzl1Q&oe=632F3EE9"
                          alt="aji"
                          className="object-cover w-full mx-auto rounded-t-2xl h-60"
                        />
                        <div className="rounded-t-2xl absolute bg-gradient-to-t from-gray-800 opacity-75 inset-0 z-0"></div>
                      </div>
                    </div>

                    <div className="relative m-5 p-5">
                      <svg className="absolute left-0 w-6 fill-indigo-500" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
                      </svg>
                      <p className="text-gray-100 text-xl px-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda officiis sit amet itaque eveniet accusantium corporis tempora.
                      </p>
                      <svg className="absolute right-0 w-6 fill-indigo-500" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                      </svg>
                      <div className="text-sm mt-5 mx-5">
                        <p className="font-medium text-white">John Doe</p>
                        <p className="mt-1 text-gray-300">Marketing Manager</p>
                      </div>
                    </div>
                  </blockquote>
                </div>

                <div className="swiper-slide">
                  <blockquote className="text-left">
                    <div className="">
                      <div className="relative">
                        <img
                          src="https://ridenest.vercel.app/assets/Bi-1-BE2a-gpc.png"
                          alt="aji"
                          className="object-cover w-full mx-auto rounded-t-2xl h-60"
                        />
                        <div className="rounded-t-2xl absolute bg-gradient-to-t from-gray-800 opacity-75 inset-0 z-0"></div>
                      </div>
                    </div>

                    <div className="relative m-5 p-5">
                      <svg className="absolute left-0 w-6 fill-indigo-500" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
                      </svg>
                      <p className="text-gray-100 text-xl px-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda officiis sit amet itaque eveniet accusantium corporis tempora.
                      </p>
                      <svg className="absolute right-0 w-6 fill-indigo-500" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                      </svg>
                      <div className="text-sm mt-5 mx-5">
                        <p className="font-medium text-white">Ajimon</p>
                        <p className="mt-1 text-gray-300">CEO Of Marketing</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>

              <div className="mt-12 swiper-pagination hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;