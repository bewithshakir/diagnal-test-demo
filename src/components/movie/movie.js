
export const MovieElem = ({captionName, poster})=> {
    let fileName="";
    if (poster === "posterthatismissing.jpg") {
        fileName = "placeholder_for_missing_posters.png"
    } else {
        fileName = poster;
    }
    return (
        <figure className="figure">
            <img src={require(`../../assets/images/${fileName}`).default} className="figure-img img-fluid rounded" alt="..."/>
            <figcaption className="figure-caption">{captionName}</figcaption>
        </figure>
    )
}
