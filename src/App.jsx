import Header from "./components/Header";
import Dashboard from "./pages/Dashboard"; // ⬅ Import Dashboard
import './index.css';

function App() {
  return (
    <div>
      <Header />

      <div className="container">
        <main style={{ padding: "20px" }}>
          <Dashboard />  {/* ⬅ Show Dashboard here */}
        </main>
      </div>
    </div>
  );
}

export default App;
