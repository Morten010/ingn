import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaUserAlt} from "react-icons/fa";
import {AiOutlineMenu} from "react-icons/ai"
import { getNav } from '../gql/queries';
import { useQuery } from '@apollo/client';
import {useUser, UserButton} from "@clerk/clerk-react"

export default function Navbar() {
    const [menuShown, setMenuShown] = useState(false)
    const {data, error, loading} = useQuery(getNav)
    const { isLoaded, isSignedIn, user } = useUser();


    console.log(data);
    
  return (
    <div
    className='bg-brand-white shadow-md'
    >
        <nav
        className='flex justify-between p-3 items-center max-w-screen-lg mx-auto relative'
        >
            <Link
            to="/"
            className='font-bold text-brand-red text-2xl'
            >
                INGN
            </Link>
            <ul
            className='gap-2 hidden sm:flex'
            >
                {data?.kategorier.map((k, index) => (
                    <li
                    className={data.kategorier.length - 1 === index ? "": "border-r pr-2" }
                    >
                        <Link
                        to={`/kategori/${k.id}`}
                        >
                            {k.category}
                        </Link>
                    </li>
                ))}
            </ul>

            <div
            className='text-xl text-brand-red flex gap-2'
            >
                {user ? (
                    <UserButton />
                ) : (<Link
                to="/login"
                >
                    <FaUserAlt />
                </Link>)}
                <div
                className="sm:hidden select-none"
                >
                    <AiOutlineMenu 
                    onClick={() => {
                        setMenuShown(!menuShown)
                    }}
                    />
                    {menuShown && <ul
                    className='absolute right-3 -bottom-3 translate-y-[100%] p-3 bg-brand-white shadow-md min-w-[150px] text-center flex flex-col gap-2'
                    >
                        {data?.kategorier.map((k, index) => (
                            <li>
                                <Link
                                to={`/kategori/${k.id}`}
                                >
                                    {k.category}
                                </Link>
                            </li>
                        ))}
                    </ul>}
                </div>
            </div>
        </nav>
    </div>
  )
}
