import styles from "./NewNote.css";

function NewNote() {
  return (
    <form method="post" id="note-form">
      <p>
        <label htmlFor="title">Título / Descrição</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="content">Conteúdo (até 55 caracteres)</label>
        <textarea id="content" name="content" rows="5" required />
      </p>
      <div className="form-actions">
        <button>Adicionar!</button>
      </div>
    </form>
  );
}

export default NewNote;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
