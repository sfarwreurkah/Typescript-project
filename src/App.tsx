//  video 45 

// import { useState } from "react";

// function App() {
//     const [game, setGame] = useState({
//         id: 1,
//         player: {
//             name: 'john',
//         },
//     });

//     const handleClick = () => {
//         setGame({
//             ...game,
//             player: { ...game.player, name: 'bob' }
//         });
//     };

//     return (
//         <div>
//             <button onClick={handleClick}>Change Name</button>
//             <p>Player Name: {game.player.name}</p>
//         </div>
//     );
// }

// export default App;



// --------------------------------------------------------------------------------------------------------

//  video 46 


import ExpandableText from "./components/ExpandableText";

function App() {

    return (
        <div><ExpandableText maxChars={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Exercitationem odit maxime quos, inventore soluta perferendis at odio
          autem porro reprehenderit eum, magnam commodi sint voluptatum consectetur
           perspiciatis eaque quas. Ullam?
        
        
                </ExpandableText>
                
                </div>
    );
}

export default App;