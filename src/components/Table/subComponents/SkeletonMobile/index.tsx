import Skeleton from "react-loading-skeleton";

// Styles
import "./index.scss";

const rows = 10;

function SkeletonMobile() {
  return (
    <main className="skeleton-mobile">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="skeleton-mobile__row">
          <Skeleton width={34} height={34} borderRadius="50%" />
          <Skeleton width="90%" height={24} />
          <Skeleton width={8} height={8} />
        </div>
      ))}
    </main>
  );
}

export default SkeletonMobile;
