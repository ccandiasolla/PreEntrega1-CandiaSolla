import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebase/firebaseConfig';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const docRef = doc(db, 'products', itemId);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          const productAdapted = { id: docSnapshot.id, ...data };
          setProduct(productAdapted);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [itemId]);

  return (
    <div className="CardItem">
      {loading ? <p>Loading...</p> : <ItemDetail {...product} />}
    </div>
  );
};

export default ItemDetailContainer;
