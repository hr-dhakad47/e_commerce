import React, { useEffect, useState } from 'react'

const AddCard = () => {
    const [addToCard, setAddToCard] = useState([])

    useEffect(()=>{ 
      let cardData = JSON.parse(localStorage.getItem("addCardData"))
      setAddToCard(cardData?cardData:[])
    //   localStorage.getItem("")
    },[])
    const deleteCardData = (data)=>{
      console.log(data)
      let  newArr = addToCard.filter((cardid)=>cardid.id != data.id)
      console.log(newArr)
      setAddToCard(newArr)
     }
  return (
    <div className='addtocard'>
    <table class="table cart">
  <thead class="cart-header">
    <tr>
      <th>Title</th>
      <th>Action</th>
      <th colspan="2" class="has-text-right pl-0">Price</th>
    </tr>
  </thead>

  

  <tbody>
  {addToCard.map((card)=>{
          return(
    <tr class="cart-row">
      <td class="cart-product-media  cart-product-row">
        <div class="nowrap m-0" href="/store/playstation-5-kopiya">
          <div class="media">
            <figure class="media-left my-0 ml-0 mr-3">
              <p class="image is-64x64">
                <img src={card.image} width={"100px"}/>
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong class="title is-6">
                   {card.title}</strong><br/>
                  {/* <span class="nowrap tag block is-info is-light">{card.price}.</span>/ */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td class="cart-product-row cart-qnt">
        <div class="cart-qnt-counter field has-addons m-0">
          <p class="control">
          <button onClick={()=>deleteCardData(card)} class="cart-product-button button">
              Delete
            </button>
          </p>
          
        </div>


      </td>
      <td class="cart-product-subtotal has-text-right nowrap">
        <div class="is-relative"><span>$ {card.price}</span></div>

      </td>
    </tr>)})}
   
  </tbody>
</table>
    </div>
  )
}

export default AddCard