import './App.css'
import StudentCard from "./components/StudentCard"

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {/* TODO: Import and render StudentCard components here */}
            <h1>Student List</h1>
            <StudentCard name="Farah Hammad" id="202257640" dept="Software Engineering" />
            <StudentCard name="Sara Ahmed" id="202347958" dept="Physics" />
        </div>
      </main>
    </div>
  )
}

export default App
