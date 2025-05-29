

import './App.css'
import Grandpa from './components/Family/Grandpa'
// import ReusableForm from './components/ReusableForm'
// import HookForm from './components/HookForm'
// import RefForm from './components/RefForm'
// import SimpleForm from './components/SimpleForm'
// import StatefulForm from './components/StatefulForm'

// const handleSignUPSubmit = data =>{
//   console.log('Sign up data',data);

// }
// const handleUpdateProfile = data =>{
//   console.log('Sign up data',data);
// }
function App() {
  

  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm/> */}
      {/* <StatefulForm/> */}
      {/* <RefForm/> */}
      {/* <HookForm/> */}
      {/* <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUPSubmit} 
      >
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now.</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile}  submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile up to date.</p>
        </div>
        </ReusableForm> */}
    </>
  )
}

export default App
