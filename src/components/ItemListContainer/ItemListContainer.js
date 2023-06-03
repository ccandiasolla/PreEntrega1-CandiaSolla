import './ItemListContainer.css'
import { useState, useEffect } from 'react';
import { getDocs, doc, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = categoryId
          ? query(collection(db, 'products'), where('category', '==', categoryId))
          : collection(db, 'products');

        const querySnapshot = await getDocs(collectionRef);
        const productsAdapted = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });

        setProducts(productsAdapted);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      {loading ? <p>Loading...</p> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;