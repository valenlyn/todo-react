class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind( this );
  }

  state = {
    list : [],
    word : "",
    error : ""
  }

    changeHandler(event){

        this.setState({ word: event.target.value });
        console.log("change", event.target.value);

    }

    submitHandler = e => {

        let trimmedWord = (this.state.word).replace(/^\s+|\s+$/g, '');
        console.log(trimmedWord);

        if ( !trimmedWord ) {
            this.setState({ error: "too few words" });
        } else if ( trimmedWord.length > 140 ) {
            this.setState({ error: "you exceeded max character length of 140 characters" });
        } else {
            this.state.list.push( trimmedWord );
            console.log(this.state);
            this.setState({ word: "" });
        }


    }

  render() {
      // render the list with a map() here

      let display = this.state.list.map((item, index) => {
        return <li key={item + index}> {item} </li>
      })

      console.log("rendering");

      return (
        <div className="list">

            <p>{this.state.error}</p>
             <input onChange={this.changeHandler} value={this.state.word} autoFocus/>
             <button onClick={this.submitHandler}>add item</button>

              <ul>{display}</ul>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);