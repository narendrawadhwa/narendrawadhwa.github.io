import {arrows, clickLink} from '../assets/images';
import { drag_animation } from '../assets/icons';

const Welcome = ({ showWelcome, handlePrevStep, handleNextStep, handleSkip, isLastStep, guideStep }) => {
  const renderGuideModal = () => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center text-center">
        <div className="bg-white p-6 rounded-lg flex flex-col justify-between sm:min-w-[450px] max-w-[320px] bg-opacity-95">
          {guideStep === 1 && (
            <>
              <p className="font-semibold mb-3">Step 1</p>
              <span className="flex flex-row items-center justify-center">
                <img src={drag_animation} className="w-20 mr-2" /> <p>OR</p> 
                <img src={arrows} alt="" className="w-32" />
              </span>
              <p className="mt-3 mb-1 sm:text-[20px] text-[16px]"> Drag or use left/right arrow buttons to navigate.</p>
            </>
          )}
          {guideStep === 2 && (
            <>
              <p className="font-semibold mb-3">Step 2</p>
              <span className="flex flex-row items-center justify-center">
                <img src={clickLink} alt="" className="w-12" />
              </span>
              <p className="mt-3 mb-1 sm:text-[19px] text-[15px]"> Click hyperlinks for education certificates, projects, contact, and more.</p>
            </>
          )}
          <div className="flex justify-between mt-4">
            <div>
              <button
                onClick={handlePrevStep}
                className="text-blue-500 p-1"
                disabled={guideStep === 1}
              >
                Prev
              </button>
              {isLastStep ? (
                <button onClick={handleSkip} className="text-gray-500 px-4  py-1">
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
