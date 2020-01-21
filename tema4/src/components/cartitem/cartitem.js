import React from 'react';
import './cart.css';



export class Cart extends React.Component{

    shouldComponentUpdate(nextProps){
         return   nextProps.title !== this.props.title ||
                  nextProps.author !== this.props.author ||
                  nextProps.price !== this.props.price ||
                  (nextProps.count && nextProps.count!== this.props.count);
    }
    render() {
        return (
            <div className='cart-container'>
              <span><b>{this.props.count}x</b>  {this.props.title} - {this.props.author}</span>
              <span>&#9733;</span>
              <span>Price: {this.props.price} EUR</span>
              <span>
              <button onClick={() => this.props.add(this.props.bookId)}>+</button>
              <button onClick={() => this.props.decreaseCount(this.props.bookId)}>-</button>
              <button onClick={()=> this.props.remove(this.props.bookId)}>X</button>
              </span>
            </div>
        );
    }
}