import "../../assets/style/button.css";

export const Button = ({ sum, res }) => {
  return (
    <div className="container__button">
      <button className="button__app" onClick={res}>
        - 1
      </button>
      <button className="button__app" onClick={sum}>
        + 1
      </button>
    </div>
  );
};
