import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props){
    return(
        <div>

            <div>
            <Table responsive="sm">
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>{ props.state[0].name }</td>
                    <td>T</td>
                    <td>Table cell</td>
                </tr>
            </Table>

            </div>

        </div>
    )
}

function 함수명(state){
    return {
        state : state
    }
}

export default connect(함수명)(Cart);