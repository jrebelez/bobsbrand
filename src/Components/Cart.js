import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity } from './redux/actions/cartActions';


class Cart extends Component {

    handleRemove = (id)=> {
        this.props.removeItem(id);
    }

    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }

    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }

   render() {

    let addedItems = this.props.items.length ?
       (
           this.props.items.map(item => {
               return(
                <li className="media" key={item.id} >
                <img className="mr-3" src={item.img} alt={item.title} style={{width: "300px"}} />
                <div className="media-body">
                            <h5 className="mt-0 mb-1"><strong>{item.title} </strong></h5>
                            <h6><strong>Price: {item.price}$ <span className="text-muted">x</span></strong></h6>
                            
                                <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="fa fa-sort-up" onClick={()=>{this.handleAddQuantity(item.id)}}></i></Link>
                                            <Link to="/cart"><i className="fa fa-sort-down" onClick={()=>{this.handleSubtractQuantity(item.id)}}></i></Link>
                                        </div>   
                                        <button className="btn btn-primary " onClick={()=>{this.handleRemove(item.id)}}>Remove</button>        
                         </div>
                         
                                   
        
                </li>
               

               )
           })
       ):
       (
        <p>Nothing.</p>
     )
       
     return(
        <div className="container" >
            <div>
                <h5>You have ordered:</h5>
                
                <ul className="list-unstyled" >
                    {addedItems}
                </ul>
                <b>Total: {this.props.total} $</b>
            </div> 
            
        </div>
   )
     

   }


}
const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)