import React from "react";

const Logo: React.FC = () => {
    return (
        <React.Fragment>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-d" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 4h6a5 5 0 0 1 5 5v6a5 5 0 0 1 -5 5h-6v-16" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-l" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 4v16h10" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-m" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6 20v-16l6 14l6 -14v16" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-a" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 20v-12a4 4 0 0 1 4 -4h2a4 4 0 0 1 4 4v12" />
                <line x1="7" y1="13" x2="17" y2="13" />
            </svg>
        </React.Fragment>
    )
}

export default Logo;