
// Accepting variables and with them creates top of the game which contains title and X|O points

function Points({title, x_pts, o_pts}){
    
    return (
        <div>
            <h2 className="title">{title}</h2>
            <h2 className='p_title'>Points:</h2>
            <p className='pts'>X - {x_pts}</p>
            <p className='pts'>O - {o_pts}</p>
        </div>
    )
}
// exporting component
export default Points