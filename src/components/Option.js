import React from 'react';
import {useSelector} from 'react-redux';

//Single todo item component
const Option = (props) => {
    //Get todoList from todoReducer
    const option = useSelector(state => state.langage.option)
    //Use for all the dispatch actions

    return (

        option.map(item => {
            return <option value={item.id} item={item} > {item.content}</option>
          })

    );
}

export default Option;