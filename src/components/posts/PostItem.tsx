import React, { FC } from 'react';
import { PostInterface } from './types';
import { FlexColumn, FlexRow } from '../shared/Flex';

interface PropsInterface {
    post: PostInterface
}

export const PostItem: FC<PropsInterface> = ({post}) => {
    const {userId, id, title, body } = post;
    return (
        <FlexRow width='calc(90%)' background='lightgrey' margin='5px' alignItems='center' padding='10px'justifyContent='space-between'>
        
        <FlexColumn>
        
        <h5>{title}</h5>
        <p>{body}</p>
        </FlexColumn>
       
    </FlexRow>
  )
}
