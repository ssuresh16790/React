

const Signup = () => {
  return (
    <div>
    <form>
      <label htmlFor="text">Name : </label>
      <input type="text" name="text" id="name" />
      <br/> <br/>
      <label htmlFor="email">Email : </label>
      <input type="email" name="email" id="email" />
      <br/> <br/>
      <input type="submit" value="Submit" />
    </form>
  </div>
  )
}

export default Signup;
