import './about.scss';

export default function AboutPage(): JSX.Element {
  return (
    <section className="container__about">
      <div className="main__title">
        <h2>About us</h2>
      </div>

      <div>
        <h3 className="about__title">¿QUIÉNES SOMOS?</h3>
        <p className="about__titletext">
          Somos la plataforma de delivery digital de productos artesanos,
          impulsada por Estrella Galicia y que pretende acelerar el movimiento
          Beers City.
        </p>
      </div>

      <div>
        <h3 className="about__title">¿QUÉ HACEMOS?</h3>
        <p className="about__titletext">
          Facilitamos a cualquier persona, esté donde esté, el disfrutar de la
          mejor experiencia craft. Y ofrecemos a los artesanos una plataforma de
          venta online para sus productos.
        </p>
      </div>

      <div>
        <h3 className="about__title">¿A QUIÉN NOS DIRIGIMOS?</h3>
        <p className="about__titletext">
          A todas las personas que sepan apreciar la pasión y el cariño que
          esconden los productos Beers City, así como su impacto positivo en el
          planeta.
        </p>
      </div>

      <div>
        <h3 className="about__title">DELIVERING PASSION</h3>
        <p className="about__titletext">
          PERSONAS: Hay personas que se esfuerzan en poner toda su alma, cariño
          y cuidado a todo lo que hacen.
        </p>
        <p className="about__titletext">
          ARTESANOS: Ellos son los crafters. Artesanos que crean sus productos
          con auténtica pasión.
        </p>
        <p className="about__titletext">
          PRODUCTOS: Por eso en Beers City no solo vamos a entregar productos
          craft. Vamos a entregar la pasión con la que han sido creados.
        </p>
      </div>
    </section>
  );
}
