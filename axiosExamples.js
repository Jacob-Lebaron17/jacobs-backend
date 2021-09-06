    // Edits the turtle with the id.
    axios.patch(`http://localhost:3000/turtles/${theTurtlesId}`, {
      title: 'Edit the turtle',
      description: 'This will definitely edit the fucking turtle.'
    })

    // Makes a new turtle with any properties.
    axios.post(`http://localhost:3000/turtles/`, {
      id: "The id need to be unique from all others.",
      title: "the turtle will die badly.",
      description: 'Please kill the poor turtle. End it and let it be dead. Just like its kids before it.',
      weirdPropertie: "fsdfhk87797 9796768 687fasdfasdfds......"
    })

    // Gets the turtle with this id then you can set state with the turtle data.
    axios.get(`http://localhost:3000/turtles/${theTurtlesId}`)
      .then((res) => {
        this.setState({
          title: res.data.title,
          description: res.data.description
        })
      })

    // Fetches ever turtle as a list in an array.
    axios.get("http://localhost:3000/turtles/")
      .then((res) => {
        this.setState({
          theTurtleData: res.data
        })
      })
    
    // Deletes the turtle with the id given.
    axios.delete(`http://localhost:3000/turtles/${turtleBeingDeleted}`)
      .then((res) => {
        console.log("deleted the turtle with this id given.")
      })