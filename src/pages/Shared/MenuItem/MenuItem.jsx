const MenuItem = ({ item }) => {
  const { image, price, recipe, name } = item;
  console.log(item);
  return (
    <div className="flex space-x-4">
      <img
        src={image}
        className="w-[100px] rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px]"
        alt=""
      />

      <div>
        <h3 className="uppercase">{name}--------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
