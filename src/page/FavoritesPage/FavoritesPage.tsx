import PopularBooks from '../../components/PopularBooks/PopularBooks'
import './FavoritesPage.scss'

function FavoritesPage() {

  return (
    <>
       <div className="favoritesPage_section">
            <div className="favoritesPage_elements">
                <div className="favoritesPage_elements_back">
                    <button className='favoritesPage_btnBack'>
                        <svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00141 0.998721C8.00141 1.25872 7.90141 1.50872 7.71141 1.70872L3.41141 5.99872L41.0014 5.99872C41.5514 5.99872 42.0014 6.44872 42.0014 6.99872C42.0014 7.54872 41.5514 7.99872 41.0014 7.99872L3.41141 7.99872L7.71141 12.2887C8.10141 12.6787 8.10141 13.3187 7.71141 13.7087C7.32141 14.0987 6.68141 14.0987 6.29141 13.7087L0.291406 7.70872C0.201406 7.61872 0.131406 7.50872 0.0814063 7.38872C0.0614063 7.33872 0.0414063 7.29872 0.0414063 7.24872C-0.00859375 7.08872 -0.00859375 6.90872 0.0414063 6.74872C0.0414063 6.69872 0.0614063 6.65872 0.0814063 6.60872C0.131406 6.48872 0.201406 6.37872 0.291406 6.28872L6.29141 0.288721C6.68141 -0.101279 7.32141 -0.101279 7.71141 0.288721C7.90141 0.488721 8.00141 0.738721 8.00141 0.998721Z" fill="#313037" />
                        </svg>
                    </button>
                </div>
                <div className="favoritesPage_elements_title">
                    <h1 className="favoritesPage_title">FAVORITES</h1>
                </div>
                <div className="favoritesPage_item_list">
                    <div className="favoritesPage_item">
                        <div className="favoritesPage_elements_imageAndDescription">
                            <div className="favoritesPage_elements_image">
                                <img src="../../../public/imageBook.png" alt="book" />
                            </div>
                            <div className="favoritesPage_elements_descriptionAndPrice">
                                <div className="favoritesPage_elements_description">
                                    <h2 className="favoritesPage_description_title">MASTERING ROS FOR ROBOTICS PROGRAMMING</h2>
                                    <p className="favoritesPage_elements_author">by Lentin Joseph, Apress 2018</p>
                                    <p className="favoritesPage_price">$31.38</p>
                                </div>
                            </div>
                        </div>
                        <div className="favoritesPage_elements_btnFavorites">
                            <button className='favoritesPage_btnFavorites'>
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.612 1.41452C16.1722 0.966073 15.65 0.610337 15.0752 0.367629C14.5005 0.124922 13.8844 0 13.2623 0C12.6401 0 12.0241 0.124922 11.4493 0.367629C10.8746 0.610337 10.3524 0.966073 9.91255 1.41452L8.99977 2.34476L8.08699 1.41452C7.19858 0.509117 5.99364 0.0004693 4.73725 0.000469309C3.48085 0.000469319 2.27591 0.509117 1.38751 1.41452C0.499101 2.31992 9.36088e-09 3.5479 0 4.82833C-9.36088e-09 6.10875 0.499101 7.33674 1.38751 8.24214L2.30029 9.17238L8.99977 16L15.6992 9.17238L16.612 8.24214C17.0521 7.79391 17.4011 7.26171 17.6393 6.67596C17.8774 6.0902 18 5.46237 18 4.82833C18 4.19428 17.8774 3.56645 17.6393 2.9807C17.4011 2.39494 17.0521 1.86275 16.612 1.41452Z" fill="#FC857F" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="favoritesPage_item">
                        <div className="favoritesPage_elements_imageAndDescription">
                            <div className="favoritesPage_elements_image">
                                <img src="../../../public/imageBook.png" alt="book" />
                            </div>
                            <div className="favoritesPage_elements_descriptionAndPrice">
                                <div className="favoritesPage_elements_description">
                                    <h2 className="favoritesPage_description_title">MASTERING ROS FOR ROBOTICS PROGRAMMING</h2>
                                    <p className="favoritesPage_elements_author">by Lentin Joseph, Apress 2018</p>
                                    <p className="favoritesPage_price">$31.38</p>
                                </div>
                            </div>
                        </div>
                        <div className="favoritesPage_elements_btnFavorites">
                            <button className='favoritesPage_btnFavorites'>
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.612 1.41452C16.1722 0.966073 15.65 0.610337 15.0752 0.367629C14.5005 0.124922 13.8844 0 13.2623 0C12.6401 0 12.0241 0.124922 11.4493 0.367629C10.8746 0.610337 10.3524 0.966073 9.91255 1.41452L8.99977 2.34476L8.08699 1.41452C7.19858 0.509117 5.99364 0.0004693 4.73725 0.000469309C3.48085 0.000469319 2.27591 0.509117 1.38751 1.41452C0.499101 2.31992 9.36088e-09 3.5479 0 4.82833C-9.36088e-09 6.10875 0.499101 7.33674 1.38751 8.24214L2.30029 9.17238L8.99977 16L15.6992 9.17238L16.612 8.24214C17.0521 7.79391 17.4011 7.26171 17.6393 6.67596C17.8774 6.0902 18 5.46237 18 4.82833C18 4.19428 17.8774 3.56645 17.6393 2.9807C17.4011 2.39494 17.0521 1.86275 16.612 1.41452Z" fill="#FC857F" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
       </div>
       
       <PopularBooks/>
    </>
  )
}

export default FavoritesPage