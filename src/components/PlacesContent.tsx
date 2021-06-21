// interface PlacesContentProps {
//   image: string;
//   title: string;
//   subTitle: { town: string; City: string; mapLink: string };
//   comment: string;
// }

function PlacesContent(): JSX.Element {
  const arrayofPlace = [
    {
      place: "London",
      countryName: "United Kingdom",
      mainImage:
        "https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1970&q=80",
      googleMaps:
        "https://www.google.com/maps/place/London/@51.5285582,-0.2416812,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583",
      textExplanation: "This is a great place to be !",
    },
    {
      place: "Bexleyheath",
      countryName: "United Kingdom",
      mainImage:
        "https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1970&q=80",
      googleMaps:
        "https://www.google.com/maps/place/London/@51.5285582,-0.2416812,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583",
      textExplanation: "This is a great place to be !",
    },
  ];

  return (
    <section>
        {
            arrayofPlace.map((singlePlace)=>(
                <>
                <img src={singlePlace.mainImage} alt={singlePlace.place} width="200" height="200"/>

              <h2>{singlePlace.place}</h2>

              <p>{singlePlace.textExplanation}</p>
              </>
            ))
        }
    </section>
  );
}

export default PlacesContent;
