import React from "react";
import AminaComponent from "../_components/AminaComponent";
import HaskeComponent from "../_components/HaskeComponent";

type Props = {};

export default function page({ params }: { params: { slug: string } }) {
//   console.log(params);
  if (params.slug[0] === "amina") {
    return <div className=""><AminaComponent /></div>;
  }

  if (params.slug[0] === "haske"){
    return <HaskeComponent/>;
  }
  return <div>
    <AminaComponent/>
  </div>;
}
