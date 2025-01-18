// import ListGroup from "./components/ListGroup";
// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";

// function App() {
//   let items = ["new york", "karachi", "lahore", "murree"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   }



//   return (
//     <div> 
//       {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>  */}
//       {/* <Alert> hiiiiiiii </Alert> */}
//       {<Alert>My alert  </Alert>}
//       <Button onClick={() => setAlertVisibility console.log('clicked') } > My buttn</Button>
//     </div>
//   );
// }

// export default App;








//     second alert coding

// function App() {
//   const [alertVisibility, setAlertVisibility] = useState(false);

//   return (
//     <div>
//       {alertVisibility && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
//       <Button onClick={() => setAlertVisibility(true)}>My button</Button>
//     </div>
//   );
// }

// export default App;





//  Now we working on list-group folder 


// import ListGroup from "./components/ListGroup";
// import { BsFillCalendarFill} from 'react-icons';

// function App() {
//   const items = ["new york", "karachi", "lahore", "murree"];

//   return (
//     <div> 
//       <ListGroup heading="multan" items={items} onSelectItem={() => {}} /> 
//     </div>
//   );
// }

// export default App;



// ---------------------------------------------------------------------------------------

//  from video 31 


// import { BsFillCalendarFill} from 'react-icons/bs';
 
// function App() {
//   return(
//     <div>
// <BsFillCalendarFill color='pink' size='30' />
//     </div>
//   );

// }

// export default App;



// ---------------------------------------------------------------------------------------


//  from video 33

// import Like from "./components/Like";

// function App() {
//     return(
//       <div>
//   < Like onClick= {() => console.log("cliked")} />
//       </div>
//     );
  
//   }
  
//   export default App;






// ---------------------------------------------------------------------------------------


//  from video 35


// import { useState } from "react";
// import Button from "./components/Button"; 

// function App() {
//   const [isVisible, setVisibility] = useState(false);
//   const [isApproved, setApproved] = useState(true);

//   const handleClick = () => {
//     setVisibility(true);
//     console.log(isVisible);
//   };

//   return (
//     <div>
//       <Button onClick={handleClick}>show</Button>
//     </div>
//   );
// }

// export default App;



// ---------------------------------------------------------------------------------------


//  from video 36

import { useState } from "react"

function App () {
  const [person, setPerson] = useState({
    firstName: '',
    lastName:'',
    contact:{
      address:{
        street: ''
      }
    }

  })
 
  const [isLoading, setLoading ] = useState(false);

  return(
    <div>
      
    </div>
  )


export default App;