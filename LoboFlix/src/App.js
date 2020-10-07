import React from "react";
import dadosIniciais from "./data/dados.json";
import Banner from "./components/Banner";

function App() {
  return (
    <div>
      <Banner
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Projeto LoboFlix"}
      />
    </div>
     <section class="conteudo row text-center text-light service justify-content-center" id="conteudo">
     <div class="home_home col-lg-3 col-md-3 p-3">
       <a href="#">
         <video>
   <source src="" type="video/mp4">
   </video>
         <p>Video 01</p></a>
     </div>
    <div class="home_home col-lg-3 col-md-3 p-3">
         <a href="#">
         <video>
   <source src="" type="video/mp4">
   </video>
         <p>Video 02</p></a>
     </div>
     <div class="home_home col-lg-3 col-md-3 p-3">
       <a href="#">
   <video>
   <source src="" type="video/mp4">
   </video>
         <p>Video 03</p></a>
     </div>
     <div class="home_home col-lg-3 col-md-3 p-3">
         <a href="#">
         <video>
   <source src="" type="video/mp4">
   </video>
         <p>Video 04</p></a>
     </div>
    <div class="home_home col-lg-3 col-md-3 p-3">
        <a href="#">
   <video>
   <source src="" type="video/mp4">
   </video>
         <p>Video 05</p></a>
     </div>   
     <div class="home_home col-lg-3 col-md-3 p-3">
       <a href="#">
   <video>
   <source src="" type="video/mp4">
   </video>
         <p>Video 06</p></a>
     </div>
     <div class="home_home col-lg-3 col-md-3 p-3">
         <a href="#">
         <video>
   <source src="" type="video/mp4">
   </video>
         <p>Video 07</p></a>
     </div>
     <div class="home_home col-lg-3 col-md-3 p-3">
         <a href="#">
         <video>
   <source src="" type="video/mp4">
   </video>
         <p>Video 08</p></a>
     </div>
     <div class="home_home col-lg-3 col-md-3 p-3">
       <<a href="#">
         <video>
   <source src="" type="video/mp4">
   </video>
         <p>Video 09</p></a>
     </div>
 </section>
  );
}

export default App;
