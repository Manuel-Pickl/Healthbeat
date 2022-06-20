import { useState } from "react"


export default function ExerciseInfo({exercise}) {
  const exerciseName = exercise[0];
  const difficulty = exercise[2];
  const duration = exercise[1]; // in seconds
  const description = exercise[3];

  const [descriptionVisible, toggleDescriptionVisiblity] = useState(false)

  return (
    <>
      {/* exercise details */}
      <h2>Übung: <span>{exerciseName}</span></h2>
        {/* ToDo Berkay: dummy till video player is working */}
        <img 
          src="https://www.operatorkita.com/wp-content/uploads/2022/04/Link-Pagal-Tissue-Lelo-Video-Download-Mp4-1.jpg" 
          alt="exercise_video"/>
        {/* <video width="320" height="240" controls track>
          <source src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" type="video/mp4"/>
          <track src="https://gist.githubusercontent.com/samdutton/ca37f3adaf4e23679957b8083e061177/raw/e19399fbccbc069a2af4266e5120ae6bad62699a/sample.vtt" kind="subtitles" srclang="en" label="English"/>
          Your browser does not support the video tag.
        </video> */}
        <div>Schwierigkeit: {difficulty}</div>
        <div>Dauer: {parseDuration(duration)}</div>
  
  
        {/* exercise description */}
        <button onClick={() => toggleDescriptionVisiblity(!descriptionVisible)}>
          Übungsbeschreibung
          {descriptionVisible 
            ? <div>close icon</div>
            : <div>open icon</div>
          }
        </button>
          {descriptionVisible && 
          <div>{description}</div>
        }
    </>
  )
}

// duration in seconds
function parseDuration(duration) {
    let minutes = Math.floor(duration / 60)
    let seconds = duration % 60
  
    return `${minutes}:${seconds < 10 ?  `0${seconds}` : seconds}`
  }