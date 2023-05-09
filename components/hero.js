import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import Video from './video';

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Turn your content into <span className='text-blue-600'>learning questions</span>
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Questable analyzes your content and auto-generates questions to improve your learning effectiveness.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://app.questable.ai/signup"
                target="_blank"
                rel="noopener"
                className="w-full px-8 py-4 text-lg font-medium text-center text-white bg-blue-600 rounded-md lg:max-w-fit">
                Get Started for Free
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <video autoPlay controls loop className='rounded-md border-2 w-96'>
            <source src="video/questable_intro_720.mp4" type="video/mp4"></source>
          </video>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col items-center">
          <div className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Help your learning with custom questions
          </div>

          <div className="w-full flex justify-around items-start gap-5 mt-10">
            <div className="flex flex-col justify-center items-center text-center file:text-gray-500 dark:text-gray-400">
              <div className='w-[70px] bg-gray-300 p-3 mb-5 rounded-full'>
                <img src="img/target_learner.png"/>
              </div>
              <p className='mb-3 font-medium text-xl text-gray-700 lg:text-xl xl:text-2xl dark:text-gray-300'>Learners</p>
              <p className='text-md text-gray-500 lg:text-lg xl:text-xl dark:text-gray-300'>Learners can notably improve retention and recall of information by answering questions.</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center file:text-gray-500 dark:text-gray-400">
              <div className='w-[70px] bg-gray-300 p-3 mb-5 rounded-full'>
                <img src="img/target_testtaker.png"/>
              </div>
              <p className='mb-3 font-medium text-xl text-gray-700 lg:text-xl xl:text-2xl dark:text-gray-300'>Examinees</p>
              <p className='text-md text-gray-500 lg:text-lg xl:text-xl dark:text-gray-300'>Examinees can be better prepared, especially in case of fewer past exam questions.</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center file:text-gray-500 dark:text-gray-400">
              <div className='w-[70px] bg-gray-300 p-3 mb-5 rounded-full'>
                <img src="img/target_educator.png"/>
              </div>
              <p className='mb-3 font-medium text-xl text-gray-700 lg:text-xl xl:text-2xl dark:text-gray-300'>Educators</p>
              <p className='text-md text-gray-500 lg:text-lg xl:text-xl dark:text-gray-300'>Educators can greatly reduce time and resources to create questions for learners.</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Hero;