import React from 'react'

const Menu = ({data}) => {

    console.log(data)
  return (
    <div className='menu'>

        <h1> SUSHI FOOD</h1>
        <div className='menu-container'>

            {
                data && data?.map((item, index) => (
                   
                        <div className='menu-container-card'>
                            <img src={item?.food} alt="" />
                            <p>{ item?.name} </p>

                        </div>
                    
                ))
            }

            

        </div>
    </div>
  )
}

export default Menu