import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import AboutBreastCancer from './pages/AboutBreastCancer'
import YourSchedule from './pages/YourSchedule'
import EducationalHub from './pages/EducationalHub'
import PreventionScreening from './pages/PreventionScreening'
import TreatmentOptions from './pages/TreatmentOptions'
import ResourcesSupport from './pages/ResourcesSupport'
import ResearchInnovation from './pages/ResearchInnovation'
import ContactUs from './pages/ContactUs'
import SurvivorStories from './pages/SurvivorStories'
import RiskAssessment from './pages/RiskAssessment'
import ScreeningInfo from './pages/ScreeningInfo'
import Nutrition from './pages/Nutrition'
import Exercise from './pages/Exercise'
import MentalHealth from './pages/MentalHealth'
import FamilySupport from './pages/FamilySupport'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutBreastCancer />} />
          <Route path="/schedule" element={<YourSchedule />} />
          <Route path="/education" element={<EducationalHub />} />
          <Route path="/prevention" element={<PreventionScreening />} />
          <Route path="/treatment" element={<TreatmentOptions />} />
          <Route path="/resources" element={<ResourcesSupport />} />
          <Route path="/research" element={<ResearchInnovation />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/stories" element={<SurvivorStories />} />
          <Route path="/assessment" element={<RiskAssessment />} />
          <Route path="/screening" element={<ScreeningInfo />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/family-support" element={<FamilySupport />} />
        </Routes>
      </main>
    </div>
  )
}

export default App