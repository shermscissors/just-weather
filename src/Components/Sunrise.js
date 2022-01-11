export default function Sunrise(props) {
    return(
        <div id="weather-sunrise">
            <h1 className="underline">Misc</h1>
            <h3>Sunrise: {props.sunrise}</h3>
            <h3>Sunset: {props.sunset}
            </h3>
            <h3>Moon Phase: {props.moon}</h3>
        </div>
    )
}