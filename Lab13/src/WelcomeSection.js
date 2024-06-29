

    let date = new Date()
    
    let singleUser = {
         name: 'John',
         time: date.toDateString(),
    }

export default function WelcomeSection(){
    return(
        <div className="WelcomeSection">
          <h1>Welcome,{singleUser.name}</h1>
          <p>Today's data is: {singleUser.time}</p>
        </div>
    )
}
