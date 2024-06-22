import { useState } from 'react'

function Home() {

  return (
    <>

          <div class="container">
            <div class="info">
              <h1>Speak to me directly</h1>
              <p>Want to know more? Call me we now and share details.</p>
              <button>
                <table>
                  <tr>
                    <td>
                      <a class="number" href="tel:+447821285093">Phone: +44 7821 285093</a>
                    </td>
                  </tr>
                </table>
              </button>
            </div>
            <div class="image">
              <img src="https://i.postimg.cc/65QxYYzh/001234.png" />
            </div>
          </div>

    </>
  )
}

export default Home
