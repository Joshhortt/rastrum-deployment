import { Link } from "@remix-run/react";

import homeStyles from "~/styles/home.css";

export default function Index() {
  return (
    <main id="content">
      <h1>A melhor forma de manter um registo das suas notas!</h1>
      <p id="sub-title">
        Experimente a esta versão Beta e nunca perca o controle das suas notas!
      </p>
      <p id="cta">
        <Link to="/notes">Começar!</Link>
      </p>
      <section>
        <div className="marketing-image">
          <img src="images/notes.png" alt="Note taking" />
        </div>
      </section>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: homeStyles }];
}
