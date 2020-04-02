<template>
  <div class="font-firago hyphens-manual">
    <div class="p-6 mx-auto page max-w-2xl print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 bg-white">
      
      <!-- Based on template from https://github.com/WebPraktikos/universal-resume -->

      <!-- Name -->
      <header class="flex items-center mb-8 md:mb-11">
        <router-link to="/" class="initials-container mr-5 text-base leading-none text-white bg-gray-700 font-medium print:bg-black px-3 py-2.5">
          <div class="initial text-center pb-0.8">R</div>
          <div class="text-center initial">N</div>
        </router-link>
        <div class="flex-col">
        <h1 class="text-2xl font-semibold text-gray-750">
          Reuben Ninan
        </h1>
        <router-link class="text-lg font-semibold text-gray-600" to="/">Go back</router-link>
        </div>
      </header>
<!-- Column -->
      <div class="md:col-count-2 print:col-count-2 col-gap-md md:h-letter-col print:h-letter-col col-fill-auto">

        <!-- Use mt-3 class when the element isn’t the first one in the column -->
        <section>

          <!-- To keep in the same column -->
          <div class="break-inside-avoid">

            <h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
              ABOUT ME
            </h2>

            <section class="mb-4 break-inside-avoid">
              <header>
              </header>
              <p class="mt-2 text-md text-gray-700 leading-normal">
                Motivated and dedicated Software Engineering student looking to leverage my technical acumen
                and passion for engineering with my leadership and coaching skills.
              </p>
            </section>

          </div>



        </section>

        <section class="mt-8">

          <!-- To keep in the same column -->
          <div class="break-inside-avoid">
            <h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
              EXPERIENCE
            </h2>
          </div>

          <section class="mb-4 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                Royal Bank of Canada (RBC)
              </h3>
              <p class="leading-normal text-md text-gray-650">
                Apr 2019 – Aug 2019 | Data Scientist (Intern)
              </p>
            </header>
            
            <ul class="">

              <li class="mt-2 text-md text-gray-700 leading-normal">
                <span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Automated data loading and cleaning processes
              </li>

              <li class="mt-2 text-md text-gray-700 leading-normal">
                <span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                    Extracted <b>500gb</b> of unstructured data from legacy files,<br>
                    The data was cleansed and enriched with existing data sources for the purpose of
                    validation and governance
              </li>
              
              <li class="mt-2 text-md text-gray-700 leading-normal">
                <span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                    Presented a dashboard displaying visual, statistical and 
                    geographic insights on the newly extracted dataset to Senior Management
              </li>

              <li class="mt-2 text-md text-gray-700 leading-normal">
                <span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                    Worked under Agile/SCRUM Methodologies and utilized tools such as JIRA, GitHub and Confluence
              </li>

              <ul class="my-2 mb-6 flex flex-wrap text-md leading-relaxed">
                
                <li class="px-3 mr-1.5 mt-1.5 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Java
                </li>
                <li class="px-3 mr-1.5 mt-1.5 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Python
                </li>
                <li class="px-3 mr-1.5 mt-1.5 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  SQL
                </li>
                <li class="px-3 mr-1.5 mt-1.5 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  R
                </li>
                <li class="px-3 mr-1.5 mt-1.5 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Bash
                </li>
                <li class="px-3 mr-1.5 mt-1.5 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Tableau
                </li>                
              </ul>
            </ul>
          </section>

          <section class="mb-4 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                STEM1 (www.stem1.ca)
              </h3>
              <p class="leading-normal text-md text-gray-650">
                Jun 2018 – Aug 2018 | Computer Science Instructor
              </p>
            </header>
            <ul class="">
              <li class="mt-2 text-md text-gray-700 leading-normal">
                <span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Taught computer programs, algorithms and computer design to students (K-12)
              </li>
              <li class="mt-2 text-md text-gray-700 leading-normal">
                <span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Created and implemented a beginner’s curriculum focused on robotics
              </li>
            </ul>
          </section>

        </section>

        <section class="mt-8">

          <!-- To keep in the same column -->
          <div class="break-inside-avoid">

            <h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
              EDUCATION
            </h2>

            <section class="mb-4 break-inside-avoid">
              <header>
                <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                  York University
                </h3>
                <p class="leading-normal text-md text-gray-650">
                  2018 – Current | Bachelor of Engineering
                </p>
              </header>
            </section>

          </div>

          <section class="mb-4 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                Chinguacousy Secondary School
              </h3>
              <p class="leading-normal text-md text-gray-650">
                2014 – 2018 | Sci-Tech Regional Program
              </p>
            </header>
          </section>


