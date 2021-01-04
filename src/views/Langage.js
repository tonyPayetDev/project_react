import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Option from '../components/Option';

const Langage = (props) => {

    // useSelector function for getting the specific reducer we need Used to get the
    // whole reducer object like getting characterReducer Get the whole state from
    // characterReducer
    const langage = useSelector(state => state.langage);

    const change=props.change;// donne la possibilité de changer la langue
    const dispatch = useDispatch();

    return (
        <form >
          <label>
            Choisissez votre langue :
           
          </label>
          <div class="col-lg-6 col-md-8 mx-auto mt-3">

          <select value={langage.selected} class="form-select" aria-label="Default select example"   onChange={  change  ? e => dispatch({type: 'CHANGE_SELECTED', payload: e.target.value}):""}>
              <Option/>
          </select>
          </div>
        </form>
      );
}

export default Langage;