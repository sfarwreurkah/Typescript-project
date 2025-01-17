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


import ListGroup from "./components/ListGroup";

function App() {
  const items = ["new york", "karachi", "lahore", "murree"];

  return (
    <div> 
      <ListGroup heading="multan" items={items} onSelectItem={() => {}} /> 
    </div>
  );
}

export default App;