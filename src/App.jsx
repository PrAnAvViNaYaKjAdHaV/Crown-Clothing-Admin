import Logo from "./assets/crown.svg";
import "./App.css";
import Category from "./Components/category.compoenent";
import CategoryItem from "./Components/categoryItem.compoenent";
import CategoryAdd from "./Components/categoryAdd.component";
import { FcGoogle } from "react-icons/fc";
import { BiLogOut } from "react-icons/bi";
import { SignInWithGoogle, SingOutWithGoogle, auth } from "./firebase/firebase";
import { useState } from "react";
console.log(auth.currentUser);
function App() {
  const [User, setUser] = useState(auth.currentUser);
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="flex align-bottom">
          <img src={Logo} />
          <h1 className="text-3xl">CrownClothing Admin</h1>
        </div>
        {User === null ? (
          <FcGoogle
            size={29}
            onClick={async () => {
              await SignInWithGoogle();
              setUser(auth.currentUser);
            }}
          />
        ) : (
          <BiLogOut
            onClick={async () => {
              await SingOutWithGoogle();
              setUser(auth.currentUser);
            }}
          />
        )}
      </div>

      {User === null ? (
        <div className="flex h-96 items-center justify-center">
          <h1 className="text-2xl mr-3">Plzz login</h1>
          <FcGoogle size={26} />
        </div>
      ) : User.email !== "pj8841466@gmail.com" ? (
        <div className="flex h-96 items-center justify-center">
          <h1 className="text-2xl mr-3">Plzz login With Admin id</h1>
          <FcGoogle size={26} />
        </div>
      ) : (
        <div className="flex mt-8">
          <Category />
          <CategoryItem />
          <CategoryAdd />
        </div>
      )}
    </div>
  );
}

export default App;
