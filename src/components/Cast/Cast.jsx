import Card from "../Card";

function Cast({ cast }) {
  return (
    <div className="cast">
      {cast.map(function(item) {
        return <Card item={item} key={item.id} />
      })}
    </div>
  )
}

export default Cast;