import React from "react";

export const Users = () => {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:8080/users`)
       .then((res) => res.json())
       .then((res) => setUsers(res))
       .catch((err) => console.log(err));
    },[]);

    return (
        <table style={
            {
                border:"1px solid red"
            }
        }>
            <thead>
                <tr>
                    <th style={{border:"1px solid black"}}>Name</th>
                    <th style={{border:"1px solid black"}}>Age</th>
                    <th style={{border:"1px solid black"}}>Date of Birth</th>
                    <th style={{border:"1px solid black"}}>State of Adress</th>
                    <th style={{border:"1px solid black"}}>Adress</th>
                    <th style={{border:"1px solid black"}}>Pincode</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr>
                     <td style={{border:'1px solid teal'}}>{user.name}</td>   
                     <td style={{border:'1px solid teal'}}>{user.age}</td>   
                     <td style={{border:'1px solid teal'}}>{user.dateOfBirth}</td>   
                     <td style={{border:'1px solid teal'}}>{user.stateOfResisdence}</td>   
                     <td style={{border:'1px solid teal'}}>{user.address}</td>   
                     <td style={{border:'1px solid teal'}}>{user.pincode}</td>   
                    </tr>
                ))}
            </tbody>
        </table>
    )
}