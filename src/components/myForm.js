import React from 'react'
class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { dna: [],
                    contacts:[] };
    }
   
  mySubmitHandler = (event) => {
    var dna = this.state.dna;   
    fetch('https://69324d3b.us-south.apigw.appdomain.cloud/mutant/mutant',
    {
              method: 'POST', 
              mode: 'cors', 
              cache: 'no-cache', 
              credentials: 'same-origin', 
              headers: {
                'Content-Type': 'application/json'
              },
              redirect: 'follow', 
              referrerPolicy: 'no-referrer', 
              body: dna
    })
        .then(res => res.json())
        .then((data) => {
            this.setState({ contacts: data })
            console.log(data)
            console.log(dna);
            
        })
        .catch(console.log)
        event.preventDefault();
  
  }


  myChangeHandler = (event) => {
    this.setState({dna: event.target.value});
  }
  
  render()  {
    return (
        <div>
            <center><h1>DNA- DETECTOR</h1></center>
            
            <form  onSubmit={this.mySubmitHandler}> 
            
  <div class="form-group">
    <label for="exampleInputPassword1">insert DNA</label>
    <input type="text" class="form-control" id="dna" placeholder="DNA"  onChange={this.myChangeHandler}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  <div>
    <p>{this.state.contacts.mensaje} </p>
  </div>
</form>
            
        </div>
    )
};

}

export default MyForm