"use client";

import { Category } from "@prisma/client";
import {DiJavascript1,DiHtml5,DiCss3,DiReact,DiMongodb} from 'react-icons/di'
import {BiLogoTypescript,BiLogoTailwindCss} from 'react-icons/bi'

import { IconType } from "react-icons";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
   "HTML": DiHtml5,
   "CSS": DiCss3,
   "Tailwind": BiLogoTailwindCss,
   "MongoDB": DiMongodb,
  "JavaScript": DiJavascript1,
  "REACT": DiReact,
  "TypeScript": BiLogoTypescript,
};

export const Categories = ({
  items,
}: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      
      ))}
    </div>
  )
}