import React, { useTransition } from 'react';
import { useLoaderData, useNavigation } from "react-router";

export const loader = async()=> await(await fetch('https://api.github.com/users/HectorBlisS/gists')).json();

export default function Gists(){
    const gists = useLoaderData();
    const transition = useNavigation();
    console.log("?",transition)
    return (
        <>
        {transition.state !== 'idle' ? <div >Cargando...</div>: <h2>{gists.length} Gists</h2>}
        </>
    )
}