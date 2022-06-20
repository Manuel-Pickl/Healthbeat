export default function Exercise() {
    // ToDo Berkay: get value from previous survey
    const complainRegion = "Hüftbeschwerden"

    // for now use fix value
    const totalExerciseDuration = "15 Minuten"

    // randomize, when we get more infos
    const tip = "P.S. Denke an Deine Sitzposition bei der Arbeit."

    return(
        <>
            <div>
            <h2>Sehr gut!</h2>
            <p>Du hast heute {totalExerciseDuration} Minuten gegen deine {complainRegion} gearbeitet.</p>
            <p>{tip}</p>
            <button
                onClick={() => openLandingPage()}>
                Abschließen
            </button>
            <button
                onClick={() => openContactPage()}>
                Kontakt
            </button>
            </div>
        </>
    );
}

function openLandingPage() {
    // ToDo Berkay: redirect correctly
    alert("openLandingPage()");
}

function openContactPage() {
    // ToDo Berkay: redirect correctly
    alert("openContactPage()");
}