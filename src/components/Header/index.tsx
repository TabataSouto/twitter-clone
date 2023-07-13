import "./style.css";

interface HeaderProps {
  title: string;
  isStatus: boolean;
}

const Header = (props: HeaderProps) => {
  const { title, isStatus } = props;

  return (
    <div className="timeline-header">
      <h3>{title}</h3>
      {!isStatus && (
        <div>
          <a href="" className="current-page">
            Para você
          </a>
          <a href="">Seguindo</a>
        </div>
      )}
    </div>
  );
};

export default Header;
