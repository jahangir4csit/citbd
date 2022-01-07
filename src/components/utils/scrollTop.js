import React  from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ScrollTop = (props)=>{
    return(
        <button className={'back_to_top ' + (props.data ? "back_btn_show" : "")} onClick={() => scrollTo('#header')}><FontAwesomeIcon icon={faAngleUp} /></button>
    )
}
export default ScrollTop

