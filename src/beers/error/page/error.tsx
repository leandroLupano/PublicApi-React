import './error.scss';

export default function Error(): JSX.Element {
  return (
    <section className="container-error">
      <div className="error-text">
        <div>
          <p className="number">404</p>
          <p className="page"> PAGE NOT FOUND</p>
        </div>
      </div>
      <div className="error-logo">
        <div>
          <img
            className="elf"
            src="./img/elf-logo-transparent.png"
            alt="elf drink"
          ></img>
          <img
            className="stone"
            src="./img/stone-elf.png"
            alt="stone-elf"
          ></img>
        </div>
      </div>
    </section>
  );
}
