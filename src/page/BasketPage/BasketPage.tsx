import './BasketPage.scss'

function BasketPage() {

  return (
    <>
       <div className="basketPage_section">
            <div className="basketPage_elements">
                <div className="basketPage_elements_back">
                    <button className='basketPage_btnBack'>
                        <svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00141 0.998721C8.00141 1.25872 7.90141 1.50872 7.71141 1.70872L3.41141 5.99872L41.0014 5.99872C41.5514 5.99872 42.0014 6.44872 42.0014 6.99872C42.0014 7.54872 41.5514 7.99872 41.0014 7.99872L3.41141 7.99872L7.71141 12.2887C8.10141 12.6787 8.10141 13.3187 7.71141 13.7087C7.32141 14.0987 6.68141 14.0987 6.29141 13.7087L0.291406 7.70872C0.201406 7.61872 0.131406 7.50872 0.0814063 7.38872C0.0614063 7.33872 0.0414063 7.29872 0.0414063 7.24872C-0.00859375 7.08872 -0.00859375 6.90872 0.0414063 6.74872C0.0414063 6.69872 0.0614063 6.65872 0.0814063 6.60872C0.131406 6.48872 0.201406 6.37872 0.291406 6.28872L6.29141 0.288721C6.68141 -0.101279 7.32141 -0.101279 7.71141 0.288721C7.90141 0.488721 8.00141 0.738721 8.00141 0.998721Z" fill="#313037" />
                        </svg>
                    </button>
                </div>
                <div className="basketPage_elements_title">
                    <h1 className="basketPage_title">YOUR CART</h1>
                </div>
                <div className="basketPage_item_list">
                    <div className="basketPage_item">
                        <div className="basketPage_elements_imageAndDescription">
                            <div className="basketPage_elements_image">
                                <img src="../../../public/imageBook.png" alt="book" />
                            </div>
                            <div className="basketPage_elements_descriptionAndCount">
                                <div className="basketPage_elements_description">
                                    <h2 className="basketPage_description_title">MASTERING ROS FOR ROBOTICS PROGRAMMING</h2>
                                    <p className="basketPage_elements_author">by Lentin Joseph, Apress 2018</p>
                                </div>
                                <div className="basketPage_elements_count">
                                    <button className='basketPage_elements_btnTakeAway'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="6" y="11" width="12" height="2" rx="1" fill="#313037" />
                                        </svg>
                                    </button>
                                    <p className='basketPage_elements_count_text'>1</p>
                                    <button className='basketPage_elements_btnAdd'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19 11H13V5C13 4.448 12.552 4 12 4C11.448 4 11 4.448 11 5V11H5C4.448 11 4 11.448 4 12C4 12.552 4.448 13 5 13H11V19C11 19.553 11.448 20 12 20C12.552 20 13 19.553 13 19V13H19C19.553 13 20 12.552 20 12C20 11.448 19.553 11 19 11Z" fill="#313037" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="basketPage_elements_price">
                            <p className="basketPage_price">$31.38</p>
                        </div>
                        <div className="basketPage_elements_btnDelete">
                            <button className='basketPage_btnDelete'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6569 16.2426L13.4142 12L17.6569 7.75735C18.0472 7.36702 18.0472 6.73346 17.6569 6.34313C17.2665 5.95281 16.633 5.95281 16.2426 6.34313L12 10.5858L7.75736 6.34313C7.36704 5.95281 6.73347 5.95281 6.34315 6.34313C5.95282 6.73346 5.95282 7.36702 6.34315 7.75735L10.5858 12L6.34315 16.2426C5.95212 16.6337 5.95282 17.2665 6.34315 17.6568C6.73347 18.0472 7.36633 18.0479 7.75736 17.6568L12 13.4142L16.2426 17.6568C16.6337 18.0479 17.2665 18.0472 17.6569 17.6568C18.0472 17.2665 18.0479 16.6337 17.6569 16.2426Z" fill="#313037" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='basketPage_element_checkPrice'>
                    <div className="basketPage_elements_check">
                        <div className="basketPage_elements_check_description">
                            <p className='basketPage_elements_total'>TOTAL:</p>
                            <p className="basketPage_elements_total">$31.38</p>
                        </div>
                        <div className="basketPage_elements_btnCheckOut">
                            <button className='basketPage_checkOut'> CHECK OUT</button>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </>
  )
}

export default BasketPage