import React from 'react'

const ArtworkCategories = ({categories, filterArtwork}) => {
    return (
        <div className="artworkButtons">
            {categories.map((category,index)=> {
                return (
                    <section>
                        <button type="button" key={index} 
                        onClick={()=> filterArtwork(category)}
                        >{category}</button>
                    </section>
                );
            })}        
        </div>
    )
}

export default ArtworkCategories;
