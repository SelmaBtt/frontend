import {
  Header,
  ContactInfo,
  Filter,
  SearchBar,
  SearchResult,
  ShowImages,
  Popup,
  FetchTe,
  Footer,
} from "@jennystarkfrk/components";
import "./App.css";
import ShowAllTea from "./components/ShowAllTea";

const App = () => {
  
  const teaData = [
    {
      id: 1,
      name: "Grönt te",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfamFahLTBWDTLUKhzs6wYtrsZd5HHjmTtA&s",
    },
    {
      id: 2,
      name: "Svart te",
      image:
        "https://www.healthifyme.com/blog/wp-content/uploads/2020/02/Black-Tea-2-1.jpg",
    },
    {
      id: 3,
      name: "Rött te",
      image: "https://kahlstkh.se/wp-content/uploads/2018/03/te-rooibos.jpg",
    },
    {
      id: 4,
      name: "Vitt te",
      image:
        "https://sakiproducts.com/cdn/shop/articles/20221107133813-white-tea-recipe-blog_800x800.jpg?v=1667828741",
    },
    {
      id: 5,
      name: "Jasmin silver needle",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmRhyN1GjGMoEycRZfpb9b4ahFBlH_H9Vrg",
    },
  ];

  const productsData = {
    name: "Jasmine te",
    image: "/public/Images/teaPlaceholder.png",
    effect:
      "hjälper till att lugna, förbättra mental klarhet och stärka ditt immunförsvar",
    caffeine: "Låg koffein",
    type: "Grönt, svart & vitt",
  };

  return (
    <>
      <Header />
      <ShowAllTea /> {/* Ta bort sen! För demo anledning nu tills Components är uppdaterat */}
      <ContactInfo />
      <SearchBar teaData={teaData}/>
      <SearchResult /> <br />
      <ShowImages />
      <Filter teaData={teaData} />
      <Popup productsData={productsData} />
      <FetchTe />
      <Footer />
    </>
  );
};

export default App;
