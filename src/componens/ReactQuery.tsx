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
  const { isLoading, error, data } = useQuery<Album[]>(['albums'], fetchAlbums);

  if (error) return <p>エラーです！</p>
  if (isLoading) return <p>ローディング中だよ〜</p>

  return (
    <div>
      {data?.map((photo) => <p key={photo.id}>{photo.title}</p>)}
    </div>
  ) 
}
