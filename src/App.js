import './App.css';
import React from 'react';
import { useState } from 'react';

const members = [
  {memberName: 'Dwight', 
   memberEmail: 'beetluvr@schrutefarms.com', 
   memberRole: 'Sales'},

  {memberName: 'Stanley',
   memberEmail: 'pretzelluvr@sassy.com',
   memberRole: 'Sales'}
];

function App() {
  const [team, setTeam] = useState(members);
  const [formValues, setFormValues] = useState({
    memberName: "",
    memberEmail: "",
    memberRole: ""
  })
  
  const change = (evt) => {
    const { name, value } = evt.target;
    setFormValues({...formValues, [name]: value})
  }

  const submit = (evt) => {
    evt.preventDefault();
    setTeam(members.concat({ memberName: formValues.memberName, memberEmail: formValues.memberEmail}))
    setFormValues({memberName: "", memberEmail: ""})
  }

  return (
    <div className="App">

     <h1> Team Members</h1>

     <form onSubmit={submit}>
      <input 
       name="memberName"
       type="text"
       value={formValues.memberName}
       onChange={change}
      />
      <input
       name="memberEmail"
       type="text"
       value= {formValues.memberEmail}
       onChange={change}
      />
      <input type="submit" value="Add to team!" />
     </form>
   
      { team.map((member, i) => {
        return (
        <div key={i}>
          <p>Name: {member.memberName}</p>
          <p>Email: {member.memberEmail}</p>
          <p>Role: {member.memberRole}</p>
        </div>
        )
      })}
    
    </div>
  );
}

export default App;
