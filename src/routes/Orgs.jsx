import React, { useTransition } from 'react';
import { useLoaderData, useNavigation } from "react-router";

export const loader = async()=> await(await fetch('https://api.github.com/users/HectorBlisS/orgs')).json();

export default function Orgs(){
    const orgs = useLoaderData();
    const transition = useNavigation();
    console.log("?",transition)
    return (
        <>
        {transition.state !== 'idle' ? <div >Cargando...</div>: <h2>{orgs.length} Orgs</h2>}
        </>
    )
}