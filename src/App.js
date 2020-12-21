import anchor from './anchor-24px.svg';
import './App.css';
import { arc } from 'd3-shape';

// const generateArcSector = () => {
//   var vis = d3.select("body").append("svg")
//   var pi = Math.PI;

//   var arc = d3.svg.arc()
//     .innerRadius(50)
//     .outerRadius(70)
//     .startAngle(45 * (pi / 180)) //converting from degs to radians
//     .endAngle(3) //just radians

//   vis.attr("width", "400").attr("height", "400") // Added height and width so arc is visible
//     .append("path")
//     .attr("d", arc)
//     .attr("fill", "red")
//     .attr("transform", "translate(200,200)");
//   return (
//     <svg width="400" height="400">
//       <path d="" transform="" />
//     </svg>
//   )
// }

const generateArc = (startAngle, endAngle) => {

}

function App() {
  var arcInstance = arc()
    .innerRadius(70)
    .outerRadius(100)
    .startAngle(0)
    .endAngle(Math.PI / 2);

  const path = arcInstance();
  console.log(path);
  console.log(arcInstance.centroid());
  const center = arcInstance.centroid();
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <svg width="400" height="400">
          <path d={path} fill="aqua" transform="translate(200,200)" />
          <image href={anchor} x={center[0] + 200 - 12} y={center[1] + 200 - 12} height="24" width="24" />
        </svg>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
