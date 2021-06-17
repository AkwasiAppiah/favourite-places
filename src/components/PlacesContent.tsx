
interface PlacesContentProps {
    image: string;
    title: string;
    subTitle: {town: string; City: string; mapLink: string;}
    comment: string;
}

function PlacesContent (props: PlacesContentProps): JSX.Element {
    return(
        <section>
            <p>
          <img src= {props.image} alt = ""  width = "200"  height = "200" />
            </p>
            <h2>
                {props.title}
            </h2>
            <h3>
                {props.subTitle.town}, {props.subTitle.City}, {props.subTitle.mapLink}
            </h3>
            <p>
                {props.comment}
            </p>

        </section>
    )

}

export default PlacesContent