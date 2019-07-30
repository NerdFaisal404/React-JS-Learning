import React, { Component } from 'react';
import { RSA_NO_PADDING } from 'constants';

class Book extends Component {
    render() {
        let cssStyle = {
            marginLeft: '10px'
        }
        return (
            <div>
                <li className="list-group-item d-flex">
                    <p>{this.props.book.name}</p>
                    <span className="ml-auto">{this.props.book.price} </span>
                    <div className="mx-4">
                        <span style={{ cursor: 'pointer' }} onClick={() =>
                            this.props.deleteHandler(this.props.book.id)
                        }>
                            <i class="fas fa-trash"></i>
                        </span>
                    </div>
                </li>
            </div >
        );
    }
}

export default Book;
