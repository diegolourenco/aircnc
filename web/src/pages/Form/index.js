import React, { useState, useMemo } from "react";
import api from "../../services/api";

import "./styles.css";
import camera from "../../assets/camera.svg";

export default function Form({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState("");
  const [techs, setTechs] = useState("");
  const [price, setPrice] = useState("");

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();
    const user_id = localStorage.getItem("user");

    const data = new FormData();
    data.append("thumbnail", thumbnail);
    data.append("company", company);
    data.append("techs", techs);
    data.append("price", price);

    await api.post("/spots", data, {
      headers: { user_id }
    });

    history.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        className={`thumbnail ${
          thumbnail ? "has-thumbnail" : ""
        }`}
        title="Selecionar imagem"
        style={{
          backgroundImage: `url(${preview})`
        }}
      >
        <input
          type="file"
          onChange={event => setThumbnail(event.target.files[0])}
        />
        <img src={camera} alt="Select img" />
      </label>

      <label htmlFor="company">Empresa*</label>
      <input
        id="company"
        name="company"
        placeholder="Sua empresa incrível"
        value={company}
        onChange={event => setCompany(event.target.value)}
      />

      <label htmlFor="techs">
        Tecnologias* <span>(separadas por vírgula)</span>
      </label>
      <input
        id="techs"
        name="techs"
        placeholder="Quais tecnologias usam?"
        value={techs}
        onChange={event => setTechs(event.target.value)}
      />

      <label htmlFor="price">
        Preço da diária* <span>(em branco para gratuito)</span>
      </label>
      <input
        id="price"
        name="price"
        type="number"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={event => setPrice(event.target.value)}
      />

      <button type="submit" className="btn btn-primary">
        Cadastrar
      </button>
    </form>
  );
}
