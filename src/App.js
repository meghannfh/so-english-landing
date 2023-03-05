import Top from './sections/Top'
import PodcastSection from './sections/PodcastSection';
import AboutSection from './sections/AboutSection';
import StudyMethodSection from './sections/StudyMethodSection';
import StudyMaterialSection from './sections/StudyMaterialSection';

//for fixed-bg create an empty div in studymethodsection that is position:fixed and has a lower
//z-index than main content. the div will serve as container for image which will have a property
//of cover on larger screens and contain on smaller. first container with content
//will leave extra padding at top of empty space to allow for fixed div image to show on scroll
//maybe need to sec div between About Section and Study method to have correct effect

function App() {
  return (
    <div className='h-screen'>
      <Top />
        <div className="bg-white">
          <PodcastSection />
          <AboutSection />
        </div>
        <div>
          <StudyMethodSection />
          <StudyMaterialSection />
        </div>
    </div>
  );
}

export default App;
