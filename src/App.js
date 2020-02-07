import React, { Component } from 'react';
import './App.css';
import ReactTable from 'react-table-6';

import 'react-table-6/react-table.css';
import ListTable from './detailView';
class App extends Component {

  constructor(props){
    super(props);

    this.state={
      posts:[],
      Name:"",
      Company:"",
      city:"",
      state:"",
      zip:"",
      email:"",
      web:"",
      age:""
    }
  }

componentDidMount(){
  const url="https://cors-anywhere.herokuapp.com/https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json";
  fetch(url,{

  }).then(res=>res.json()).then(posts=>{
    this.setState({posts:posts})
  })
}

onChangeLink(e){
  this.setState({
    Name:e.original.first_name+e.original.last_name,
      Company:e.original.company_name,
      city:e.original.city,
      state:e.original.state,
      zip:e.original.zip,
      email:e.original.email,
      web:e.original.web,
      age:e.original.age
  });
}

render(){
  const columns=[
    {
      Header:"FirstName",
      accessor:"first_name",
      filterable:true

    },
    {
      Header:"LastName",
      accessor:"last_name"
    },
    {
      Header:"CompanyName",
      accessor:"company_name"
    },
    {
      Header:"City",
      accessor:"city"
    },
    {
      Header:"State",
      accessor:"state"
    },
    {
      Header:"Zip",
      accessor:"zip"
    },
    {
      Header:"Email",
      accessor:"email"
    },
    {
      Header:"Web",
      accessor:"web"
    },
    {
      Header:"Age",
      accessor:"age"
    },{
      Header:"Actions",
      Cell:props=>{

        return(
          
          <button
          onClick={()=>{
            this.onChangeLink(props);
          }
            
          }
          >
            showDetails
          </button>


          
          
            
        )
      }
    }
  ]
  return(
    <div>


    
    <ReactTable
    columns={columns}
    data={this.state.posts}
    defaultPageSize={5}
    >

    </ReactTable>
    <ListTable 

    Name={this.state.Name}
      Company={this.state.Company}
      city={this.state.city}
      state={this.state.state}
      zip={this.state.zip}
      email={this.state.email}
      web={this.state.web}
      age={this.state.age}


    />
    </div>
  )
}

}

export default App;
