import Hero from '../components/Hero';
import Impact from '../components/Impact';
import TechStack from '../components/TechStack';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';

export default function MainScrollPage() {
  return (
    <div className="w-full flex flex-col">
      <div id="home"><Hero /></div>
      <div id="impact"><Impact /></div>
      <div id="tech"><TechStack /></div>
      <div id="roadmap"><Roadmap /></div>
      <div id="team"><Team /></div>
    </div>
  );
}
