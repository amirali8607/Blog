import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = (weblogId) => {
  const [mycollection, setMycollection] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    let ref = collection(db, weblogId);
    const unsub = onSnapshot(ref, (snapshot) => {
      if (snapshot.empty) {
        setError("Check your Connection...");
        setIsLoading(false);
      } else {
        let result = [];
        snapshot.docs.forEach((myDocs) => {
          result.push({ id: myDocs.id, ...myDocs.data() });
        });
        setMycollection(result);
        setIsLoading(false);
      }
    });
    return () => unsub();
  }, [weblogId]);
  return { mycollection, isLoading, error };
};
