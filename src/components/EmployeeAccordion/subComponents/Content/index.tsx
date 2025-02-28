// Styles
import "./index.scss";

function Content({
  phone,
  admissionDate,
  job,
}: {
  phone: string;
  admissionDate: string;
  job: string;
}) {
  return (
    <div className="employee-details-content">
      <ul>
        <li>
          <strong>Cargo:</strong>
          <span title={job}>{job}</span>
        </li>
        <li>
          <strong>Data de admissão:</strong>
          <span title={admissionDate}>{admissionDate}</span>
        </li>
        <li>
          <strong>Telefone:</strong>
          <span title={phone}>{phone}</span>
        </li>
      </ul>
    </div>
  );
}

export default Content;
