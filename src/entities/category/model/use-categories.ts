import { useEffect, useState } from "react";
import { Category } from "pages/api/categories";
import { categoriesApi } from "shared/api/categories";

export const useCategories = (): { categories: Category[] } => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    categoriesApi.getCategories().then(({ data }) => {
      setCategories(data);
    });
  }, []);

  return { categories };
};
