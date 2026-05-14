
import Layout from './layout/Layout'
import Home from './pages/Home'
import Dither from './components/Dither'
import './App.css'

export default function App() {
  return (
    <Layout>
      <main className="scene">
        <div className="content-layer">
          <Home />
        </div>
      </main>
    </Layout>
  );
}