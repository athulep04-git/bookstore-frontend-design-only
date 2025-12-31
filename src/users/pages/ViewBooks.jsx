import React from 'react'
import Header from '../components/Header'
import BookStoreFooter from '../../components/BookStoreFooter'
import { Button } from 'flowbite-react'

function ViewBooks() {
  return (
    <div>
        <Header/>
          <div className="flex justify-evenly flex-wrap p-20">
  <div className="w-1/3  ...">
    <img src="https://openclipart.org/image/2400px/svg_to_png/219894/antiFlash-icons-book.png"  alt="" />
  </div>
  <div className="w-2/3 flex flex-wrap ...">
  <h1>   title :</h1>
      <h3>    Author : </h3>
    <h4>  Price : </h4>
      <p>   Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptatibus reprehenderit minus impedit aliquam. Commodi illo velit et excepturi quam! Voluptatibus consectetur cumque nisi laudantium molestiae, excepturi nihil aliquam minus.
        Soluta enim nostrum corporis quae ipsum. Distinctio cumque laborum iure blanditiis sit reprehenderit, iusto, quis at in corporis quaerat sed quae, veniam nemo repellat corrupti illo sunt deleniti architecto dicta.
        Reiciendis molestiae quasi libero dolores non commodi, praesentium quo sequi earum nulla a laboriosam consequuntur consequatur perferendis debitis! Id molestiae error voluptatibus vel repudiandae aliquam, eaque earum! Nulla, asperiores maiores.
</p>
     
        <div className='flex'>
          <Button>back</Button>
          <Button>Buy</Button>
        </div>
  </div>
  
</div>
        <BookStoreFooter/>
    </div>
  )
}

export default ViewBooks
