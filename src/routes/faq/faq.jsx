import { useState } from "react";
import "./faq.css";
import { Link } from "react-router-dom";

function Faq() {
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <div className="faqContainer">
      <h1 className="introFaq">¿Tienes alguna duda?</h1>
      <div className="question">
        <h2
          className="questionContainer"
          onClick={() =>
            openQuestion === "q1"
              ? setOpenQuestion(null)
              : setOpenQuestion("q1")
          }
        >
          ¿Cómo puedo ganar puntos?<i className="fa-solid fa-caret-down"></i>
        </h2>
        <p className={openQuestion === "q1" ? "answer visible" : "answer"}>
          Para ganar puntos, es esencial visitar uno de nuestros locales
          sección{" "}
          <Link className="faqLink" to={"/map"}>
            Mapa
          </Link>
          .
        </p>
      </div>
      <div className="question">
        <h2
          className="questionContainer"
          onClick={() =>
            openQuestion === "q2"
              ? setOpenQuestion(null)
              : setOpenQuestion("q2")
          }
        >
          ¿Puedo comprar un libro que he intercambiado?
          <i className="fa-solid fa-caret-down"></i>
        </h2>
        <p className={openQuestion === "q2" ? "answer visible" : "answer"}>
          Para canjear tus puntos, visita tu{" "}
          <Link className="faqLink" to={"/profile"}>
            Perfil
          </Link>{" "}
          y pulsa el botón "Canjear mis puntos", después selecciona el descuento
          y comercio de tu elección. Puedes efectuar el canje tanto en la página
          web del comercio seleccionado como directamente en el local físico.
          ¡Aprovecha tus descuentos!
        </p>
      </div>
      <div className="question">
        <h2
          className="questionContainer"
          onClick={() =>
            openQuestion === "q3"
              ? setOpenQuestion(null)
              : setOpenQuestion("q3")
          }
        >
          ¿En qué comercios puedo hacerlo?
          <i className="fa-solid fa-caret-down"></i>
        </h2>
        <p className={openQuestion === "q3" ? "answer visible" : "answer"}>
          Puedes canjear tus puntos en los comercios destacados en la sección{" "}
          <Link className="faqLink" to={"/map"}>
            Mapa
          </Link>{" "}
          de nuestra página web. Algunos de los comercios
          participantes son: Humana, Supermercados Dia, Cafetería la Esquina,
          Tea Shop, Alcampo, Kiabi y Bershka, entre otros. Te invitamos a
          explorar esta sección para conocer todos los establecimientos
          asociados y disfrutar de descuentos exclusivos en una diversidad de
          productos y servicios.
        </p>
      </div>
      <div className="question">
        <h2
          className="questionContainer"
          onClick={() =>
            openQuestion === "q4"
              ? setOpenQuestion(null)
              : setOpenQuestion("q4")
          }
        >
          ¿Caducan mis puntos?<i className="fa-solid fa-caret-down"></i>
        </h2>
        <p className={openQuestion === "q4" ? "answer visible" : "answer"}>
          Los puntos que acumules no caducan por inactividad, así que no hay
          problema si no has ingresado a la página web en un tiempo. Sin
          embargo, es vital tener presente que, aunque tus puntos no expiren,
          los descuentos o beneficios que obtengas de los comercios pueden tener
          una fecha de caducidad específica. Te recomendamos revisar los
          términos de cada oferta para asegurarte de aprovecharlas a tiempo.
        </p>
      </div>
      <div className="question">
        <h2
          className="questionContainer"
          onClick={() =>
            openQuestion === "q5"
              ? setOpenQuestion(null)
              : setOpenQuestion("q5")
          }
        >
          ¿Para que sirve el sistema de clasificación?          <i className="fa-solid fa-caret-down"></i>
        </h2>
        <p className={openQuestion === "q5" ? "answer visible" : "answer"}>
          El porcentaje de descuento que puedes obtener varía según la decisión
          de cada comercio, oscilando generalmente entre un 5% y un 20%. Es
          esencial tener en cuenta que este porcentaje puede cambiar dependiendo
          del local y las promociones que cada uno ofrezca en un momento
          determinado. Te recomendamos consultar directamente en los comercios o
          en nuestra sección de{" "}
          <Link className="faqLink" to={"/map"}>
            Mapa
          </Link>{" "}
          para estar al tanto de las ofertas actuales.
        </p>
      </div>
      <div className="question">
        <h2
          className="questionContainer"
          onClick={() =>
            openQuestion === "q6"
              ? setOpenQuestion(null)
              : setOpenQuestion("q6")
          }
        >
          ¿Quiénes somos?<i className="fa-solid fa-caret-down"></i>
        </h2>
        <p className={openQuestion === "q6" ? "answer visible" : "answer"}>
          <div className="developersProfile">
            <div className="developerCard">
              <div className="Oriol"></div>
              <h1>Oriol</h1>
            </div>
          </div>
          
        </p>
      </div>
    </div>
  );
}

export default Faq;
