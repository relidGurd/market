import { ICategory } from "./category";
import { IProduct } from "./productTypes";

export interface IPage {
    title: string,
    description: string,
    categories: ICategory[],
    recommendations: IPageRecommendation,
    components: IComponent[]
}



interface IPageRecommendation {
    id: number,
    title: string,
    products: IProduct[]
}

interface IComponent {
    __component: string,
    id: number,
    title: string,
    description: string,
    category?: ICategory,
    products?: IProduct[]
}