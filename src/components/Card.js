const Card = ({profile}) =>{
    const {id, picture, firstName, lastName, title} = profile // If you don't want to pass the object prroperties as props, you can destructure her, so you don't have to repeat "profile" in so many places
    return(
        <div className=' bg-white px-[1.5rem] py-[1.5rem] flex gap-3' key ={id}>
            <div>
                <img src={picture} alt={firstName}/>
            </div>
         <div>
         <p>
            {id}
         </p>
         <p>
           {title} {firstName} {lastName}
         </p>
         </div>
        </div>
    )
}
export default Card