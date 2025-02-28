// Styles
import "./index.scss";

function TriggerHeader({ photo, name }: { photo: string; name: string }) {
  return (
    <div className="trigger-header">
      <img src={photo} width={34} height={34} alt="Imagem de perfil" />
      <p>{name}</p>
    </div>
  );
}

export default TriggerHeader;
