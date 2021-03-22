import Pet from "./Pet.jsx";

const Results = (props) => {
  return (
    <div className="search">
      {!props.pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        props.pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
