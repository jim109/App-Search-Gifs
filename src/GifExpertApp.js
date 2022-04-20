import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//import PropTypes from 'prop-types'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man']);

/*     const handleAdd = () =>{        
        //setCategories([...categories, 'Ranma 1/2']);
        setCategories( cats => [...cats, 'HunterXHunter']);
    }  */

  return (
    <>
        <h2>Gif Expert App</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr />
        <ol>
            {
                categories.map( category => {
                    return(
                        <GifGrid 
                        key={ category }
                        category = { category }/>
                )})
            }
        </ol>
    </>
  )
}

//GifExpertApp.propTypes = {}

export default GifExpertApp;