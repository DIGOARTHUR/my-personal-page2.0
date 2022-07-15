import { Bio } from './components/bio/Bio';
import { Skills } from './components/skills/Skills';
import './styles/global.scss'

function App() {
  return (
    <div className="container">
      <header>Header</header>
      <main>
        <Bio/>
        <Skills/>
      </main>

    </div>
  );
}

export default App;
