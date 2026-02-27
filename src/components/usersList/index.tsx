import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

interface UserDataInterface {
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
}

function UsersList() {
    const [users, setUser] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        getData()

    }, [])

    const getData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const userData = await response.json()
        navigate('/counter')
        setUser(userData)
    }


    return (
        <div>
            <h2>Users List</h2>

            {users.map((data: UserDataInterface, key) => {
                const { id, name, phone, website } = data
                return (
                    <div key={key}>
                        {id}
                        <h1>{name}</h1>
                        <h3>{phone}</h3>
                        <h5>{website}</h5>
                    </div>
                )
            })}
        </div>
    )
}


export default UsersList