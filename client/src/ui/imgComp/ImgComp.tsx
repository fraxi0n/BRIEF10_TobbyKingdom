import "./imgComp.css";

interface ImgProps {
  path: string,
  size? : number
  //   variant: "primary" | "secondary";
}

export const ImgComp = ({ path , size}: ImgProps) => {

  const widthImg = {width : ` ${ size? size : 0}px` }


  return <>
    <img style={size? widthImg : {}}
      src={`http://localhost:3010/pictures${path} `}>
    </img>
  </>
};
