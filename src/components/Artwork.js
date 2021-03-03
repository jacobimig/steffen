import React, {useState} from 'react';
import artworkData from '../artworkData';
import ArtworkCategories from '../components/ArtworkCategories';
import {Link} from 'react-router-dom';


const Artwork = () => {
        const [artworkPieces, setArtworkPieces] = useState(artworkData);
        const allCategories = ['all', ...new Set(artworkPieces.map(x=>x.category))];
        const [categories,setCategories] = useState(allCategories);
        const filterArtwork = (category) => {
            if (category === 'all') {
                setArtworkPieces(artworkData);
                return;
            }
            const newArtworkPieces = artworkData.filter(x=>category===x.category);
            setArtworkPieces(newArtworkPieces);
            console.log(newArtworkPieces);
        };
    return (
        <>
        <ArtworkCategories categories={categories} filterArtwork={filterArtwork} />
            <div className="artworkContainer">
                {artworkPieces.map((x)=> {
                const {id,title,img,desc,price} = x;
                return (
                    <section key={id} className="artworkSection">
                        <div className="artworkGrid">
                            <img src={img} alt={title} />
                            <div className="artworkInfo">
                                <h4>{title}</h4>
                                <p>${price}</p>
                                <hr></hr>
                                <p>{`${desc.slice(0,1).toUpperCase()}${desc.slice(1)}`}</p>
                                <Link to={`/singleartwork/${id}`}>Learn more</Link>
                            </div>
                        </div>
                    </section>
                );
            })}
            </div>
        </>
    )
}

export default Artwork;
