import React from 'react';
import NumberFormat from 'react-number-format';
import './Search.css';

class Search extends React.Component {
	render() {
        const textUpdate = this.props.textUpdate;
        const priceUpdate = this.props.priceUpdate;
        const vendorUpdate = this.props.vendorUpdate;

		return (
			<div className="search">
                <p>SEARCH: &nbsp;
                    <input 
                        type="text" 
                        ref="search" 
                        className="text" 
                        placeholder="search" 
                        onChange={() => { console.log(this.refs.search.value)
                        textUpdate(this.refs.search.value)}} 
                    />
                </p> 
                <p>PRICE: &nbsp;
                    <NumberFormat
                        ref="min"
                        className="price" 
                        thousandSeparator={true} 
                        prefix={'$'} decimalScale={2} 
                        fixedDecimalScale={true} 
                        placeholder="Min"
                        onChange={() => {priceUpdate(this.refs.min.state.numAsString, 0)}}
                    />
                    &nbsp; &lt; &nbsp;
                    <NumberFormat
                        ref="max"
                        className="price" 
                        thousandSeparator={true} 
                        prefix={'$'} decimalScale={2} 
                        fixedDecimalScale={true} 
                        placeholder="Max"
                        onChange={() => {priceUpdate(this.refs.max.state.numAsString, 1) }}
                    />
                </p>
                <p>VENDOR: &nbsp;
                    <input 
                        type="text"
                        ref="ven"
                        placeholder="Filter by Vendor"
                        onChange={() => {vendorUpdate(this.refs.search.value)}}
                    />
                </p>
			</div>
		);
	}
}
export default Search;