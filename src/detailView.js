import React from 'react';

 const ListTable = (props) =>{
    
        

        return(
            <div>
   <h1>{props.Name}<br /></h1>             

Company={ props.Company}<br />
city={props.city}<br />
state={props.state}<br />
zip={props.zip}<br />
email={props.email}<br />
web={props.web}<br />
age={props.age}<br />
 
            </div>
        )
    }


export default ListTable;