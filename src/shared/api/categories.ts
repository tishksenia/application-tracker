import { AxiosResponse } from "axios";
import { axiosClient } from "./axios-client";

interface Category {
  id: number;
  title: string;
  applications: number[];
}

const categoriesApi = {
  getCategories: (): Promise<AxiosResponse<Category[]>> =>
    axiosClient.get("api/categories"),
};

export { categoriesApi };
export type { Category };
