export default function Alert({ alertMessage, alertType }) {
  return <div className={`alert ${alertType}`}>{alertMessage}</div>;
}
