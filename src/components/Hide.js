export default function Hide(){
    //Have a mock list of items to be displayed
    //Have a mock user object
        // Toggle user status of admin and check if a button is visible next to items
    const items = [
        'Azure',
        'PCF',
        'AWS',
        'GCP'
    ] 
    const user = {
        role: 'admin',
        name: 'adm'
    }

    const PERMITTED_USER = 'admin';

    function displayButton(){
      if(user.role == PERMITTED_USER){
          return <button>Delete</button>
      }
      else{
          return <></>;
      }
    }
    return(
        <div>
            <ul>
            {items.map(item => {
                return(
                    <>
                    <li key = {item.toString()}> {item} </li>
                    {displayButton()}
                    </>
                )
            })}
            </ul>
        </div>
    )
}