function Welcome() {
  const currentHour = new Date().getHours()
  //if current hour is less than 5 then print why are you still up
  //has to be more specific ones first then do a catch all which in this case is "good evening"
  const message = currentHour < 5 ? "Why are you still up?" 
                : currentHour < 12 ? "Good Morning" 
                : currentHour < 18 ? "Good Afternoon"
                : "Good Evening"

    return (
      <div>
        {message} sports fans!

        <h1>Welcome Sports Fans!</h1>
      </div>
    );
  }
  
  export default Welcome;