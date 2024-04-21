import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const Remove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      {products.length === 0 ? (
        <p className="text-xl font-bold text-gray-600">Your cart is empty</p>
      ) : (
        <div className="flex flex-wrap gap-8 justify-center">
          {products.map((item, index) => (
            <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden" key={index}>
              <img className="w-full h-48 object-cover" src={item.image} alt="Product Image"/>
              <div className="p-4">
                <h3 className="text-gray-900 font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-xl">${item.price}</span>
                  <button onClick={() => Remove(item.id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
