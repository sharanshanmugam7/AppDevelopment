import React from 'react';
import './Tutorials.css';
import img from './Tutorial1.jpg'
export default function Tutorials() {
  return (
    <div className="diy-floating-shelves">
      <div className="content">
        <div className="text">
          <h2>DIY Floating Shelves</h2>
          <div className="instructions">
            <h3>Materials You'll Need:</h3>
            <ul>
              <li>Wooden boards</li>
              <li>Wall brackets</li>
              <li>Screws</li>
              <li>Drill</li>
              <li>Screwdriver</li>
              {/* Add more materials */}
            </ul>
            <h3>Steps:</h3>
            <ol>
              <li>Measure and mark the wall for shelf placement.</li>
              <li>Attach wall brackets securely to the wall.</li>
              <li>Cut and prepare wooden boards for shelves.</li>
              <li>Attach wooden boards to the wall brackets.</li>
              <li>Level and secure the shelves in place.</li>
              {/* Add more steps */}
            </ol>
          </div>
          <div className="tips">
            <h3>Tips:</h3>
            <ul>
              <li>Use a stud finder to locate wall studs for sturdy support.</li>
              <li>Sand and finish the wooden boards for a polished look.</li>
              {/* Add more tips */}
            </ul>
          </div>
        </div>
        <div className="image">
          <img src={img} alt="Shelves Example" />
        </div>
      </div>
    </div>
  );
}
