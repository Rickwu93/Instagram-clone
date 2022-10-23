import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/image3.jpeg'
import image4 from '../assets/image4.jpeg'
import image5 from '../assets/image5.jpeg'

const Gallery = () => {
  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput">
        <i className="add-photo-button fas fa-plus-square"></i>
      </label>

      <section className='gallery'>
        <div className="item">
            <img src={image1} className='item-image' alt="" />
            <button className="delete-button">Delete</button>
        </div>
        <div className="item">
            <img src={image2} className='item-image' alt="" />
            <button className="delete-button">Delete</button>
        </div>
        <div className="item">
            <img src={image3} className='item-image' alt="" />
            <button className="delete-button">Delete</button>
        </div>
        <div className="item">
            <img src={image4} className='item-image' alt="" />
            <button className="delete-button">Delete</button>
        </div>
        <div className="item">
            <img src={image5} className='item-image' alt="" />
            <button className="delete-button">Delete</button>
        </div>
      </section>
    </>
  );
};

export default Gallery