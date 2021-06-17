import PlacesContent from "./PlacesContent";

function MainContent(): JSX.Element {
    return(
        <main>
            <PlacesContent
            image= {"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/The_Clocktower_at_Bexleyheath.jpg/240px-The_Clocktower_at_Bexleyheath.jpg"}
            title= {"Bexleyheath"}
            subTitle= {{town: "Bexleyheath", City: "London", mapLink: "(map link)"}}
            comment= {"Hometown"}
            />
        </main>
    )
}

export default MainContent;