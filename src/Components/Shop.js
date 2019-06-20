import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './redux/actions/cartActions';

class Shop extends Component{
    handleClick = (id)=>{
        this.props.addToCart(id);
        }

    render(){


        let itemList = this.props.items.map(item=>{
                return(
                    <div className="card" style={{width: "22rem"}} key={item.id}>
                    <div>
                    <img className="card-img-top" src={item.img} alt={item.title}/>
                    <h3 className="card-title">{item.title} </h3>
                    
                    </div>

                    <div className="card-text">
                    <p>{item.desc}</p>
                    <p><b>Price: {item.price}$</b></p>
                    <button type="button" className="btn btn-primary btn-block" onClick={()=>{this.handleClick(item.id)}} >Add to Cart</button>
                    </div>
                    
                    </div>
                )
            })
            
            
            return(
                <div className="container">
                <h3 className="center-block"> Fall Collection </h3>
                <div className="row">
                
                    {itemList}
                    
                    </div>
                    </div>
            )
        

    }
        
}    
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
  const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

  export default connect(mapStateToProps,mapDispatchToProps)(Shop) 