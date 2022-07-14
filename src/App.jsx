import { Skills } from './components/skills/Skills';
import './styles/global.scss'

function App() {
  return (
    <div className="container">
      <header>Header</header>
      <main>
        <section className="bioContainer">Bio</section>
        <Skills/>
      </main>

    </div>
  );
}

export default App;
