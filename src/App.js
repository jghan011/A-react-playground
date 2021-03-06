import React, { Component } from 'react';
import Split from './composition/Split';
import './App.css';
// import Tooltip from './composition/Tooltip'
import Messages from './composition/Messages';
import TheDate from './state/TheDate.js';
import Counter from './Counter/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import Roulette from './state-drills/RouletteGun';
import Tabs from './state/Tabs/Tabs';
import AppOne from './ShoppingTing/AppOne';


// const firstTooltip = (
//   <Tooltip color="hotpink" message= 'tooltip message'>
//     ipsum
//   </Tooltip>

// )

// const secondTooltip = (
//   <Tooltip color="#126BCC" message = 'another tooltip message'>
//     officiis
//   </Tooltip>

// )




// export default function App() {
//   return (
//     <main className='App'>
//       <Split className='left' flexBasis={2}>
//       This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex {secondTooltip} velit suscipit facere officia?<br />
//         {/* make another tooltip directly inside the App */}
//         <Tooltip message='one more tooltip message'>
//           Necessitatibus?
//         </Tooltip>  
//       </Split>
//       <Split className="right">
//         This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
//       </Split>
//     </main>
    
//   );
// }

const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

class App extends Component {
  render() {
    return (
      <div className ='App'>
        <h1>YOUR APPLICATION NAME !</h1>
        <Messages name='Messages' unread={0}/>
        <Messages name='Notifications' unread={10}/>
        <TheDate />
        <Counter count={123}/>
        <HelloWorld />
        <Bomb/> 
        <Roulette />
        <Tabs tabs={tabsProp} />
        <AppOne/>
      </div>  
    );
  }
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
