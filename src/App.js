import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip'

const firstTooltip = (
  <Tooltip color="hotpink" message= 'tooltip message'>
    ipsum
  </Tooltip>

)

const secondTooltip = (
  <Tooltip color="#126BCC" message = 'another tooltip message'>
    officiis
  </Tooltip>

)




function App() {
  return (
    <main className='App'>
      <Split className='left' flexBasis={2}>
      This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex {secondTooltip} velit suscipit facere officia?<br />
        {/* make another tooltip directly inside the App */}
        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>  
      </Split>
      <Split className="right">
        This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
    </main>
  );
}

export default App;








// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
