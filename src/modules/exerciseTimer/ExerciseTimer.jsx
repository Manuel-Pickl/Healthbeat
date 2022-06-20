export default function ExerciseTimer() {
  // ToDo Berkay: get actual remaining time
  let remainingTime = "24:04";
  
  return (
    <>
      <div>
        <div>
          Nächste Übung
        </div>
        <div>
          {remainingTime}
        </div>
      </div>
      <button
        onClick={() => showExercisePage()}>
          Übungseinheit starten
      </button>
    </>
  )
}

function showExercisePage() {
  // ToDo Berkay: redirect correctly
  alert("showExercisePage()");
}