import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Album = {
  userId: number;
  id: number;
  title: string;
}

const fetchAlbums = async () => {
  const result = await axios.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  return result.data;
}

export const ReactQuery = () => {
  const { data } = useQuery<Album[]>(['albums'], fetchAlbums);

  return (
    <div>
      {data?.map((photo) => <p key={photo.id}>{photo.title}</p>)}
    </div>
  ) 
}
