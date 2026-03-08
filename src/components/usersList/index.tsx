import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import axios from 'axios'

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
        // const response = await fetch("https://jsonplaceholder.typicode.com/users")
        // const userData = await response.json()

        const data = await axios.get('https://dummyjson.com/products')
        console.log(data , 'axios data')
        // navigate('counter')
        // setUser(userData)
    }


    return (
        <div>
            <h2>Users List</h2>

            <div className="bg-gray-600">
                {users.map((data: UserDataInterface, key) => {
                    // const { id, name, phone, website } = data
                    return (
                        <div
                            id="id42dfff2ba1104"
                            className="w-full max-w-[350px]"
                            style={{ opacity: 1, transform: "none" }}
                        >
                            <button className="block w-full overflow-hidden transition-all duration-200 rounded-md shadow-xl group bg-bg-secondary dark:shadow-2xl">
                                <div className="overflow-hidden h-[200px]">
                                    <img
                                        alt="The Delux Network"
                                        loading="lazy"
                                        width={350}
                                        height={200}
                                        decoding="async"
                                        data-nimg={1}
                                        className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110 group-focus:scale-110"
                                        sizes="(max-width: 640px) 100vw, 350px"
                                        srcSet="/_next/image?url=%2Fimages%2Fprojects%2Fthe-delux-network.png&w=640&q=75 640w, /_next/image?url=%2Fimages%2Fprojects%2Fthe-delux-network.png&w=750&q=75 750w, /_next/image?url=%2Fimages%2Fprojects%2Fthe-delux-network.png&w=828&q=75 828w, /_next/image?url=%2Fimages%2Fprojects%2Fthe-delux-network.png&w=1080&q=75 1080w, /_next/image?url=%2Fimages%2Fprojects%2Fthe-delux-network.png&w=1200&q=75 1200w, /_next/image?url=%2Fimages%2Fprojects%2Fthe-delux-network.png&w=1920&q=75 1920w, /_next/image?url=%2Fimages%2Fprojects%2Fthe-delux-network.png&w=2048&q=75 2048w, /_next/image?url=%2Fimages%2Fprojects%2Fthe-delux-network.png&w=3840&q=75 3840w"
                                        src="/_next/image?url=%2Fimages%2Fprojects%2Fthe-delux-network.png&w=3840&q=75"
                                        style={{ color: "transparent" }}
                                    />
                                </div>
                                <div className="p-4 py-3 space-y-1">
                                    <div className="flex items-center justify-between">
                                        <p className="font-mono text-xs capitalize">
                                            Nextjs | TailwindCSS | Hubspot
                                        </p>
                                        <div className="flex items-center space-x-1.5">
                                            <a
                                                href="https://github.com/syedarhamali/the-delux-network"
                                                className="block duration-200 hover:text-accent"
                                                target="_blank"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    aria-hidden="true"
                                                    role="img"
                                                    className="iconify iconify--tabler"
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
                                                    />
                                                </svg>
                                            </a>
                                            <a
                                                href="https://the-deluxe-network-frontend.vercel.app/"
                                                className="block duration-200 hover:text-accent"
                                                target="_blank"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    aria-hidden="true"
                                                    role="img"
                                                    className="iconify iconify--ci"
                                                    width={22}
                                                    height={22}
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M10 5H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 6.52 5 7.08 5 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.987.218-2.105V14m1-5V4m0 0h-5m5 0l-7 7"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <h4 className="flex justify-between font-medium capitalize duration-200 group-hover:text-accent">
                                        <span>The Delux Network</span>
                                        <span className="mr-1">2024</span>
                                    </h4>
                                </div>
                            </button>
                        </div>

                    )
                })}
            </div>

        </div>
    )
}


export default UsersList