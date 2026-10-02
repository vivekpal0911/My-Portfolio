import { FaDog } from 'react-icons/fa';
import './PetDog.css';

function PetDog() {
  return (
    <aside className="pet-dog" aria-label="Portfolio mascot">
      <span className="pet-dog__message" role="status">
        Hi! I&apos;m Byte.
      </span>
      <span className="pet-dog__body" tabIndex="0" aria-label="Byte the dog mascot">
        <FaDog aria-hidden="true" />
      </span>
    </aside>
  );
}

export default PetDog;
