
//  video 40   updating objects

// import { useState } from "react";

// function App() {
//     const [customer, setCustomer] = useState({
//         name: 'jhn',
//         address:{
//             city: 'manestor',
//             zipcode: '77665'
//         }
//     });

//     const handleClick = () => {
//         setCustomer({
//             ...customer, 
//             address: {...customer.address , zipcode: '12345'},
//         });
//     };

//     return (
//         <div>
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     );
// }

// export default App;
 



// -----------------------------------------------------------------------------------

//  video 41    updating arrays

// import { useState } from "react";

// function App() {
//     const [tags, setTags] = useState(['happy', 'cheerful']);

//     const handleClick = () => {
//         setTags([...tags, 'exciting']);

//         setTags(tags.filter(tag => tag !== 'happy'));

//         setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag));
//     };

//     return (
//         <div>
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     );
// }

// export default App;



// -----------------------------------------------------------------------------------

//  video 42    updating arrays part 2

// import { useState } from "react";

// function App() {
//     const [bugs, setBugs] = useState([
//         { id: 1, title: 'Bug 1', fixed: false },
//         { id: 2, title: 'Bug 2', fixed: false },
//     ]);

//     const handleClick = () => {
//         setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true } : bug));
//     };

//     return (
//         <div>
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     );
// }

// export default App;


// -----------------------------------------------------------------------------------

//  video 43    updating arrays  ( working with immer)

import { useState } from "react";
import produce from "immer";

function App() {
    const [bugs, setBugs] = useState([
        { id: 1, title: 'Bug 1', fixed: false },
        { id: 2, title: 'Bug 2', fixed: false },
    ]);

    const handleClick = () => {
        setBugs(produce(draft => {
            const bug = draft.find(bug => bug.id === 1);
            if (bug) bug.fixed = true;
        }));
    };

    return (
        <div>
            {bugs.map(bug => (
                <p key={bug.id}>
                    {bug.title} {bug.fixed ? 'Fixed' : 'New'}
                </p>
            ))}
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default App;