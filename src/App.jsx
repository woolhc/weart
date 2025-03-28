import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/home/index';

// About pages
import About from './pages/about';
import Team from './pages/about/team';
import Partners from './pages/about/partners';
import Join from './pages/about/join';

// Course pages
import Courses from './pages/courses';
import Basic from './pages/courses/basic';
import Digital from './pages/courses/digital';
import Figure from './pages/courses/figure';
import Sculpture from './pages/courses/sculpture';
import Theme from './pages/courses/theme';

// Portfolio pages
import Portfolio from './pages/portfolio';
import PrivateSchool from './pages/portfolio/private';
import HighSchool from './pages/portfolio/highschool';
import API from './pages/portfolio/api';
import University from './pages/portfolio/university';
import APHistory from './pages/portfolio/api/history';
import APDrawing from './pages/portfolio/api/drawing';
import AP2DDesign from './pages/portfolio/api/2d';
import AP3DDesign from './pages/portfolio/api/3d';

// Art Path pages
import ArtPath from './pages/art-path';
import Background from './pages/art-path/background';
import SummerSchool from './pages/art-path/summer-school';
import Practice from './pages/art-path/practice';
import Competition from './pages/art-path/competition';

// Other pages
import CompetitionPage from './pages/competition';
import Contact from './pages/contact';

import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full max-w-full overflow-hidden">
        <Header />
        <div className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About routes */}
            <Route path="/about" element={<About />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/about/partners" element={<Partners />} />
            <Route path="/about/join" element={<Join />} />
            
            {/* Course routes */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/basic" element={<Basic />} />
            <Route path="/courses/digital" element={<Digital />} />
            <Route path="/courses/figure" element={<Figure />} />
            <Route path="/courses/sculpture" element={<Sculpture />} />
            <Route path="/courses/theme" element={<Theme />} />
            
            {/* Portfolio routes */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/private" element={<PrivateSchool />} />
            <Route path="/portfolio/highschool" element={<HighSchool />} />
            <Route path="/portfolio/api" element={<API />} />
            <Route path="/portfolio/api/history" element={<APHistory />} />
            <Route path="/portfolio/api/drawing" element={<APDrawing />} />
            <Route path="/portfolio/api/2d" element={<AP2DDesign />} />
            <Route path="/portfolio/api/3d" element={<AP3DDesign />} />
            <Route path="/portfolio/university" element={<University />} />
            
            {/* Art Path routes */}
            <Route path="/art-path" element={<ArtPath />} />
            <Route path="/art-path/background" element={<Background />} />
            <Route path="/art-path/summer-school" element={<SummerSchool />} />
            <Route path="/art-path/practice" element={<Practice />} />
            <Route path="/art-path/competition" element={<Competition />} />
            
            {/* Other routes */}
            <Route path="/competition" element={<CompetitionPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
