import React from "react";
import f from './f.jpg';

function Body(){
    return(
        <>
        <p style={{textAlign:"center"}}>Blaga klima, bogata bioraznolikost, ugodna atmosfera te 250 kulturno zabavnih manifestacija – samo su neki od epiteta zahvaljujući kojima se lošinjski arhipelag na svjetskom tržištu pozicionirao kao Otok vitalnosti.
        Tradicija zdravstvenog turizma dulja od 125 godina važan je segment ponude, a kombinacija mirisa guste borove šume i ljekovitog bilja te aerosoli mora kreiraju jedinstvenu aromaterapiju na otvorenom.
         
        More visoke kakvoće i zrak prve kvalitete s više od 200 sunčanih dana godišnje s  1018 biljnih vrsta od kojih  939 pripada autohtonoj flori, Lošinj čini aromaterapeutskim središtem i destinacijom vitalnosti, zdravstvenog turizma, ekološki osviještenog i modernog odredišta.</p>
        <img className="slika" style={{display:"block",marginLeft:"auto",marginRight:"auto",}} src={f} alt="Slika" ></img>
        </>
    )
}

export default Body;