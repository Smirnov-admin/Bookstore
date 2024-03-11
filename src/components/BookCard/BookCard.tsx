import './BookCard.scss'

function BookCard() {

  return (
    <>
        <div className="bookCard_element">
            <div className="bookCard_element_information">
                <div className="bookCard_element_image">
                    <img src="../../../public/imageBook.png" alt="book" />
                </div>
                <div className="bookCard_element_description">
                    <h2 className="bookCard_element_title">MASTERING ROS FOR ROBOTICS PROGRAMMING</h2>
                    <p className="bookCard_element_author">by Lentin Joseph, Apress 2018</p>
                </div>
                <div className="bookCard_element_priceAndRating">
                    <div className="bookCard_element_price">
                        <p className="cardBook_price">$31.38</p>
                    </div>
                    <div className="bookCard_element_rating">
                        <p className="bookCard_reting">4</p>
                        <div className="bookCard_reting_imageStar">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9324 13.5C10.8312 13.5 10.7294 13.4765 10.6358 13.4287L7.00032 11.5662L3.36353 13.4287C3.14971 13.5391 2.88944 13.5205 2.69281 13.3816C2.49745 13.2428 2.39945 13.0079 2.44017 12.7754L3.13444 8.83278L0.192556 6.04174C0.0188301 5.87686 -0.0435331 5.6308 0.0309209 5.40642C0.106011 5.18205 0.305191 5.01841 0.544462 4.98432L4.61143 4.40541L6.4295 0.817282C6.64396 0.394565 7.35604 0.394565 7.5705 0.817282L9.38857 4.40541L13.4555 4.98432C13.6954 5.01841 13.8946 5.18205 13.9691 5.40642C14.0435 5.6308 13.9812 5.87686 13.8074 6.04174L10.8656 8.83278L11.5598 12.7754C11.6006 13.0079 11.5026 13.2428 11.3066 13.3816C11.1952 13.4603 11.0641 13.5 10.9324 13.5Z" fill="#313037" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BookCard