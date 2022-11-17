import { useState } from "react";
import { useEffect } from "react";
import { getAllProducts } from "../api/products";
import bg from "../assets/images/fondo.png";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const getProducts = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data.results);
    } catch {}
  };

  const formatCurrency = (value) =>
    Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(
      value
    );

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <section className="m-3 d-flex justify-content-between">
        <form>
          <input type="search" name="" id="" />
        </form>
        <div className="d-flex gap-2">
          <div className="position-relative bg-success p-2 rounded">
            <i class="bi bi-cart text-white" aria-label="Carrito de compras" />
            {count > 0 && (
              <span
                className="position-absolute d-flex justify-content-center align-items-center bg-white rounded-circle"
                style={{
                  top: "-.5rem",
                  right: "-.5rem",
                  fontSize: ".8rem",
                  minWidth: "1.3rem",
                  height: "1.3rem",
                }}
              >
                {count}
              </span>
            )}
          </div>
          <button
            className="btn btn-danger"
            aria-label="Limpiar carrito"
            onClick={() => setCount(0)}
            disabled={count === 0}
          >
            <i class="bi bi-trash text-white" />
          </button>
        </div>
      </section>
      <section className="px-3">
        <div
          className="d-flex flex-wrap"
          style={{
            gap: "2rem",
          }}
        >
          {products.map(({ nombre, imagen, precio_venta }) => (
            <article
              style={{
                width: "20rem",
                maxWidth: "100%",
                background: "#fff",
                borderRadius: ".5rem",
                overflow: "hidden",
              }}
            >
              <picture>
                <img
                  src={imagen}
                  alt={nombre}
                  style={{ width: "100%", height: "15rem", objectFit: "cover" }}
                />
              </picture>
              <div className="p-2">
                <h2 className="text">{nombre}</h2>
                <p>{formatCurrency(precio_venta)}</p>
                <div className="d-flex justify-content-end gap-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => setCount((c) => c - 1)}
                    disabled={count === 0}
                  >
                    <i class="bi bi-trash text-white" />
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => setCount((c) => c + 1)}
                  >
                    Anadir al carrito
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
