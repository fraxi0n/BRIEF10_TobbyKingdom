import "./imgComp.css";
import { useScreenWatch } from "../../hooks/useScreenWatch";
const API_URL = import.meta.env.VITE_API_URL;


interface ImgProps {
  path: string,
  size? : number
  //   variant: "primary" | "secondary";
}

export const ImgComp = ({ path , size}: ImgProps) => {

  const SW = useScreenWatch()
if (size && SW.width<size )
{
  size=SW.width

}
  
  const widthImg = {width : ` ${ size? size : 0}px` }

  return <>
    <img style={size? widthImg : {}}
      src={`${API_URL}/pictures${path} `}>
    </img>
  </>
};
