export default function Alert({ alertMessage, alertType }) {
  return (
    <aside className="alert-container">
      <p className={`alert ${alertType}`}>{alertMessage}</p>
    </aside>
  );
}
