import React from 'react';
import ReactDOM from 'react-dom/client';

const name = 'Ilhaan';

function Profile(){
   if(name){
    return <main id="content" role="main" class="base">
            <h1>{name}'s React Page</h1>
              <p>I am a future Software developer</p>
            </main>
   }
   else {
     return <main id="content" role="main" class="base">
       <h1>Just a React Page</h1>
       <p>Nothing to see here!</p>
     </main>  
   }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Profile());

