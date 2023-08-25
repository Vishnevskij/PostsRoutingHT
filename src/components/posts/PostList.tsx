import React from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { PostInterface } from './types';
import { FlexColumn } from '../shared/Flex';
import { PostItem } from './PostItem';


export const PostList = () => {
    const { data, isLoading } = useFetchData<PostInterface[]>(
        "https://jsonplaceholder.typicode.com/posts",
        { method: "GET" }
          );
  return (
    <FlexColumn width='100%' alignItems='center'>
    {data?.map((post)=>(<PostItem post={post}/> ))}
      </FlexColumn>
  )
}
