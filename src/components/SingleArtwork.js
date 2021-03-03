import React, {useState, useEffect} from 'react'
import artworkData from '../artworkData'
import {Link, useParams} from 'react-router-dom'
const SingleArtwork = () => {
    const [title,setTitle] = useState('default name');
    const [price,setPrice] = useState('default price');
    const [img,setImg] = useState('default img');
    const [desc,setDesc] = useState('default desc');
    const {id} = useParams();
    let newArtwork = {};
    useEffect(()=> {
        newArtwork = artworkData.find((artwork)=>artwork.id === parseInt(id));
        setImg(newArtwork.img);
        setTitle(newArtwork.title);
        setPrice(newArtwork.price);
        setDesc(newArtwork.desc);
        console.log(newArtwork.img);
    }, []);
    
    return (
        <section className="singleArtwork-section">
            <h2>{title}</h2>
            <p>${price}</p>
            <img src={`.${img}`} alt={title} />
            <p>{`${desc.slice(0,1).toUpperCase()}${desc.slice(1)}`}</p>
            <Link to='/artwork'>back to artwork</Link>
        </section>
    );
}

export default SingleArtwork;
