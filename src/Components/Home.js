import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component{

    render(){

        let itemList = this.props.items.map(item=>{
                return(
                    <div className="card" key={item.id}>
                    <div>
                    <img className="card-img-top" src={item.img} alt={item.title}/>
                    <span className="card-title">{item.title} </span>
                    <button type="button" class="btn btn-primary btn-block">Add to Cart</button>
                    </div>

                    <div className="card-text">
                    <p>{item.desc}</p>
                    <p><b>Price: {item.price}$</b></p>
                    </div>
                    </div>
                )
            })
            
            
            return(
                <div className="container">
                <h3 className="center-block"> Our Products </h3>
                <div>
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

  export default connect(mapStateToProps)(Home) 