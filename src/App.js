import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null
      }
   
  }
  onChangeHandler=event=>{

    console.log(event.target.files[0])
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })

}
onClickHandler = () => {
  const data = new FormData()
  data.append('file', this.state.selectedFile)
  axios.post("https://testfun09.azurewebsites.net/api/HttpTrigger3", data, { 
      })
      .then(res => { // then print response status
        console.log(res.statusText)
        console.log(res)
      })
 
}
  render() {
    return (
      
      <div className="container">
	      <div className="row">
	       <div className="col-md-6">
            <form method="post" action="#" id="#">   
              <div className="form-group files">
                <label>Upload Your File </label>
                <input type="file" name="file" onChange={this.onChangeHandler}/>
                <button type="button"  className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 
                
              </div>
              
            
            </form>
         </div>
	      </div>
      </div>
    )
  }
}

export default App;
