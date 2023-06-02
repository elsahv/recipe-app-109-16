import Link from "next/link";

const Header = () => {
  return (
    <div className="navbar">
      <Link href="/home">home</Link>
      <Link href="/create-recipe">Create Recipe</Link>
      <Link href="/saved-recipes">Saved Recipes</Link>
      <Link href="/auth">Login/Register</Link>
    </div>
  );
};

export default Header;
