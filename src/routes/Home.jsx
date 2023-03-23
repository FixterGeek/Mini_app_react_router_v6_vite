import { useState } from "react";
import { Outlet, useLoaderData } from "react-router";
import { Link } from "react-router-dom";

export const loader = async () => {
    const result = await fetch('https://api.github.com/users/hectorbliss');
    const data = await result.json();
    return {data}
}

export default function Home(){
    const {data} = useLoaderData()

    return (
        <section>
            <img src={data.avatar_url} width="200" alt="avatar"/>
            <h2>{data.login}</h2>
            <p>Seguidores: <strong>
                {data.followers}
                </strong>
                </p>
            <p>{data.bio}</p>
            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                <Link to="gists">
                    Gists
                </Link>
                <Link to="orgs">
                    Orgs
                </Link>
                <Link to="repos">
                    Repos
                </Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </section>
    )
}