import Card from "./Card"
const CardGrid = ({filteredData}) =>{
    return(
        <div className="grid grid-cols-2 gap-4 w-10/12 mx-auto">
        {filteredData.length > 0 ? filteredData.map(data => (<Card key={data.id} profile={data}/>)) : "No data"}
        </div>
    )
}

export default CardGrid