import { useState } from "react";
import { Search } from "../../components/ui/Search";
import { ButtonTheme } from "../../features/theme/ButtonTheme";
import Logo from "../Logo/logo";
import { SliderFilm } from "../../widgets/slider/Slider";


export function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Logo />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ButtonTheme />
      <SliderFilm searchTerm={searchTerm} />
    </>
  );
}