<div class="break-inside-avoid">

            <h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
              LEADERSHIP
            </h2>

            <section class="mb-4 break-inside-avoid">
              <header>
                <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                  Codespot - Computer Science Instructor
                </h3>
                <p class="leading-normal text-md text-gray-650">
                  2017 – 2018 | Chinguacousy Secondary School
                </p>
              </header>
            </section>

          </div>

          <section class="mb-4 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                <a href="http://www.wolfhacks.ca/" class="group">
                  WolfHacks Hackathon - Financial Head
                  <span
                    class="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">↗</span>
                </a>
                
              </h3>
              <p class="leading-normal text-md text-gray-650">
                2017 – 2018 | Peel District School Board
              </p>
            </header>
          </section>

        </section>


        <section class="mt-8">

          <!-- To keep in the same column -->
          <div class="break-inside-avoid">

            <h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
              PROJECTS
            </h2>

            <section class="mb-4 break-inside-avoid">
              <header>
                <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                  <a href="https://github.com/WebPraktikos" class="group">
                    Universal Resume
                    <span
                      class="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">↗</span>
                  </a>
                </h3>
                <p class="leading-normal text-md text-gray-650">
                  Since 2019 | HTML CSS
                </p>
              </header>
              <p class="mt-2 text-md text-gray-700 leading-normal">
                Good design is as little design as possible. Less, but better — because it concentrates on the essential
                aspects, and the pro&shy;ducts are not burdened with non-essentials.
              </p>
            </section>

          </div>

          <section class="mb-4 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                <a href="https://github.com/WebPraktikos" class="group">
                  fade-on-scroll
                  <span
                    class="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">↗</span>
                </a>
              </h3>
              <p class="leading-normal text-md text-gray-650">
                2017 | JavaScript
              </p>
            </header>
            <p class="mt-2 text-md text-gray-700 leading-normal">
              Good design is long-lasting. It avoids being fashionable and therefore never appears antiquated.
            </p>
            <p class="mt-2 text-md text-gray-700 leading-normal">
              Good design is honest. It does not make a product more innovative, powerful or valuable than it really is.
            </p>
          </section>

          <section class="mb-4 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                Third One
              </h3>
              <p class="leading-normal text-md text-gray-650">
                2013 – 2014 | Vue
              </p>
            </header>
            <p class="mt-2 text-md text-gray-700 leading-normal">
              Good design is innovative. Technological development is always offering new opportunities for innovative design.
            </p>
          </section>

          <section class="mb-4 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                Fantastic Project
              </h3>
              <p class="leading-normal text-md text-gray-650">
                2012 | JavaScript
              </p>
            </header>
            <p class="mt-2 text-md text-gray-700 leading-normal">
              Strip steak tail capicola alcatra ground round tenderloin ar. Venison tri-tip porchetta, brisket
              tenderloin pig beef.
            </p>
          </section>

        </section>

        <section class="mt-8">

          <!-- To keep in the same column -->
          <div class="break-inside-avoid">

            <h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
              SKILLS
            </h2>

            <section class="mb-4 break-inside-avoid">
              <header>
                <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                  JavaScript
                </h3>
                <p class="leading-normal text-md text-gray-650">
                  Middle Level
                </p>
              </header>
              <p class="mt-2 text-md text-gray-700 leading-normal">
                Good parts: pure function, higher-order functions, factory functions, composition. Bad parts:
                inheritance, this, new.
              </p>
              <ul class="my-2 mb-6 flex flex-wrap text-md leading-relaxed">
                <li class="px-3 mr-1.5 mt-1.5 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  ES6
                </li>
                <li class="px-3 mr-1.5 mt-1.5 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Vue
                </li>
                <li class="px-3 mr-1.5 mt-1.5 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Functional Programming
                </li>
                <li class="px-3 mr-1.5 mt-1.5 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Node
                </li>
              </ul>
            </section>

          </div>

          <section class="mb-4 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                Other
              </h3>
            </header>
            <ul class="py-1.5 mb-6 flex flex-wrap text-md leading-relaxed">
              <li class="px-3 mr-1.5 mt-1.5 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                CSS
              </li>
              <li class="px-3 mr-1.5 mt-1.5 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                Rust
              </li>
              <li class="px-3 mr-1.5 mt-1.5 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                Git
              </li>
              <li class="px-3 mr-1.5 mt-1.5 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                Go
              </li>
              <li class="px-3 mr-1.5 mt-1.5 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                Linux Server
              </li>
              <li class="px-3 mr-1.5 mt-1.5 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                UI Design
              </li>
              <li class="px-3 mr-1.5 mt-1.5 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                Photoshop
              </li>
              <li class="px-3 mr-1.5 mt-1.5 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                Illustrator
              </li>
              <li class="px-3 mr-1.5 mt-1.5 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                Figma
              </li>
              <li class="px-3 mr-1.5 mt-1.5 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                Typography
              </li>
            </ul>
          </section>

        </section>

        <section class="mt-8">

          <!-- To keep in the same column -->
          <div class="break-inside-avoid">

            <h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
              CONTACT
            </h2>

            <section class="mb-4 break-inside-avoid">
              <ul class="list-inside pr-7">
                <li class="mt-1.5 leading-normal text-gray-700 text-md">
                  <a href="//reubenninan.tech" class="group">
                      reubenninan.tech
                    <span
                      class="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">↗</span>
                  </a>
                </li>
                <li class="mt-1.5 leading-normal text-gray-700 text-md">
                  <a href="//twitter.com/NinanReuben" class="group">
                    twitter.com/NinanReuben
                    <span
                      class="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">↗</span>
                  </a>
                </li>
                <li class="mt-1.5 leading-normal text-gray-700 text-md">
                  Toronto, Ontario
                </li>
                <li class="mt-1.5 leading-normal text-gray-700 text-md">
                  reubenninan@outlook.com
                </li>
              </ul>
            </section>

          </div>

        </section>

      </div>
      <!-- end Column -->



    </div>
  </div>
</template>
