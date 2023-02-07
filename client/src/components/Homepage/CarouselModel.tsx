import { useState, useEffect } from 'react';
import { Model } from "../../types/model";
import { modelList } from "../../utils/models";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 2024, min: 990 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 990, min: 564 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 564, min: 0 },
    items: 1,
  },
};

type CarouselModelProps = {
  handleModel: (model_id:string)=>void
  removerModel:(model_id: string)=>void
  models: Model[];
}

const CarouselModel = ({models,handleModel, removerModel}:CarouselModelProps) => {


  return (
    <section className="px-2 mb-6 md:px-20 border-y border-hover py-4">
      <Carousel responsive={responsive}>
        {models.map((model, index) => (
          <div
            key={index}
            onClick={() => handleModel(model.mode_id)}
            onDoubleClick={()=>removerModel(model.mode_id)}
            className={`flex p-2 rounded-xl items-center gap-4 mr-4 hover:bg-neutral-900 transition  hover:ease-out ${
              model.active && "bg-hover"
            }`}>
            <img
              src={model.image_url}
              alt={model.mode_id}
              className="w-[60px] h-[60px] object-cover rounded-xl"
            />
            <h3>{model.name}</h3>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default CarouselModel;
