import { NavLink } from "react-router-dom";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function Example() {
  return (
    <>
      <section className="h-screen w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Never forget a class or assignment again.
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Unlock your potential and manage your classes, tasks and exams with GeniusGrid- the world's #1 student planner and school organizer app.
              </p>
            </div>
            <div className="space-x-4">
              <NavLink to="/">
                <button className="h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
                  Get Started
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Features That Matter
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover the powerful features that make our product stand out.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
            <div className="flex flex-col items-start gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:bg-gray-50 ">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 ">
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Scheduling</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our platform is optimized for lightning-fast performance,
                ensuring your users get the best experience.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:bg-gray-50 ">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 ">
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Exams</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Tailor our platform to your unique needs with our extensive
                customization options.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:bg-gray-50 ">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 ">
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Reminders</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Trust our platform to keep your data safe and your application
                running smoothly.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:bg-gray-50 ">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 ">
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Homework</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our intuitive design and user-friendly interface make it a joy
                to use our platform.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:bg-gray-50 ">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 ">
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Classes</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our platform grows with your business, allowing you to scale up
                or down as needed.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:bg-gray-50 ">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 ">
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Coming soon!</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our knowledgeable support team is always here to help you get
                the most out of our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-64">
        <Carousel responsive={responsive}>
          <div className="m-4 flex flex-col items-start gap-4 rounded-lg bg-gray-200 p-6 shadow-sm transition-all hover:bg-gray-50 ">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 ">
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">School planner and organizer</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Our platform is optimized for lightning-fast performance, ensuring
              your users get the best experience.
            </p>
          </div>
          <div className="m-4 flex flex-col items-start gap-4 rounded-lg bg-gray-700 p-6 shadow-sm transition-all hover:bg-gray-900 ">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 ">
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
              </svg>
            </div>
            <h3 className="text-white dark:text-white text-lg font-semibold">
              Tasks
            </h3>
            <p className="text-sm text-white dark:text-white">
              Our platform is optimized for lightning-fast performance, ensuring
              your users get the best experience.
            </p>
          </div>
          <div className="m-4 flex flex-col items-start gap-4 rounded-lg bg-gray-200 p-6 shadow-sm transition-all hover:bg-gray-50 ">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 ">
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Homework planner and task tracker</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Our platform is optimized for lightning-fast performance, ensuring
              your users get the best experience.
            </p>
          </div>
          <div className="m-4 flex flex-col items-start gap-4 rounded-lg bg-gray-200 p-6 shadow-sm transition-all hover:bg-gray-50 ">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 ">
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Reminders</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Our platform is optimized for lightning-fast performance, ensuring
              your users get the best experience.
            </p>
          </div>
        </Carousel>
      </div>
      </section>
    </>
  );
}
