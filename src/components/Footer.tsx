import React from 'react'
import { footerLinks } from '../constants'
import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <div
    className='bg-brand-white '
    >
        <footer
        className='flex gap-2 justify-between max-w-screen-lg mx-auto py-8 px-3'
        >
            <address>
                Adresse: <br />
                <br />
                Intet nyt - Godt nyt ApS <br />
                <br />
                Tulipanvej 232
                7320
                Valby Øster
            </address>
            {footerLinks.map((l, index) => (
                <section
                key={l.title + index}
                >
                    <h3
                    className='pb-4'
                    >
                        {l.title}
                    </h3>
                    <ul>
                        {l.links.map(link => (
                            <li>
                                <Link 
                                to={link.url}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </footer>
    </div>
  )
}
