// Seller.tsx
import { useNavigate } from "react-router-dom";

const Seller: React.FC = () => {
  const navigate = useNavigate();

  const navigateToBuyer = () => {
    navigate('/buyer');
  };

  return (
    <div>
      <h1>Seller Page</h1>
      <button onClick={navigateToBuyer}>Go to Buyer Page</button>
    </div>
  );
};

export default Seller;
