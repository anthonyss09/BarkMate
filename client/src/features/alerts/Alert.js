export default function Alert({ alertMessage, alertType }) {
  return (
    <aside className="alert-container">
      <div className={`alert ${alertType}`}>{alertMessage}</div>
    </aside>
  );
}
