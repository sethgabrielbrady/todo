class Todo extends React.Component {
  render(){

    return <div className="todo">
            <span>
              <input type="checkbox" checked={this.state.done} />
              <input type="text" value={this.state.text} />
            </span>
           </div>;
  }

  constructor(props){
    super(props);

    this.state = { done: (this.props.done == "true" && props.done),
                     text: props.text
                   };
  }
}

ReactDOM.render(
  <Todo name="one" done="false" />,
  document.getElementById('root')
);
