import { Link, Outlet } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <div class="landing-page">
        <header>
          <div class="container">
            <a href="#" class="logo">Happy clean services</a>
            <ul class="links">
              <li><Link to="/cleaning/">Home</Link></li>
              <li><Link to="/cleaning/about">About me</Link></li>
              <li><Link to="/cleaning/work">Services</Link></li>
              <li>
                <table>
                  <tr>
                    <td>
                      <a class="number" href="tel:+447821285093">Contact me</a>
                    </td>
                  </tr>
                </table>
              </li>
            </ul>
          </div>
        </header>
        <div class="landing-page">
          <div class="content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
