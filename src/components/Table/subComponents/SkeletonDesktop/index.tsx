import Skeleton from "react-loading-skeleton";

// Styles
import "./index.scss";

const rows = 10;
const columns = 5;

function SkeletonDesktop() {
  return (
    <tbody>
      {Array.from({ length: rows }).map((_, index) => (
        <tr key={index} className="skeleton-desktop__row">
          {Array.from({ length: columns }).map((_, index) => (
            <td key={index}>
              <Skeleton height={30} width="90%" />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default SkeletonDesktop;
