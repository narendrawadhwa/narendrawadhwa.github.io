import React from 'react';
import { drag_animation } from '../assets/icons';
import { arrows, clickLink } from '../assets/images';
const Welcome = ({ showWelcome, handlePrevStep, handleNextStep, handleSkip, isLastStep, guideStep }) => {
  const renderGuideModal = () => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center text-center">
        <div className="bg-white p-6 rounded-lg flex flex-col justify-between sm:min-w-[380px] max-w-[340px] bg-opacity-95">
          {guideStep === 1 && (
            <>
              <p className="font-semibold text-[20px] mb-3">Step 1</p>
              <span className="flex flex-row items-center justify-center">
                <img src={drag_animation} className="sm:w-16 w-20 mr-2" /> <p className='text-[18px]'>OR</p> 
                <img src={arrows} alt="" className="sm:w-28 w-32" />
              </span>
              <p className="mt-3 mb-1 text-[17px]"> Drag or use left/right arrow buttons to navigate.</p>
            </>
          )}
          {guideStep === 2 && (
            <>
              <p className="font-semibold text-[20px] mb-3">Step 2</p>
              <span className="flex flex-row items-center justify-center">
                <img src={clickLink} alt="" className="w-12" />
              </span>
              <p className="mt-3 mb-1 text-[17px]"> Click hyperlinks for education certificates, projects, contact, and more.</p>
            </>
          )}
          <div className="flex justify-between mt-4 text-[17px]">
            <div>
              <button
                onClick={handlePrevStep}
                className="text-blue-500 p-1"
                disabled={guideStep === 1}
              >
                Prev
              </button>
              {isLastStep ? (
                <button onClick={handleSkip} className="text-gray-500 px-4 py-1">
                  Close
                </button>
              ) : (
                <button
                  onClick={handleNextStep}
                  className="text-blue-500 px-4 py-1"
                >
                  Next
                </button>
              )}
            </div>
            {!isLastStep && (
              <button onClick={handleSkip} className="text-gray-500 mr-2 ">
                Skip
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    showWelcome && renderGuideModal()
  );
};

export default Welcome;
