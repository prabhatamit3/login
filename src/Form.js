// Complete the Form Component and export it

// const Form = () => (
//   <>
//     <div>
//       <form>{/* Create a h3, 2 inputs and 1 button here */}</form>
//     </div>
//   </>
// );
const Form = () => {
  const handleSubmit = (event) => {  
    event.preventDefault(); // To prevent page reload on form submit.  
  };  
  
  return (  
    <div>  
      <h3>Login</h3>  
      <form onSubmit={handleSubmit}>  
        <input type="text" placeholder="Name"  readOnly />  
        <input type="email" placeholder="Email"  readOnly />  
        <button type="submit">Login</button>  
      </form>  
    </div>  
  );  
  }; 

  export default Form; 